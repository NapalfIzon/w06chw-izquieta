import { loadCurrentRobotAction, loadRobotsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a load actionCreator,", () => {
  describe("When it receives a list of robots,", () => {
    test("Then it should return a load type action.", () => {
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
      const expected = {
        type: actionTypes.loadRobots,
        robots: robots,
      };

      const result = loadRobotsAction(robots);

      expect(result).toEqual(expected);
    });
  });
});

describe("Given a loadCurrent actionCreator,", () => {
  describe("When it receives a robot,", () => {
    test("Then it should return a loadCurrent type action.", () => {
      const robot = {
        name: "Mazinger Z",
        image:
          "https://static.wikia.nocookie.net/mazingerz/images/e/e9/GreatMazingerTVMecha.png/revision/latest/scale-to-width-down/700?cb=20190418215214&path-prefix=es",
        speed: "20",
        stamina: "75",
        creation_date: "01-jan-2000",
        token: "czj8p47m27",
      };
      const expected = {
        type: actionTypes.loadCurrentRobot,
        robot,
      };

      const result = loadCurrentRobotAction(robot);

      expect(result).toEqual(expected);
    });
  });
});
