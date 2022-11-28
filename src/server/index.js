const express = require("express");
const userBaseRoutes = require("./routes/routes");
const connecToDB = require("./db/connect");
require("dotenv").config();

const port = 5000;

const app = express();

app.use(express.json());

app.use("/api/v1/users", userBaseRoutes);

const startServer = async () => {
  try {
    await connecToDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`listening to the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
