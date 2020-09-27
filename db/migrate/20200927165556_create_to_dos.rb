class CreateToDos < ActiveRecord::Migration[6.0]
  def change
    create_table :to_dos, id: :uuid do |t|
      t.string :name
      t.boolean :checked
      t.belongs_to :list, null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
