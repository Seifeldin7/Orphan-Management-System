import axios from "axios";

function getUserId() {
  return axios.get("http://localhost:8000/me").then(response => {
    return response.data.id;
  });
}

export default getUserId;
