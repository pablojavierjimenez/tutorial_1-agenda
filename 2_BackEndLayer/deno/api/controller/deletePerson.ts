import Mysql from "../db/MySqlClient.ts";
import personExist from "../helpers/personExist.ts";

/**
 * * Delete Person
 * @description check if the resquested user to delete exist, and execute de delete in the database
 *
 * @param {{ params: any; response: any }} { params, response }
 * @returns {Promise<void>}
 */
async function deletePerson({ params, response }: { params: any; response: any }): Promise<void> {
  let status = 200;
  if (await personExist(params.id)) {
    const result = await Mysql.execute("DELETE from `persons` WHERE id=?", [params.id])
    response.body =result;
  } else {
    status = 400;
    response.body = { "errorMessage": "request error, wrong person id" };
  }
  response.status = status;
}

export default deletePerson;
