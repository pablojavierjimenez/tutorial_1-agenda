import Mysql from "../db/MySqlClient.ts";

export default async function (id:number):Promise<boolean> {
    const result = await Mysql.query("SELECT COUNT(*) count FROM `persons` WHERE id = ?", [id]);
    return (result[0].count >= 1) ;
}
