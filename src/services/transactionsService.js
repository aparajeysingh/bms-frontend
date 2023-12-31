import httpClient from ".";

export const createTransaction = async (data) => {
  return httpClient
    .post("/transaction", data, {
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

//localhost:8081/api/transaction/accNumber/timestamp

export const getTransactions = async (data) => {
  return httpClient
    .post("/transaction/accNumber/timestamp", data, {
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
