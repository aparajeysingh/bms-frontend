import axios from "axios";

const apiUrl = "http://localhost:8081/login";

const headers = {
  "Content-Type": "application/json",
};

const userLogin = (data) => {
  return axios
    .post(apiUrl, data, { headers })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export default userLogin;
