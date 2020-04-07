const chalk = require("chalk");

const arrOfColleagues = ["André", "Silvia", "Gonçalo", "João"];
// arrOfColleagues.forEach((arrOfColleague) =>
//   console.log(chalk.blue(arrOfColleague))
// );

arrOfColleagues
  .map((arrOfColleague) => ({ sort: Math.random(), value: arrOfColleague }))
  .sort((x, y) => x.sort - y.sort)
  .map((x) => console.log(chalk.blue(x.value)));
