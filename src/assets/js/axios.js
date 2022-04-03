import axios from "axios";

const headers = {
  'Content-Type': 'application/json'
};

export default axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 1000,
  headers
});