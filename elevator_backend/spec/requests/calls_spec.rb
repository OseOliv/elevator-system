require 'rails_helper'

RSpec.describe CallsController, type: :controller do
  let(:valid_attributes) { { floor: 1, direction: 'up', status: 'pending' } }
  let(:invalid_attributes) { { floor: nil, direction: nil, status: 'pending' } }

  describe "POST #create" do
    it "creates a new Call" do
      expect {
        post :create, params: { call: valid_attributes }
      }.to change(Call, :count).by(1)
    end

    it "renders a JSON response with the new call" do
      post :create, params: { call: valid_attributes }
      expect(response).to have_http_status(:created)
      expect(response.content_type).to include("application/json")
    end
  end

  describe "PATCH #update" do
    let!(:call) { Call.create!(valid_attributes) }

    context "with valid parameters" do
      let(:new_attributes) { { status: 'completed' } }

      it "updates the requested call" do
        patch :update, params: { id: call.to_param, call: new_attributes }
        call.reload
        expect(call.status).to eq('completed')
      end

      it "renders a JSON response with the call" do
        patch :update, params: { id: call.to_param, call: new_attributes }
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to include("application/json")
      end
    end
  end
end


