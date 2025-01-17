const gql = require('graphql-tag');

export const typeDefs = gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

  type Query {
    """
    Get the current user from our fake "auth" headers
    Set the "x-user-id" header to the user id.
    """
    viewer: User
  }

  """
  An user account in our system
  """
  type User @key(fields: "id") {
    id: ID!

    """
    The users login username
    """
    username: String!

    """
    The user's active cart session. Once the cart items have been purchases, they transition to an Order
    """
    cart: Cart

    """
    The users previous purchases
    """
    orders(filters: OrderFilters): [Order]

    """
    The users current saved shipping address
    """
    shippingAddress: String
  }

  """
  Search filters for when showing an users previous purchases
  """
  input OrderFilters {
    orderId: ID!
    priceHigh: Float
    priceLow: Float
    itemsInOrder: Int
  }

  """
  An user's saved cart session. Only one cart can be active at a time
  """
  type Cart {
    """
    Items saved in the cart session
    """
    items: [Product]

    """
    The current total of all the items in the cart, before taxes and shipping
    """
    subtotal: Float
  }

  type Order @key(fields: "id", resolvable: false) {
    id: ID!
  }

  type Product @key(fields: "id", resolvable: false) {
    id: ID!
  }
`;
