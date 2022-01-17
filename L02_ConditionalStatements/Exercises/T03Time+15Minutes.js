function calcTime(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
  let afterTime = minutes + 15;

  if (afterTime >= 60) {
    hours = hours + 1;
    afterTime = afterTime - 60;
    if (hours >= 24) {
      hours = 0;
    }
    if (afterTime <= 9) {
      console.log(`${hours}:0${afterTime}`);
    } else {
      console.log(`${hours}:${afterTime}`);
    }
  } else {
    console.log(`${hours}:${afterTime}`);
  }
}