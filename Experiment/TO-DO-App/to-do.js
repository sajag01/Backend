// const fs = require("fs");
// console.log(fs);
// const data = fs.readFileSync("to-do.json", "utf-8");

const fs = require("fs");
const path = require("path");

const TODO_FILE = path.join("d:/Backend","file.txt");
const data = fs.readFileSync(TODO_FILE,"utf-8");

// console.log(data);

// function readTodos() {
// const data = fs.readFileSync("to-do.json","utf-8");
// return (data);
// };
// console.log(readTodos());

function writeTodos(todos) {
  fs.writeFileSync(TODO_FILE,JSON.stringify(todos,null,2));
}






