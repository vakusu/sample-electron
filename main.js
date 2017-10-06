electron = require("electron");
var fs = require('fs');
var express = require("express");
var exapp = express();
var link = require("./link.js");
var menujs = require("./menu.js");

// Electron
const {app, Menu, BrowserWindow} = require('electron');


exapp.get('/', function (req, res) {
  fs.readdir('public/', function (err, files) {
    if (err) {
      console.error(err);
      res.send("ERROR");
    } else {
      console.log(files);
      res.send(new link(files).getHtml());
    }
  });
});

exapp.use(express.static("public"));
exapp.use(express.static("css"));
exapp.use(express.static("js"));

exapp.listen(3000, "127.0.0.1");
electron.app.on("ready", function () {
  var main = new electron.BrowserWindow(
    {webPreferences: {
    nodeIntegration: false
    },width: 800, height: 600});
  main.on("closed", electron.app.quit);
  const menu = Menu.buildFromTemplate(new menujs().getMenu(main));
  Menu.setApplicationMenu(menu);

  main.webContents.openDevTools();
  main.loadURL("http://127.0.0.1:3000/");
});
