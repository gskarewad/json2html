const Json2Html = require('./index');

let data = [{ ab: "ab" }]
let table = Json2Html(data);
console.log(table);