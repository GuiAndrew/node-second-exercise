const chalk = require("chalk");

const arrOfColleagues = ["André", "Silvia", "Gonçalo", "João"];
// arrOfColleagues.forEach((arrOfColleague) =>
//   console.log(chalk.blue(arrOfColleague))
// );

// arrOfColleagues
//   .map((arrOfColleague) => ({ sort: Math.random(), value: arrOfColleague }))
//   .sort((x, y) => x.sort - y.sort)
//   .map((x) => console.log(chalk.blue(x.value)));

const namesRandoms = arrOfColleagues
  .map((arrOfColleague) => ({ sort: Math.random(), value: arrOfColleague }))
  .sort((x, y) => x.sort - y.sort)
  .map((x) => x.value);

const chalkRandom = () => {
  const colors = ["blue", "red", "yellow", "green", "cyan"];
  const indexRandom = Math.round(Math.random() * colors.length - 1);
  return colors[indexRandom];
};

namesRandoms.forEach((namesRandom) =>
  console.log(chalk[chalkRandom()](namesRandom))
);
