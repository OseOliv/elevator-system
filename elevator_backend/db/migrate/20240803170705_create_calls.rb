class CreateCalls < ActiveRecord::Migration[7.1]
  def change
    create_table :calls do |t|
      t.integer :floor
      t.string :direction
      t.string :status

      t.timestamps
    end
  end
end
