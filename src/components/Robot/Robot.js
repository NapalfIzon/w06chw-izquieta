import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadRobotsThunk } from "../../redux/thunk/robotsThunks";
import "./Robot.scss";

const Robot = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <>
      {robots.map(({ creation_date, id, image, name, speed, stamina }) => (
        <li key={id} className="robot">
          <img className="robot__image" src={image} alt={name} />
          <div className="robot__content">
            <div className="robot__info">
              <h3 className="robot__name">Name: {name}</h3>
              <p className="robot__data">
                <span className="robot__data__title">Speed: </span>
                {speed}
              </p>
              <p className="robot__data">
                <span className="robot__data__title">Stamina: </span>
                {stamina}
              </p>
            </div>
            <button className="robot__button">MODIFY</button>
            <button className="robot__button">DELETE</button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Robot;
