
import { Application } from "https://deno.land/x/oak/mod.ts";
import { yellow } from "https://deno.land/std/fmt/colors.ts";
import router from "./routes.ts";

const app = new Application();

app.use(router.routes())
//app.use(router.allowedMethods())
app.use((ctx)=>{
    ctx.response.body = "welcome to Denorasik Park";
})
console.log(yellow(`API Services Running: http://localhost:5080/api/persons`))
await app.listen({ port:5080})
