const { ApolloServer, gql } = require('apollo-server-express');
const { get, create, update, model } = require('./db.js')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`

	type User {
		_id: ID
		_key: ID
		firstName: String
		lastName: String
		email: String
		dob: String
	}

  type Query {
		hello: String
		user(_id: ID!): User
		users: [User]
	}

  type Mutation {
    createUser(
			firstName: String
			lastName: String
			email: String
			dob: String
		): User!

		updateUser(
			firstName: String
			lastName: String
			email: String
			dob: String
		): User!

		removeUser(
			_id: ID
		): User!
	}
`;

const Users = model('users')

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		user: async (p, { _id }) => await Users.get(_id),
		users: async () => await Users.get()
	},
	Mutation: {
		createUser: (p, args) => Users.create(args),
		updateUser: (p, { _id, ...args}) => Users.update(_id)(args),
		removeUser: (p, { _id }) => Users.remove(_id),
	}
};

const graphql = new ApolloServer({ typeDefs, resolvers });

module.exports = graphql;