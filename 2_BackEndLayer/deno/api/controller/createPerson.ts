import Mysql from "../db/MySqlClient.ts";
import { IPerson } from "../models/person.ts";
import isPersonDataValis from "../helpers/isPersonDataValid.ts";

/**
 * * Insert New Person
 * @description execute the new person recived data into the database
 *
 * @param {IPerson} newPerson
 * @returns {Promise<any>}
 */
async function _insertNewPerson(newPerson: IPerson):Promise<any> {
  if (await isPersonDataValis(newPerson)) {
    const result = await Mysql.execute("INSERT INTO `persons` (name, address, housePhone, mobilePhone, email, avatar) VALUES (?,?,?,?,?,?)", [
      newPerson.name,
      newPerson.address,
      newPerson.housePhone,
      newPerson.mobilePhone,
      newPerson.email,
      newPerson.avatar
    ]);
    return result;
  } else {
    return { "errorMessage": "name is require, and ou need to fill at less two fields" };
  }
}

/**
 * * Add Person
 * @description main function that handle the request and provide service the response
 *
 * @param { Object} request
 * @param { Object} response
 * @returns {Promise<void>}
 */
async function addPerson({ request, response }: { request: any; response: any }):Promise<void> {
  const body = await request.body();
  const newPerson: IPerson = body.value;
  let status = 200;
  try {
    response.body = await _insertNewPerson(newPerson);
  } catch (error) {
    console.log(error)
    status = 400;
    response.body = { "error": "Invalid request!" };
  }
  response.status = status;
}

export default addPerson;
