const { model } = require('../db.js')

const Users = model('users')

module.exports = {
	queries: {
		user: (p, { id }) => Users.get(id),
		users: () => Users.get()
	},
	mutations: {
		createUser: (p, { id, ...args}) => Users.create({ ...args }),
		updateUser: (p, { id, ...args }) => Users.update(id)(args),
		removeUser: (p, { id }) => Users.remove(id),
	}
}