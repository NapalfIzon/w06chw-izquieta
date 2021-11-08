import axios from "axios";
import { loadRobotsAction } from "../actions/actionCreators";

const endpoint = process.env.REACT_APP_API_ENDPOINT;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(endpoint);
    const robotsData = robots.map((robot) => {
      const id = robot._id;
      delete robot._id;
      return { ...robot, id: id };
    });
    dispatch(loadRobotsAction(robotsData));
  };
};
