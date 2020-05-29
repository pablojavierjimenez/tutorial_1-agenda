import Mysql from "../db/MySqlClient.ts";

/**
 * * Get Persons
 * @description
 *
 * @param {Object} response
 */
export default async function ({ response }: { response: any }):Promise<void> {
  const result = await Mysql.execute("SELECT * FROM `persons` LIMIT 10");
  response.body = result.rows;
}
