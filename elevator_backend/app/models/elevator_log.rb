class ElevatorLog < ApplicationRecord
  validates :direction, presence: true
  validates :timestamp, presence: true
  validates :from_floor, presence: true
  validates :to_floor, presence: true
end