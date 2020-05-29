import { Router } from "http://deno.land/x/oak/mod.ts";

import getPersons from "./controller/getPersons.ts";
import getPerson from "./controller/getPerson.ts";
import createPerson from "./controller/createPerson.ts";
import deletePerson from "./controller/deletePerson.ts";
import updatePerson from "./controller/updatePerson.ts";

const router = new Router();

/**
 * * NOTE: normally a real api path should be include the API version,
 * *       this is a small app and we don't need it here but keep it in mind
 * *       when you create a real one
 * @example "/api/v1/persons"
*/
router
    .get("/api/persons", getPersons)
    .post("/api/person", createPerson)
    .get("/api/person/:id", getPerson)
    .delete("/api/person/:id", deletePerson)
    .put("/api/person/:id", updatePerson)

export default router;
