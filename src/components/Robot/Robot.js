import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadRobotsThunk } from "../../redux/thunk/robotsThunks";

const Robot = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <>
      {robots.map((robot) => (
        <li key={robot.token}>
          <p>This will be a robot item</p>
        </li>
      ))}
    </>
  );
};

export default Robot;
