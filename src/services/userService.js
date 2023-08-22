import httpClient from ".";

export const getUserInfo = async () => {
    return httpClient.get("/user", {
        headers: {
            Authorization: await localStorage.getItem("authToken") // Sending token in "Authorization" header
        }
    }).then((res) => {
        return res;
    }).catch((err) => {
        return err.response;
    })
}