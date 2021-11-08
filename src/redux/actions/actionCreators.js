import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadCurrentRobotAction = (robot) => ({
  type: actionTypes.loadCurrentRobot,
  robot,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
