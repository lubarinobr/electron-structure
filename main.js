const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow = null;

function initialize() {
  function createWindow() {
    const windowOptions = {
      frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    };

    mainWindow = new BrowserWindow(windowOptions);
    mainWindow.loadURL(path.join("file://", __dirname, "/index.html"));
    mainWindow.maximize();
    mainWindow.setFullScreen(true);

    mainWindow.on("closed", () => {
      mainWindow = null;
    });
  }

  app.on("ready", () => {
    createWindow();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}

initialize();