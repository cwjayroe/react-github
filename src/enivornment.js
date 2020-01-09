import { Environment, Network, RecordSource, Store } from 'relay-runtime'

function fetchQuery(
    operation,
    variables,
) {
    return fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 57a079b3fbe9c3eb2780f53140d34c5e0efe0a13'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

export default new Environment({
    network,
    store,
})