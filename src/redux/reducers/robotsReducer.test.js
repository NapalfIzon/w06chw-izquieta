import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer,", () => {
  describe("When it receives an empty list of robots and a load action with a list of 3 robots,", () => {
    test("Then it should return a new list of robotos with the received robots in the load action.", () => {
      const initialRobots = [];
      const robots = [
        {
          name: "Mazinger Z",
          image:
            "https://static.wikia.nocookie.net/mazingerz/images/e/e9/GreatMazingerTVMecha.png/revision/latest/scale-to-width-down/700?cb=20190418215214&path-prefix=es",
          speed: "20",
          stamina: "75",
          creation_date: "01-jan-2000",
          token: "czj8p47m27",
        },
        {
          name: "Great Mazinger",
          image:
            "https://static.wikia.nocookie.net/mazingerz/images/e/e9/GreatMazingerTVMecha.png/revision/latest/scale-to-width-down/700?cb=20190418215214&path-prefix=es",
          speed: "25",
          stamina: "80",
          creation_date: "02-feb-2001",
          token: "lu4opp6plv",
        },
        {
          name: "Mazinkaiser",
          image:
            "https://static.wikia.nocookie.net/mazingerz/images/2/2d/MazinkaiserSRW.png/revision/latest/top-crop/width/360/height/450?cb=20190430115506&path-prefix=es",
          speed: "30",
          stamina: "85",
          creation_date: "03-mar-2002",
          token: "tjzbs3sxlt",
        },
      ];
      const loadRobotsAction = {
        type: actionTypes.loadRobots,
        robots: robots,
      };

      const result = robotsReducer(initialRobots, loadRobotsAction);

      expect(result).toEqual(robots);
    });
  });

  describe("When it receives an empty list of robots and a non-controlled action,", () => {
    test("Then it should return the same empty list of robots.", () => {
      const initialRobots = [];
      const robots = [
        {
          name: "Mazinger Z",
          image:
            "https://static.wikia.nocookie.net/mazingerz/images/e/e9/GreatMazingerTVMecha.png/revision/latest/scale-to-width-down/700?cb=20190418215214&path-prefix=es",
          speed: "20",
          stamina: "75",
          creation_date: "01-jan-2000",
          token: "czj8p47m27",
        },
        {
          name: "Great Mazinger",
          image:
            "https://static.wikia.nocookie.net/mazingerz/images/e/e9/GreatMazingerTVMecha.png/revision/latest/scale-to-width-down/700?cb=20190418215214&path-prefix=es",
          speed: "25",
          stamina: "80",
          creation_date: "02-feb-2001",
          token: "lu4opp6plv",
        },
        {
          name: "Mazinkaiser",
          image:
            "https://static.wikia.nocookie.net/mazingerz/images/2/2d/MazinkaiserSRW.png/revision/latest/top-crop/width/360/height/450?cb=20190430115506&path-prefix=es",
          speed: "30",
          stamina: "85",
          creation_date: "03-mar-2002",
          token: "tjzbs3sxlt",
        },
      ];
      const randomRobotsAction = {
        type: "whatever",
        robots: robots,
      };

      const result = robotsReducer(initialRobots, randomRobotsAction);

      expect(result).toEqual(initialRobots);
    });
  });
});
