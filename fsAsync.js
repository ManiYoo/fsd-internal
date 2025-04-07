import fs from "fs";
const file = "./file.txt";
fs.writeFile(file, "write something", (err) => {
  if (err) return err;
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) return err;
    console.log(data);
    fs.appendFile(file, "another text", (err) => {
      if (err) return err;
      fs.readFile(file, "utf-8", (err, data) => {
        if (err) return err;
        console.log(data);
        fs.unlink(file, (err) => {
          if (err) return err;
        });
      });
    });
  });
});
