const gql = require('graphql-tag');

export default gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@external", "@requires"]
    )

  type Order @key(fields: "id") {
    id: ID!
    buyer: User! @external
    items: [Product!]! @external

    """
    Calculate the cost to ship all the variants to the users address
    """
    shippingCost: Float @requires(fields: "items { weight } buyer { shippingAddress }")
  }

  type User @key(fields: "id", resolvable: false) {
    id: ID!
    shippingAddress: String @external
  }

  type Product @key(fields: "id", resolvable: false) {
    id: ID!
    weight: Float @external
  }
`;
