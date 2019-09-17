const express = require('express')
const apollo = require('./schema')
const PORT = 8080

const app = express()

apollo.applyMiddleware({ app })

app.listen(PORT, () => {
	console.log(`Server @ http://localhost:${PORT}`)
	console.log(`GraphiQL @ http://localhost:${PORT}${apollo.graphqlPath}`)
})

