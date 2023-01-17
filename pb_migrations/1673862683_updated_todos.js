migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("wdt7rzapmut6qac");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "ozxiqaiu",
        name: "task",
        type: "text",
        required: true,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      }),
    );

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("wdt7rzapmut6qac");

    // update
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "ozxiqaiu",
        name: "title",
        type: "text",
        required: true,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      }),
    );

    return dao.saveCollection(collection);
  },
);
