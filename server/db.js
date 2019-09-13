const { Database, aql } = require("arangojs");
const db = new Database();
const faker = require('faker')

const update = collection => id => async data => {
	const _collection = await db.collection(collection)
	return _collection.update(id, data)
}

const create = collection => async data => {
	const _collection = await db.collection(collection)
	return await _collection.save(data)
}

const get = collection => async id => {
	const _collection = await db.collection(collection)
	if (!id) {
		const cursor = await _collection.all() 
		return cursor.all()
	}
	return _collection.document(id)
}

const remove = collection => async id => {
	const _collection = await db.collection(collection)
	return _collection.remove(id)
}

const model = collection => ({
	update: update(collection),
	create: create(collection),
	get: get(collection),
	remove: remove(collection)
})

async function main() {

}

// main()

module.exports = {
	update,
	create,
	get,
	remove,
	model
}