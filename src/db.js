import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from 'mongodb-stitch-browser-sdk'

const client = Stitch.initializeDefaultAppClient('travelapp-ewvje')

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('dev')

const getClient = () => client.auth.loginWithCredential(new AnonymousCredential())
  .then(() => db)

getClient().then(db =>
  Promise.all([
    db.collection('trips').find({ owner_id: client.auth.user.id }, { limit: 100 }).asArray()
  ])
).then(([nothing, docs]) => {
  console.log('Found docs', docs)
  console.log('[MongoDB Stitch] Connected to Stitch')
}).catch(err => {
  console.error(err)
})

export default {
  getClient
}
