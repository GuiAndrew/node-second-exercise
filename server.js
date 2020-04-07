const chalk = require("chalk");

const arrOfColleagues = ["André", "Silvia", "Gonçalo", "João"];
arrOfColleagues.forEach((arrOfColleague) =>
  console.log(chalk.blue(arrOfColleague))
);
