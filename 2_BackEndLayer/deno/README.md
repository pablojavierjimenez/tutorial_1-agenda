DENO
====


- **[Link to deno Documentation Manual](https://deno.land/manual)**
- **[Link to deno packages on Deno.lan/x](https://deno.land/x)**
-----------------

### VsCode extension
- [Hyper JavaScript Snippets]()
- [Deno (justjavac.vscode-deno)](https://marketplace.visualstudio.com/items?itemName=justjavac.vscode-deno)
- [Deno Standard Library Snippets](https://marketplace.visualstudio.com/items?itemName=laurencebahiirwa.deno-std-lib-snippets)
-----------------
## MySQL DB connection

[Link to deno_mysql Documentation on deno.land](https://deno.land/x/mysql/README.md)

**ejemṕlo:** of a `db.ts` file
```ts
import { Client } from "https://deno.land/x/mysql/mod.ts";
const mydb = {
    hostname: "127.0.0.1",
    username: "youUserHere",
    db: "agendaDB",
    password: "youPasswordHere",
  };

const Mysql = await new Client().connect(mydb);
console.log("DB connection Success!!")
export default Mysql;
```
----
## Create a simple server only with Deno
[Link al video tutorial](https://youtu.be/wd8zf3D0jic)

- **Example simple server file:**    
  ```ts
  import { serve } from "https://deno.land/std/http/server.ts";

  const body = new TextEncoder().encode("Hello World\n");
    for await (const req of serve(":8000")) {
    req.respond({ body });
  }
  ```
- **How Run it:**    
    ```bash
    $ deno run --allow-net server.ts
    ```
---------------


## Create a simple example with deno-express and deno_mysql

[Deno-express (github repo)](https://github.com/NMathar/deno-express#deno-express)
[deno_mysql on deno.land](https://deno.land/x/mysql/README.md)

```ts
import * as denoExpress from 'https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts'
import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "youUserHere",
  db: "agendaDB",
  password: "youPasswordHere",
});

const port = 3000
const app = new denoExpress.App()

app.use(denoExpress.static_('./public'))
app.use(denoExpress.bodyParser.json())

app.get('/agenda', async (req, res) => {
  const result = await client.execute("SELECT * FROM `persons` LIMIT 10")
  await res.json(result.rows)
})

const server = await app.listen(port)
console.log(`app listening on port ${server.port}`)
```
---------------


## Create an API with Deno and OAK
[Link to Deno Oak Documentation On Deno.land](https://deno.land/x/oak)

[Deno tutorial with "KOA"](https://dev.to/kryz/write-a-small-api-using-deno-1cl0) **Note:** this tutorial is a guide, but here I didn't do exactly the same

Install _**Denon**_ to automatic reload [link to denon documentation](https://github.com/denosaurs/denon#denon)
```bash
:~$ deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
# Then run the application with denon
:~$ denon run --allow-net --allow-read --allow-write app.ts  
```

```ts
import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "youUserHere",
  db: "agendaDB",
  password: "youPasswordHere",
});

const port = 3000
const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get('/agenda', (context) => {
    const result = await client.execute("SELECT * FROM `persons` LIMIT 10")
    context.response.body =  await result.rows;
  });

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  });
});

await app.listen({ port: port });
console.log(`app listening on port http://localhost:${port}`)
```
---------------

### Other iteressiting things to keep in mind
```js
console.table(Deno.metrics())
console.log(Deno)
const listener = Deno.listen({ port: 5080 });
console.log("listening on 0.0.0.0:5080");
```
### Configure External Imports
- **Import file:** [link to docu](https://deno.land/manual/linking_to_external_code/import_maps)
```json
  // import_map.json

  {
  "imports": {
    "http/": "https://deno.land/std/http/"
  }
}
```








