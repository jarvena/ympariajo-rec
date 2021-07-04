const { MongoClient } = require('mongodb')
const config = require('./utils/config')

const updateLocation = async(uid, locationUpdate) => {
    const client = new MongoClient(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    await client.connect()
    const routeCollection = client.db("routedata").collection("routes")

    const query = { uid }
    const updateDocument = {
        $push: { "route": locationUpdate }
    }

    const result = await routeCollection.updateMany(query, updateDocument)
    console.log(`Updated location to ${result.result.nModified} route`)
    await client.close()
}

module.exports = {
    updateLocation
}