/** IMPORTS */
// import { serve } from "https://deno.land/std@0.52.0/http/server.ts";
import {serve} from "./deps.ts";

const s = serve({ port: 5080 });

console.log("http://localhost:5080/");

for await (const req of s) {
    console.log("req method",req.method);
    console.log("req path",req.url);
    req.respond({ body: "Hello World\n" });
}