ActiveRecord::Schema[7.1].define(version: 2024_08_03_171540) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calls", force: :cascade do |t|
    t.integer "floor", null: false
    t.string "direction", null: false
    t.string "status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "elevator_logs", force: :cascade do |t|
    t.integer "floor", null: false
    t.string "direction", null: false
    t.datetime "timestamp", null: false
    t.integer "from_floor"
    t.integer "to_floor"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
