migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdt7rzapmut6qac")

  collection.name = "todos"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdt7rzapmut6qac")

  collection.name = "todo"

  return dao.saveCollection(collection)
})
