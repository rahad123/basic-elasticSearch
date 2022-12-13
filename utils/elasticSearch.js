const { Client } = require('@elastic/elasticsearch');
const { property } = require('lodash');

const client = new Client({
    node: nodeURL,
    auth: {
        username: username,
        password: password,
    }
})

const createIndex = async (name, properties) => {
    return client.indices.create({
        index: name,
        mappings: {
            properties,
        }
    })
}
