class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title

  has_many :to_dos
end
