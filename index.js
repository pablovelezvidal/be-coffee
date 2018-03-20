const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors");

const app = express();

const datastore = new nedb({
    filename: "mycoffeeapp.db",
    autoload: true
});

const restApi = rest();
restApi.addDatastore('coffees', datastore);

app.use(cors());
app.use('/', restApi);

app.listen(3000);
console.log('Listening to port:  ' + 3000);

// app.listen(3000, '192.168.0.25', function() {
//     console.log('Listening to port:  ' + 3000);
// });