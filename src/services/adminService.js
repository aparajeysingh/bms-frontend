import httpClient from ".";

export const getAccountsToApprove = async () => {
  return httpClient
    .get("/accounts", {
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

export const approveAccount = async (id) => {
  return httpClient
    .put(`/accounts/${id}`, {
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

export const disapproveAccount = async (id) => {
  return httpClient
    .delete(`/accounts/${id}`, {
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
