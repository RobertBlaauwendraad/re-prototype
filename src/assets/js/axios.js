import axios from "axios";

const headers = {
  'Content-Type': 'application/json'
};

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL + '/api/v1',
  timeout: 1000,
  headers
});