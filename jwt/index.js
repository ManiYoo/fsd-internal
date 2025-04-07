import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
app.get("/", (req, res) => {
  res.send("Server is alive");
});
app.post("/login", (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.send({
    message: "Login successful",
    token,
  });
});
function middleware(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded) {
    req.username = decoded.username;
    next();
  } else {
    res.send("Unauthorized access");
  }
}
app.get("/info", middleware, (req, res) => {
  res.json({
    message: "protected route accessed",
    username: req.username,
  });
});
