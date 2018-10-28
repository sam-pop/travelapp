import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";

import { ObjectId } from "bson";

const client = Stitch.initializeDefaultAppClient("travelapp-ewvje");

const db = client
  .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
  .db("dev");

const anonymousCredential = new AnonymousCredential();

const getClient = () =>
  client.auth.loginWithCredential(anonymousCredential).then(() => db);

getClient()
  .then(db =>
    Promise.all([
      db
        .collection("trips")
        .find({ owner_id: client.auth.user.id }, { limit: 100 })
        .asArray()
    ])
  )
  .then(([nothing, docs]) => {})
  .catch(err => {
    console.error(err);
  });

export { getClient, ObjectId };
