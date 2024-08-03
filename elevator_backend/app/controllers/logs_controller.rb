class LogsController < ApplicationController
  def index
    @logs = ElevatorLog.all
    render json: @logs
  end

  def create
    @log = ElevatorLog.new(log_params)

    if @log.save
      render json: @log, status: :created
    else
      render json: { errors: @log.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def log_params
    params.require(:elevator_log).permit(:from_floor, :to_floor, :direction, :timestamp)
  end
end
