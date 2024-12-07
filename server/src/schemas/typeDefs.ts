const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String!
    bookId: ID
    image: String
    link: String
    title: String!
  }


  input BookInput {
    bookId: ID
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser: User
  }

  type Mutation {
    createUser(username: String!,
    email: String!,
    password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    deleteBook(bookId: ID): User
  }
`;

export default typeDefs;
