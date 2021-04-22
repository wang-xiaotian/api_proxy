const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const { getJobs } = require("./Services");
const cors = require("cors");

server.use("/https://jobs.github.com", cors());
let PORT = 3000;
if (process.env.PORT !== undefined) {
  PORT = process.env.PORT;
}
server.listen(PORT);

server.get("/", (req, res) => {
  console.log("home route");
  res.send("this is home route");
});

const jobs = [
  { title: "sde", salary: 1000 },
  { title: "data scientist", salary: 2000 },
];
server.get("/jobs", (req, res) => {
  console.log(jobs);
  res.json(jobs);
});

server.get("/https://jobs.github.com/positions.json", (req, res) => {
  console.log(req.query);
  getJobs(req.query.description).then((x) => {
    res.json(x.data);
  });
});

console.log("listening 3000");
