import Mysql from "../db/MySqlClient.ts";
import { IPerson } from "../models/person.ts";
import personExist from "../helpers/personExist.ts";

/**
 * * Update
 *
 * @param {IPerson} newPersonData
 * @param {number} personId
 * @returns {Promise<any>}
 */
async function _updatePersonData(newPersonData:IPerson, personId:number):Promise<any> {
  try {
    const result = await Mysql.execute("UPDATE `persons` SET name=?, direction=?, housePhone=?, mobilePhone=?, email=?, avatar=? WHERE id=?", [
      newPersonData.name,
      newPersonData.direction,
      newPersonData.housePhone,
      newPersonData.mobilePhone,
      newPersonData.email,
      newPersonData.avatar,
      personId
    ]);
    return {
      status: 200,
      data: {
        id: personId,
        ...result
      }
    }
  } catch (error) {
    console.log(error)
    return {
      status:500,
      data:{ "errorMessage": "database execution error" }
    }
  }
}

/**
 * * Update Person Data
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Object} params
 * @returns {Promise<void>}
 */
async function updatePerson( {request, response, params } : {request:any; response:any; params:any  } ):Promise<void> {
  let status = 200;
  const body = await request.body();

  if (await personExist(params.id)) {
    const result = await _updatePersonData(body.value, params.id);
    status = result.status;
    response.body = result.data;
  } else {
    status = 400;
    response.body = { "errorMessage": "request error, wrong person id" };
  }

  response.status = status;
}

export default updatePerson
