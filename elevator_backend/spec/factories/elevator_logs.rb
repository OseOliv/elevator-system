FactoryBot.define do
  factory :elevator_log do
    floor { 1 }
    direction { "up" }
    timestamp { Time.current }
  end
end
