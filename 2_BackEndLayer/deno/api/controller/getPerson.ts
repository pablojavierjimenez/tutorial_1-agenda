import Mysql from "../db/MySqlClient.ts";

/**
 * * Get Single Person Data
 * @description
 *
 * @export function {function}
 * @param response {Object}
 * @param params {Object}
 * @returns Promese {Void}
 */
async function getPerson({ params, response }: { params: any; response: any }): Promise<void> {
  let status = 200;
  try {
    const result = await Mysql.execute("SELECT * FROM `persons` WHERE id=?", [params.id]);
    if (result.rows?.length) {
      response.body = result.rows;
      response.status = status;
    } else {
      response.body = { "error": "Person not found!" };
      status = 400;
    }
  } catch (error) {
    console.log(error)
    response.body = { "error": "500 INTERNAL SERVER ERROR" };
    status = 500;
  }
}

export default getPerson
