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
