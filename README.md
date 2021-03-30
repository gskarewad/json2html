# json2html
A small javascript library to generate html table code for json. 
``` 
const Json2Html = require('json2html');
let data = [{ ab: "ab" }]
let table = Json2Html.render(data);
console.log(table);
```
