import { IPerson } from "../models/person.ts"

/**
 * * Is Person Data Valid
 * @description validate the minimun valid data to create a insert in the database
 *
 * @param {IPerson} personData
 * @returns {Promise<boolean>}
 */
async function isPersonDataValis(personData:IPerson ):Promise<boolean> {
  return (
    (
      personData.hasOwnProperty('name')
      && (personData.name != "")
    )
    && (
      (
        personData.address != undefined
        && personData.address != ""
        )
        || (
          personData.housePhone != ""
          && personData.housePhone != undefined
        )
        || (
          personData.mobilePhone != ""
          && personData.mobilePhone != undefined
        )
        || (
          personData.email != ""
          && personData.email != undefined
        )
    )
  )
}

export default isPersonDataValis
