const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 9000;
app.listen(PORT, () => console.log(`==^_^== ${PORT} ==^_^==`))