const { Database, aql } = require("arangojs");
const db = new Database();
const faker = require('faker')

const renameKey = (
	oldProp,
	newProp,
	{ [oldProp]: old, ...others }
) => ({
	[newProp]: old,
	...others
});

const normalizeID = obj => renameKey('_id', 'id', obj)

const update = collection => id => async data => {
	const _collection = await db.collection(collection)
	const document = await _collection.update(id, data, { returnNew: true })
	return normalizeID(document.new)
}

const create = collection => async data => {
	try {
		const _collection = await db.collection(collection)
		const document = await _collection.save(data)
		return normalizeID(document)
	} catch (error) {
		throw new Error(error)
	}
}

const get = collection => async id => {
	const _collection = await db.collection(collection)
	if (!id) {
		const cursor = await _collection.all() 
		const all = await cursor.all()
		return all.map(d => normalizeID(d))
	}
	const document = await _collection.document(id)
	return normalizeID(document)
}

const remove = collection => async id => {
	try {
		const _collection = await db.collection(collection)
		const document = await _collection.remove(id)
		return true
	} catch (error) {
		return false
	}
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




const pluralize = require('pluralize')
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const makeResolvers = collection => {
	if (typeof collection !== 'string') return

	try {
		const Model = model(collection)
		const name = capitalize(collection)
		
		return {
			queries: {
				[`get${name}`]: (p, { id }) => Model.get(id),
				[`getAll${pluralize(name)}`]: () => Model.get()
			},
			mutations: {
				[`create${name}`]: (p, { id, ...args }) => Model.create({ ...args }),
				[`update${name}`]: (p, { id, ...args }) => Model.update(id)(args),
				[`remove${name}`]: (p, { id }) => Model.remove(id),
			}
		}
	} catch (error) {
		return error
	}
}