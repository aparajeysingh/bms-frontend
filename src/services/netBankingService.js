import httpClient from "./index";

export const createNewNetBankingUser = (data) => {
  return httpClient
    .post("/user", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const generateOtpForNewNetBankingUser = (data) => {
  return httpClient
    .post("/user/otp-gen/create", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
