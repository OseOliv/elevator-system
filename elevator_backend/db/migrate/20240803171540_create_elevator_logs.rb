class CreateElevatorLogs < ActiveRecord::Migration[7.1]
  def change
    create_table :elevator_logs do |t|
      t.integer :floor
      t.string :direction
      t.datetime :timestamp
      t.integer :from_floor
      t.integer :to_floor

      t.timestamps
    end
  end
end
