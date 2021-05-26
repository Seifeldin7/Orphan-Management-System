import axios from "axios";
import { isLoggedIn } from "./../utils/auth";
import { baseUrl } from "../config/environment";
const config = {
  headers: {
    authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYyMjA0NDQ2NSwiZXhwIjoxNjIyMDQ4MDY1LCJuYmYiOjE2MjIwNDQ0NjUsImp0aSI6Imw2aldyZ2ZmOHZPT3NRRkMiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.kROm9QrfqChxKjFZ3CJv3xu8ziAH8zTj3N1znGJ9m5M`,
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
  return axios.delete(fullUrl, config);
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
  return axios.put(fullUrl, body, config);
};
/**
 * Axios POST request
 * @function
 * @param {string} endpoint the required endpoint to implement an action
 * @param {object} body the request body
 * @returns {object}
 */
const postRequest = (endpoint, body = {}) => {
  let fullUrl = "http://localhost:8000" + endpoint;
  return axios.post(fullUrl, body, config);
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
  return axios.patch(fullUrl, body, config);
};

export { getRequest, deleteRequest, putRequest, postRequest, patchRequest };
