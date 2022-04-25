const mongoose = require('mongoose')


function connect() {
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useUnifiedTopology', true)

    mongoose.connect('mongodb://localhost:27017/api-restful')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connect to database!')
    })

    db.on('error', console.log.bind)

}
module.exports = {
    connect
}