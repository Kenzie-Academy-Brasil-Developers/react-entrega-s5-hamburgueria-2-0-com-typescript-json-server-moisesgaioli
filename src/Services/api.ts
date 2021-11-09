import axios from "axios";

const Api = axios.create({
    baseURL: "https://mc-kenzie.herokuapp.com"
})

export default Api;