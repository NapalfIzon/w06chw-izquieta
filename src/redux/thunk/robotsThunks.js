import axios from "axios";
import { loadRobotsAction } from "../actions/actionCreators";

const endpoint = process.env.REACT_APP_API_ENDPOINT;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(endpoint);
    dispatch(loadRobotsAction(robots));
  };
};
