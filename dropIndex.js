const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

async function run() {
  await client.indices.delete({ index: "new" });
}

run().catch(console.log);
