import jwtDecode from "jwt-decode";
import { getRequest } from "./requester";
import { baseUrl } from "./../config/environment";

function getToken() {
  return localStorage.getItem("token");
}

const config = {
  headers: { authorization: `Bearer ${getToken()}` }
};

function Auth() {
  try {
    if (!getToken()) return null;
    let decoded = jwtDecode(getToken());
    console.log(decoded.id);
    return decoded.id;
  } catch {
    return null;
  }
}
function isLoggedIn() {
  return getToken() ? true : false;
}

function getRole() {
  return getRequest(`${baseUrl}/me`)
    .then(response => {
      return response.data.role;
    })
    .catch(error => {
      console.log(error);
    });
}
const _config = config;
export { _config as config };
export const token = getToken();
const _Auth = Auth;
export { _Auth as Auth };
const _isLoggedIn = isLoggedIn;
export { _isLoggedIn as isLoggedIn };
const _getRole = getRole;
export { _getRole as getRole };
