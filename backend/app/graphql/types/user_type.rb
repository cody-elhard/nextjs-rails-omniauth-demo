module Types
  class UserType < Types::BaseObject
    description "A user"

    field :id, ID, null: true
    field :email, String, null: true
    field :name, String, null: true
  end
end
