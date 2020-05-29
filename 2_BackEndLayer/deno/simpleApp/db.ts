// import {Client} from "./deps.ts";
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
// const persons = await client.query("SELECT * FROM `persons` LIMIT 10");
