require 'rails_helper'

RSpec.describe ElevatorLog, type: :model do
  it 'is valid with valid attributes' do
    elevator_log = ElevatorLog.new(
      floor: 5,
      direction: 'up',
      timestamp: Time.now,
      from_floor: 3,
      to_floor: 7
    )
    expect(elevator_log).to be_valid
  end

  it 'is not valid without a floor' do
    elevator_log = ElevatorLog.new(floor: nil)
    expect(elevator_log).not_to be_valid
  end

  # Adicione mais testes conforme necessário
end
