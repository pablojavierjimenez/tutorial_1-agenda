DENO
====



## Librerias y paquetes (el ""npm"")
### **[Link to deno packages on Deno.lan/x](https://deno.land/x)**

-----------------
## MySQL DB connection

[deno_mysql on deno.land](https://deno.land/x/mysql/README.md)

**ejemṕlo:**
```ts
import { Client } from "https://deno.land/x/mysql/mod.ts";
const mydb = {
    hostname: "127.0.0.1",
    username: "root",
    db: "agendaDB",
    password: "",
  };

const Mysql = await new Client().connect(mydb);
console.log("DB connection Success!!")
export default Mysql;
```
----
## Create server
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
    $ deno run --allow-net --importmap=import_map.json --unstable hello_server.ts
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
  username: "root",
  db: "agendaDB",
  password: "",
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
[tutorial de deno con ""KOA"" ya este es muy pro](https://dev.to/kryz/write-a-small-api-using-deno-1cl0)

Install _**Denon**_ to automatic reload [link to denon documentation](https://github.com/denosaurs/denon#denon)
```bash
:~$ deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
# Then run the application with denon
:~$ denon run --allow-net --allow-read --allow-write app.ts  
```
---------------




















































- **Implementation:**


- [Lint to Deno Api video tutorial](https://www.youtube.com/watch?v=smD6J1E_Hgo)
- [Link to expressive project](https://github.com/NMathar/deno-express)


-------

-------
### Cosas interesante luego vere donde las meto
//console.table(Deno.metrics())
//console.log(Deno)
// const listener = Deno.listen({ port: 5080 });
// console.log("listening on 0.0.0.0:5080");
## Configure External Imports
- **Import file:**
    ```json
    // import_map.json

    {
        "imports": {
            "http/": 
        }
    }
    ```







-----------------

### VsCode extension
- [Hyper JavaScript Snippets]()
- [Deno (justjavac.vscode-deno)](https://marketplace.visualstudio.com/items?itemName=justjavac.vscode-deno)
- [Deno Standard Library Snippets](https://marketplace.visualstudio.com/items?itemName=laurencebahiirwa.deno-std-lib-snippets)
