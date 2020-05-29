
export default async function isDbConnectionSuccess(connection:any) {
  try {
    const result = await connection.query("SELECT COUNT(*) count FROM `persons`");
    return (result[0].count >= 1);
  } catch (error) {
    console.log("IsDbConnected ERROR: ", error)
    return 0;
  }
}
