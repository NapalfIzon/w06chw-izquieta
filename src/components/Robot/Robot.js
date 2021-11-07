const Robot = () => {
  const robots = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      {robots.map((robot) => (
        <li key={robot.id}>
          <p>This will be a robot item</p>
        </li>
      ))}
    </>
  );
};

export default Robot;
