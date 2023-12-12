import getAllProtectedData from "../api/ProtectedData";
export async function getProtectedData(strToken) {
  return getAllProtectedData(strToken);
}


