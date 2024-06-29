// import subtract from "./main";
// console.log(subtract(8,3));


// import { myName } from "./main";
// console.log(myName);


// import { poetryBooks } from "./main";
// console.log(poetryBooks);

// import { information as studentInformation } from "./main";
// console.log(studentInformation);





import inquirer from "inquirer"
import chalk from "chalk"
let answer = await inquirer.prompt({
name : "Name",
type: "list",
message: "Enter your Name",
choices: ["Akbar", "Ali", "Nazar"]


})
console.log(chalk.green.bold`Assalam o Alaikum ${answer.Name} i hope you are fine`);
