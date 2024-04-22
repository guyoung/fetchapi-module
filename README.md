# fetchapi-module

Fecth API adapter module, support CommonJS

## Usage


### Node.js / CommonJS

```javascript
var fetch = require("fetchapi-module");

fetch("https://reqres.in/api/users")
  .then((res) => res.text())
  .then((body) => console.log(body));

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((body) => console.log(body));
```
