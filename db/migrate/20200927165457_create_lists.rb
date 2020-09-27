class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists, id: :uuid do |t|
      t.string :title

      t.timestamps
    end
  end
end
