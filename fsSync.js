import fs from "fs";
const file = "./file.txt";
fs.writeFileSync(file, "I have written something");
let data = fs.readFileSync(file, "utf-8");
console.log(data);
fs.appendFileSync(file, "Additional data added");
data = fs.readFileSync(file, "utf-8");
console.log(data);
fs.unlinkSync(file);
