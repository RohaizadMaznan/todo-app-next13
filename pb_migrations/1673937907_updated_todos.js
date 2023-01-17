migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdt7rzapmut6qac")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zgyqevao",
    "name": "time",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdt7rzapmut6qac")

  // remove
  collection.schema.removeField("zgyqevao")

  return dao.saveCollection(collection)
})
