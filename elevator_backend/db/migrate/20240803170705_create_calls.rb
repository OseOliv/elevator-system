class CreateCalls < ActiveRecord::Migration[7.0]
  def change
    create_table :calls do |t|
      t.integer :floor, null: false
      t.string :direction, null: false
      t.string :status, default: 'pending'
      t.timestamps
    end
  end
end
