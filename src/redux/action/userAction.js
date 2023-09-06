import axios from "axios";
import { loadingUser, loginUser, getError } from "../slice/userSlice";
import * as Api from "../api";


export const registerUser = (data) => async (dispatch) => {
	dispatch(loadingUser());
	try {
		const result = await axios.post(Api.registerUser, data, {
			headers: { "Content-Type": "application/json" },
		});
		console.log(result.data);
		dispatch(registerUser(result.data));
	} catch (err) {
		console.log(err.response.data.message);
		dispatch(getError(err.response.data.message));
	}
};


export const userLogin = (data) => async (dispatch) =>{
	dispatch(loadingUser());
	try {
		const result = await axios.post(Api.login, data, {
			headers: { "Content-Type": "application/json" },
		});
		console.log(result.data);
		dispatch(loginUser(result.data));
	} catch (err) {
		console.log(err.response.data.message);
		dispatch(getError(err.response.data.message));
	}
}
