const { Client } = require("@elastic/elasticsearch");

const client = new Client({ node: "http://localhost:9200" });

const faker = require("faker");

async function run() {
  await client.index({
    index: "new",
    document: {
      character: "Daenerys Targaryen",
      quote: "I am the blood of the dragon.",
    },
  });

  await client.indices.refresh({ index: "new" });
}

run().catch(console.log);
