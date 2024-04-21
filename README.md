# fetchapi-module

Fecth API adapter module, support CommonJS

## Usage

### Web

```html
<script src="https://unpkg.com/fetchapi-module/dist/fetchapi-module.umd.js"></script>

<script>
  fetch("https://reqres.in/api/users")
    .then((res) => res.text())
    .then((body) => console.log(body));

  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((body) => console.log(body));
</script>
```

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
