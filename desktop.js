const menubar = require('menubar');
const path = require('path');
const { Menu, app } = require('electron');

// enable ES6 (transpiling behind the scene)
require('babel-register');

// start server
require('./src/server.js');

app.on('ready', () => {
  // Create the Application's main menu
  var template = [{
    label: "Application",
    submenu: [
      { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});

menubar({
  preloadWindow: true,
  showDockIcon: false,
  icon: path.join(__dirname, '/public/icons/UberLogoTemplate.png'),
  transparent: true,
  movable: false,
  resizable: false,
  useContentSize: true,
  height: 509,
  width: 340,
  index: `file://${__dirname}/app.html`,
  y: 30,
});
