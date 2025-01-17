const gql = require('graphql-tag');

export default gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

  type Review @key(fields: "id") {
    id: ID!
    rating: Float
    content: String
  }

  type Product @key(fields: "id") {
    id: ID!
    reviews: [Review]
    averageRating: Float
  }
`;
