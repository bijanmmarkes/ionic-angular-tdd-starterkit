var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');
var events = require('events');
var App = express();
var Config = require("../src/providers/config/config.json");
App.use(logger('dev'));
App.use(methodOverride());
App.use(cors());
App.listen(process.env.PORT || 8081);
/*
  Primarily used to check if a user is currently connected to the internet or not.
  Returns 200 if they can resolve the following dns
  @TODO Make this better by having to resolve a dns
  @TODO Have it gather the information via device information
 */
App.get("/heartbeat", function(req, res)
{
  require('dns').resolve(Config.cdn, function(err) {
    if (err) {
      // @DEBUG Check the error of heartbeat request
      if (Config.Debug) console.log(err);
      res.send("Failed");
    } else {
      res.sendStatus(200);
    }
  });
});
