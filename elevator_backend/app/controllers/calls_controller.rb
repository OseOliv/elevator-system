class CallsController < ApplicationController
  before_action :set_call, only: [:update]

  def index
    @calls = Call.all
    render json: @calls
  end

  def create
    @call = Call.new(call_params)
    @call.status = 'pending'

    if @call.save
      create_elevator_log(@call)
      render json: @call, status: :created
    else
      render json: @call.errors, status: :unprocessable_entity
    end
  end

  def update
    if @call.update(call_params.merge(status: 'completed'))
      render json: @call
    else
      render json: @call.errors, status: :unprocessable_entity
    end
  end

  private

  def set_call
    @call = Call.find(params[:id])
  end

  def call_params
    params.require(:call).permit(:floor, :direction, :status)
  end

  def create_elevator_log(call)
    ElevatorLog.create(floor: call.floor, direction: call.direction, timestamp: Time.current)
  end
end
