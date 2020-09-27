class ToDoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :checked, :list_id
end
