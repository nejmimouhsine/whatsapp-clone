import axios from "axios";

const instance = axios.create({
	baseURL: "https://whatsapp-server-123.herokuapp.com",
});

export default instance;
