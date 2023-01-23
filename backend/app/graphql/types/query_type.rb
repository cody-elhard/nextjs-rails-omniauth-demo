module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"

    field :is_signed_in, Boolean, null: false, description: "Check if user is signed in"

    field :user, UserType, null: true, description: "Get current user"

    def test_field
      "Hello World!"
    end

    def is_signed_in
      return context[:is_signed_in]
    end

    def user
      return context[:current_user]
    end
  end
end
