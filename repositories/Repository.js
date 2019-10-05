import axios from "axios"

// You can use your own logic to set your local or production domain
// The base URL is empty this time due we are using the jsonplaceholder API
const { dev } = process.env
const baseURL = dev ? process.env.baseAPI.dev : process.env.baseAPI.prod

export default axios.create({
  baseURL
})
