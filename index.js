const { Server } = require('./src/server')

const PORT = process.env.PORT || 8080

Server().listen(PORT, () => console.log(`🚀 listening on port ${PORT}`))
