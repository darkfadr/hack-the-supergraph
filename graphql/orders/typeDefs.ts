import gql from 'graphql-tag';

export default gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])

  type Query {
    """
    Get a specific order by id. Meant to be used for a detailed view of an order
    """
    order(id: ID!): Order
  }

  """
  Returns information about a specific purchase
  """
  type Order @key(fields: "id") {
    """
    Each order has a unique id which is separate from the user or items they bought
    """
    id: ID!
    """
    The user who made the purchase
    """
    buyer: User!
    """
    A list of all the items they purchased.
    """
    items: [Product!]!
    total: Money
  }

  type User @key(fields: "id", resolvable: false) {
    id: ID!
  }

  type Product @key(fields: "id", resolvable: false) {
    id: ID!
  }

  type Money @shareable {
    amount: Float
    currency: String
  }
`;
