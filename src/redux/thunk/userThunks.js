import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";

const loginUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    process.env.REACT_APP_API_ENDPOINT + "/users",
    user
  );

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));

    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_KEY, token);
  }
};

export default loginUserThunk;
