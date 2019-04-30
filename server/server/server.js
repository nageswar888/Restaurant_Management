const PORT = process.env.PORT || 3333;

import os from "os";
import express from "express";
import http from "http";
import RoutesConfig from "./config/routes.conf";
//import DBConfig from "./config/db.conf";
import Routes from "./routes/index";

const app = express();

/**
 * for payload error
 * */
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));




/*bodyParser = {
  json: {limit: '50mb', extended: true},
  urlencoded: {limit: '50mb', extended: true}
};*/


RoutesConfig.init(app);
//DBConfig.init();
Routes.init(app, express.Router());

http.createServer(app)
  //.listen(PORT, '192.168.0.136')
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
