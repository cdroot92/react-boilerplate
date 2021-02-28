import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "http://localhost:8000"; // process.env.REACT_APP_SERVER_HOST;

client.interceptors.response.use(
  (resp) => resp,
  (error) => {
    return Promise.reject(error);
  },
);
export default client;
