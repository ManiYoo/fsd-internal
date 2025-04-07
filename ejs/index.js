import express from "express";
import path from "path";
const app = express();
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
app.get("/", (req, res) => {
  res.render("index", { message: "Hello from home page" });
});
