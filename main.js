const { app, BrowserWindow, ipcMain, dialog } = require('electron')

ipcMain.on("msg", (event, data)=>{
    console.warn(data);
})

// modify your existing createWindow() function
const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
        contextIsolation: false,
        nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.webContents.openDevTools();
  
}

ipcMain.on('open-file-dialog', (event, data) => {
    dialog.showOpenDialog({
      properties: ['openFile']
    }, function (files) {
      if (files) event.sender.send('selected-file', files)
    })
  });

app.whenReady().then(loadMainWindow)
