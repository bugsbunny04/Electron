console.log("from main.js")

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const { protocol } = require('electron');
const { create } = require('domain');

let win;

function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },
        height:150,
        width:500,
        frame:false,
        show: false
    });   
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
    win.once('ready-to-show', () =>{
        win.show();
    })
}

app.on('ready',createWindow);