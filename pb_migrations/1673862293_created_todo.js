migrate(
  (db) => {
    const collection = new Collection({
      id: "wdt7rzapmut6qac",
      created: "2023-01-16 09:44:53.038Z",
      updated: "2023-01-16 09:44:53.038Z",
      name: "todo",
      type: "base",
      system: false,
      schema: [
        {
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
        },
        {
          system: false,
          id: "hwzahtt4",
          name: "status",
          type: "bool",
          required: false,
          unique: false,
          options: {},
        },
      ],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("wdt7rzapmut6qac");

    return dao.deleteCollection(collection);
  },
);
