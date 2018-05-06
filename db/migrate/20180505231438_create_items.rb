class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.float :quantity
      t.boolean :replace

      t.timestamps
    end
  end
end
