class CreateElevatorLogs < ActiveRecord::Migration[7.1]
  def change
    create_table :elevator_logs do |t|
      t.integer :floor, null: false
      t.string :direction, null: false
      t.datetime :timestamp, null: false
      t.integer :from_floor
      t.integer :to_floor

      t.timestamps
    end
  end
end