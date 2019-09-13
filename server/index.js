const express = require('express')
const apollo = require('./schema')
const PORT = 8080

const app = express()

apollo.applyMiddleware({ app })

const init = () => console.log(`
	Server started at http://localhost:${PORT}${apollo.graphqlPath}
`)

app.listen(PORT, init)