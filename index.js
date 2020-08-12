const express = require("express");
const helmet = require("helmet");
const server = express();

const carRouter = require("./routers/carRouter.js");

server.use(helmet());
server.use(express.json());
server.use("/api/cars", carRouter);

const port = process.env.PORT || 6666;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
