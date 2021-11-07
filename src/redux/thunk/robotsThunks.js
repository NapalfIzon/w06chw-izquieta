import axios from "axios";
import { loadRobotsAction } from "../actions/actionCreators";

const endpoint = "https://w06chw-api.herokuapp.com/robots/";

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(endpoint);
    dispatch(loadRobotsAction(robots));
  };
};
