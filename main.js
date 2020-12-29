const electron = require('electron');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let isDev = process.env['NODE_ENV'] === 'development';

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    // See https://github.com/electron/electron/issues/23506
    webPreferences: {
      contextIsolation: true,
    },
  });

  if(isDev) {
    // Load index.html via webpack dev server.
    require('./webpack-server.js');
    mainWindow.loadURL('http://localhost:3000/index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  }
  else {
    // Load index.html from the file system.
    mainWindow.loadFile('dist/index.html');
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  if(isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => {
      console.log(`Added Extension: ${name}`);
      createWindow();
    })
    .catch((err) => console.log('An error occurred: ', err));
  }
  else {
    createWindow();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
