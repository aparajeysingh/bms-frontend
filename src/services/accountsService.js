import httpClient from "./index";

export const getAll = () => {
    return httpClient.get("/employees");
};

export const createNewAccount = (data) => {
    return httpClient.post("/accounts/", data);
};

export const getAccountById = (id) => {
    return httpClient.get(`/employees/${id}`);
};

export const updateAccount = (data) => {
    return httpClient.put("/employees", data);
};

export const deleteAccount = (id) => {
    return httpClient.delete(`/employees/${id}`);
};
