FactoryBot.define do
  factory :elevator_log do
    floor { 1 }
    direction { "MyString" }
    timestamp { Time.current }
  end
end
