import axios from 'axios';
import { baseUrl } from "./config";
const HTTP = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json'
	}
});
export default HTTP