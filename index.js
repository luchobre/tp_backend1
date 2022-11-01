const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const { testMiddleware } = require("./middlewares")


const app = express();

dotenv.config();

app.use(express.json());

app.use('/api', routes);

app.use(testMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.MESSAGE} ${process.env.PORT}`);
});