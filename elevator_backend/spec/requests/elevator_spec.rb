# spec/controllers/elevator_controller_spec.rb
require 'rails_helper'

RSpec.describe ElevatorController, type: :controller do
  describe 'POST #arrive' do
    let(:current_floor) { 5 }
    let(:previous_floor) { 3 }
    let(:direction) { 'up' }
    let!(:pending_call) { Call.create(floor: current_floor, status: 'pending') }

    before do
      post :arrive, params: { floor: current_floor, previous_floor: previous_floor, direction: direction }
    end

    it 'updates calls status to completed' do
      expect(pending_call.reload.status).to eq('completed')
    end

    it 'creates a new elevator log' do
      expect(ElevatorLog.count).to eq(1)
    end

    it 'returns a success message' do
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['message']).to eq('Calls updated to completed')
    end

    it 'returns an error when elevator log creation fails' do
      allow_any_instance_of(ElevatorLog).to receive(:save).and_return(false)
      post :arrive, params: { floor: current_floor, previous_floor: previous_floor, direction: direction }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
