import axios from "axios";

const instance = axios.create({
    baseURL: "https://my-burger-b5470-default-rtdb.firebaseio.com/"
});

export default instance;