const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const BrowserWindow = electron.BrowserWindow;

let win;

function createWindow(){
    win = new BrowserWindow({
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('closed', ()=> {
        win = null;
    })
}

app.on('ready',createWindow);