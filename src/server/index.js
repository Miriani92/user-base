const express = require("express");
const userBaseRoutes = require("./routes/routes");
const connecToDB = require("./db/connect");
const cors = require("cors");

require("dotenv").config();

// it is not good practice to expose the uri like this,  i have dotenv installed to mask it but I'm givig like this is this accasion
const MONGO_URI =
  "mongodb+srv://miriani:12345@user-claster.f9zn93l.mongodb.net/UserBase?retryWrites=true&w=majority";

const port = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api/v1/users", userBaseRoutes);

const startServer = async () => {
  try {
    await connecToDB(MONGO_URI);
    app.listen(port, () => console.log(`listening to the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
