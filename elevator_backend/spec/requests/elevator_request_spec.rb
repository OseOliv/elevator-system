require 'rails_helper'

RSpec.describe "Elevator", type: :request do
  let!(:pending_call) { create(:call, floor: 3, status: 'pending', direction: 'up') }

  describe "POST /arrive" do
    it "updates the status of the call to completed" do
      post '/arrive', params: {
        floor: 3,
        previous_floor: 2,
        direction: 'up'
      }
      expect(response).to have_http_status(:ok)
      expect(pending_call.reload.status).to eq('completed')
    end

    it "creates a new elevator log" do
      expect {
        post '/arrive', params: {
          floor: 3,
          previous_floor: 2,
          direction: 'up'
        }
      }.to change(ElevatorLog, :count).by(1)
    end

    it "returns an error when elevator log creation fails" do
      allow_any_instance_of(ElevatorLog).to receive(:save).and_return(false)
      post '/arrive', params: {
        floor: 3,
        previous_floor: 2,
        direction: 'up'
      }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
