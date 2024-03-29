# Pissbet-API

## Get started

1. `git clone https://github.com/sneyed/pissbet-api.git`
1. `npm install`
1. `npm run dev`

- An express + GraphQL server will boot up
- A local SQLite3 database will spawn and populate with mock data

Visit the GraphiQL playground interface to play around with test queries.  
By default it is at [`localhost:4000`](http://localhost:4000)

## Deployment

1. `git clone https://github.com/sneyed/pissbet-api.git`
1. `npm install`
1. `npm start`

### Options

```
npm run start -- <options>

-d (devMode)        Developer mode - populates the SQLite3 db with mockdata if enabled
-p (playground)     Enable/disable the GraphiQL playground
--domain            Specify the IP address or domain for the Express server to listen at (default localhost)
--port              Specify which port the GraphQL API will run on (default 4000)
--url               Specify the URL path where the GraphQL API is accessible (default /graphQL)
--path              Specify the path to the SQLite3 DB file (default pissmas.db)

```

Example

```
npm run start -dp --domain=192.168.0.1 --port=1234 --url="/myGraphQLEndpoint" --path="/path/to/dbfile.db"
```
