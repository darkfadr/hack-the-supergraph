import gql from 'graphql-tag';

export default gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])

  type Query {
    """
    Get all available products to shop for. Optionally provide some search filters
    """
    searchProducts(searchInput: ProductSearchInput! = {}): [Product]
    """
    Get a specific product by id. Useful for the product details page or checkout page
    """
    product(id: ID!): Product
    """
    Top products for home display
    """
    products: [Product]
  }

  """
  Search filters for when returning Products
  """
  input ProductSearchInput {
    titleStartsWith: String
  }

  """
  A specific product sold by our store. This contains all the high level details but is not the purchasable item.
  """
  type Product @key(fields: "id") {
    id: ID!
    title: String
    description: String
    mediaUrl: String
    weight: Float
    price: Money
  }

  type Money @shareable {
    amount: Float
    currency: String
  }
`;
