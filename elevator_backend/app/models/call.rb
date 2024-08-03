class Call < ApplicationRecord
  validates :floor, presence: true
  validates :direction, presence: true
  validates :status, presence: true
end