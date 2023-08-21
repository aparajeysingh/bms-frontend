import httpClient from ".";

export const generateOtpForResetPassword = (data) => {
  return httpClient
    .post("/user/otp-gen/update", data)
    .then((res) => {
      console.log(res.status);
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const resetPassword = (data) => {
  return httpClient
    .put("/user/forget-password", data)
    .then((res) => {
      console.log(res.status);
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
