require('dotevn')

const PORT = process.env.port
const MONGODB_URI = process.env.MONGODB_URI

module.exports = { PORT, MONGODB_URI }
