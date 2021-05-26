import axios from "axios";
import { isLoggedIn } from "./../utils/auth";
import { baseUrl } from "../config/environment";
const config = {
  headers: {
    authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYyMjAzODMxMiwiZXhwIjoxNjIyMDQxOTEyLCJuYmYiOjE2MjIwMzgzMTIsImp0aSI6ImF4M1MzMGs2dkdzRjN3TDMiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.oqkw0zZ6n1ks7cNhieSXPdDP2QyDFZS62u5VV2OD8gg`,
    "Access-Control-Allow-Origin": "*"
  }
};
const getRequest = endpoint => {
  let fullUrl = baseUrl + endpoint;
  return axios.get(fullUrl, config);
};
/**
 * Axios DELETE request
 * @function
 * @param {string} endpoint the required endpoint to implement an action
 * @returns {object}
 */
const deleteRequest = endpoint => {
  let fullUrl = baseUrl + endpoint;
  return axios.delete(endpoint, config);
};
/**
 * Axios PUT request
 * @function
 * @param {string} endpoint the required endpoint to implement an action
 * @param {object} body the request body
 * @returns {object}
 */
const putRequest = (endpoint, body = {}) => {
  let fullUrl = baseUrl + endpoint;
  return axios.put(endpoint, body, config);
};
/**
 * Axios POST request
 * @function
 * @param {string} endpoint the required endpoint to implement an action
 * @param {object} body the request body
 * @returns {object}
 */
const postRequest = (endpoint, body = {}) => {
  let fullUrl = baseUrl + endpoint;
  return axios.post(endpoint, body, config);
};
/**
 * Axios PATCH request
 * @function
 * @param {string} endpoint the required endpoint to implement an action
 * @param {object} body the request body
 * @returns {object}
 */
const patchRequest = (endpoint, body = {}) => {
  let fullUrl = baseUrl + endpoint;
  return axios.patch(endpoint, body, config);
};

export { getRequest, deleteRequest, putRequest, postRequest, patchRequest };
