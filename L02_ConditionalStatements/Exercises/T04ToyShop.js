function calcPrice(input) {
  const puzzle = 2.6;
  const talkingDoll = 3;
  const tedyBear = 4.1;
  const minion = 8.2;
  const truck = 2;

  let excursionPrice = Number(input[0]);
  const countPuzzles = Number(input[1]);
  const countDolls = Number(input[2]);
  const countBears = Number(input[3]);
  const countMinions = Number(input[4]);
  const coutntTrucks = Number(input[5]);

  const toysCount =
    countPuzzles + countDolls + countBears + countMinions + coutntTrucks;

  let sum =
    countPuzzles * puzzle +
    countDolls * talkingDoll +
    countBears * tedyBear +
    countMinions * minion +
    coutntTrucks * truck;

  let discount = 0;
  if (toysCount >= 50) {
    discount = sum * 0.25;
  }

  sum -= discount;

  const tax = sum * 0.1;

  sum -= tax;

  if (sum >= excursionPrice) {
    sum -= excursionPrice;

    console.log(`Yes! ${sum.toFixed(2)} lv left.`);
  } else {
    excursionPrice -= sum;

    console.log(`Not enough money! ${excursionPrice.toFixed(2)} lv needed.`);
  }
}