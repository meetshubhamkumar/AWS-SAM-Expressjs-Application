const express = require("express");
const awsServerlessExpress = require("aws-serverless-express");
const app = express();
const port = 3000;
const UserRouterComponent = require("./routes/UserRoute");

app.use(express.json());
app.use("/api", UserRouterComponent);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};
