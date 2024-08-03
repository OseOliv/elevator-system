require 'rails_helper'

RSpec.describe LogsController, type: :controller do
  let(:valid_attributes) do
    { from_floor: 1, to_floor: 10, direction: 'up', timestamp: Time.now }
  end

  let(:invalid_attributes) do
    { from_floor: nil, to_floor: nil, direction: 'down', timestamp: nil }
  end

  describe 'GET #index' do
    it 'returns a success response' do
      ElevatorLog.create! valid_attributes
      get :index, as: :json
      expect(response).to be_successful
      expect(response.content_type).to eq('application/json; charset=utf-8')
    end
  end

  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a new ElevatorLog' do
        expect {
          post :create, params: { elevator_log: valid_attributes }, as: :json
        }.to change(ElevatorLog, :count).by(1)
      end

      it 'renders a JSON response with the new elevator_log' do
        post :create, params: { elevator_log: valid_attributes }, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json; charset=utf-8')
      end
    end

    context 'with invalid parameters' do
      it 'renders a JSON response with errors for the new elevator_log' do
        post :create, params: { elevator_log: invalid_attributes }, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json; charset=utf-8')
      end
    end
  end
end
