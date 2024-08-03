class ElevatorController < ApplicationController

  def arrive
    current_floor = params[:floor].to_i
    previous_floor = params[:previous_floor].to_i
    direction = params[:direction]

    Call.where(floor: current_floor, status: 'pending').update_all(status: 'completed')

    elevator_log = ElevatorLog.new(
      from_floor: previous_floor,
      to_floor: current_floor,
      direction: direction,
      timestamp: Time.current
    )

    if elevator_log.save
      render json: { message: 'Calls updated to completed' }, status: :ok
    else
      render json: elevator_log.errors, status: :unprocessable_entity
    end
  end
end
