import httpClient from ".";

export const addPayee = async (data) => {
  return httpClient
    .post("/payee", data, {
      headers: {
        Authorization: await localStorage.getItem("authToken"), // Sending token in "Authorization" header
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

// http://localhost:8081/api/payee/accNumber
export const getPayees = async () => {
  return httpClient
    .get("/payee/accNumber", {
      headers: {
        Authorization: await localStorage.getItem("authToken"), // Sending token in "Authorization" header
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
