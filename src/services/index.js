import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to handle errors globally
// httpClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       // If there's a response from the server but it has an error status
//       console.error("Server Error:", error.response.status);
//       console.error("Response Data:", error.response.data);
//     } else if (error.request) {
//       // If the request was sent but no response was received
//       console.error("No Response Received:", error.request);
//     } else {
//       // If there was an error setting up the request
//       console.error("Request Setup Error:", error.message);
//     }
//     return Promise.reject(error); // Reject the promise with the error
//   }
// );

export default httpClient;
