import axios from "axios";
import { loadRobotsAction } from "../actions/actionCreators";

const endpoint = process.env.REACT_APP_API_ENDPOINT + "/robots";

const token = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY);

export const loadRobotsThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const robotsData = robots.map((robot) => {
    const id = robot._id;
    delete robot._id;
    return { ...robot, id: id };
  });

  dispatch(loadRobotsAction(robotsData));
};
