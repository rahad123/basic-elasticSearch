const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

async function run() {
  await client.indices.refresh({ index: "new" });

  const result = await client.search({
    index: "new",
    query: {
      match: { quote: "dragon" },
    },
  });

  console.log(result.hits.hits);
  console.log(result.hits.hits.result);
}

run().catch(console.log)
