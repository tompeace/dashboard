const { ApolloServer, gql } = require('apollo-server-express');
const users = require('./users')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`

	type User {
		id: ID
		_key: ID
		firstName: String
		lastName: String
		email: String
		dob: String
	}

  type Query {
		user(id: ID!): User
		users: [User]
	}

  type Mutation {
    createUser(
			id: ID
			firstName: String
			lastName: String
			email: String
			dob: String
		): User!

		updateUser(
			id: ID!
			firstName: String
			lastName: String
			email: String
			dob: String
		): User!

		removeUser(
			id: ID!
		): Boolean
	}
`;


const resolvers = {
	Query: {
		...users.queries
	},
	Mutation: {
		...users.mutations
	}
};

module.exports = new ApolloServer({ typeDefs, resolvers })