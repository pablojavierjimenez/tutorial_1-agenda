// import {Client} from "./deps.ts";
import { Client, Connection } from "https://deno.land/x/mysql/mod.ts";
import { red, green } from "https://deno.land/std/fmt/colors.ts";
import isDbConnectionSuccess from "../helpers/testDbConnection.ts";
const mydbConfig = {
  hostname: "127.0.0.1",
  username: "root",
  db: "agendaDB",
  password: "",
};
const Mysql = await new Client().connect(mydbConfig);
(await isDbConnectionSuccess(Mysql)) ? console.log(green("DB connection Success!!")) : console.log(red("DB connection ERROR!!"));
export default Mysql;
