export const GetSpeed = (speedLevel: number) => {
  switch (speedLevel) {
    case 1:
      var speed = 225;
      break;
    case 2:
      var speed = 175;
      break;
    case 3:
      var speed = 125;
      break;
    case 4:
      var speed = 75;
      break;
    case 5:
      var speed = 25;
      break;
    default:
      var speed = 200;
      break;
  }
  return speed;
};
