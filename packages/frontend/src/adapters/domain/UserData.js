import  getAPIUserData  from "../api/UserData";
export async function getUserData(strToken) {
  return getAPIUserData(strToken);
}
