const conf = require ('../../../server.config');
// const logger = require ('menora.libs.logger');
const MongoClient = require ('mongodb').MongoClient;

module.exports = {
  getValues,
  updateValues,
};

async function getValues (req) {
  let values = [];
  try {
    console.log ('In getValues call: ', req);
    const mongoConnection = await MongoClient.connect (
      conf.MONGODB_CONNECTION_STRING,
      {useNewUrlParser: true}
    );
    const db = await mongoConnection.db (conf.MONGODB_NAME);
    const collection = await db.collection (conf.MONGODB_COLLECTION);
    values = await collection
      .aggregate ([
        {$unwind: '$keys'},
        {$sort: {'keys.name': 1}},
        {$project: {name: '$keys.name', type: '$keys.type', _id: 0}},
      ])
      .toArray ();
  } catch (e) {
    console.log (e);
    console.log (e, req);
    throw e;
  }
  return values;
}

async function updateValues (req) {
  let json = {};
  try {
    console.log ('In updateValues call: ', req);
    const mongoConnection = await MongoClient.connect (
      conf.MONGODB_CONNECTION_STRING,
      {useNewUrlParser: true}
    );
    const db = await mongoConnection.db (conf.MONGODB_NAME);
    const collection = await db.collection (conf.MONGODB_COLLECTION);
    if (req.body.action === 'addMeClick') {
      json = await collection.update (
        {id: 'dictionary'},
        {$addToSet: {keys: req.body.addObj}}
      );
    }
    if (req.body.action === 'deleteMeClick') {
      json = await collection.update (
        {id: 'dictionary'},
        {$pull: {keys: {name: req.body.delObj.name}}}
      );
    }
    if (req.body.action === 'updateMeClick') {
      json = await collection.updateOne (
        {
          id: 'dictionary',
          keys: {
            $elemMatch: {
              name: req.body.prevObj.name,
              type: req.body.prevObj.type,
            },
          },
        },
        {
          $set: {
            'keys.$': {
              name: req.body.updateObj.name,
              type: req.body.updateObj.type,
            },
          },
        }
      );
    }
  } catch (e) {
    console.log (e);
    console.log (e, req);
    throw e;
  }
  return json;
}
