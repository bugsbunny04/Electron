const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const globalShortcut = electron.globalShortcut;

let win;

function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            nativeWindowOpen:true,
            nodeIntegration: true
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', function(){
    createWindow()

    const template = [
        {
            label: 'demo',
            submenu: [
                {
                    label: 'submenu1',
                    click: function(){
                        console.log('clicked submenu1')
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'submenu2'
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About electron',
                    click: function(){
                        electron.shell.openExternal('https://electron.atom.io');
                    },
                    accelerator: 'Ctrl + Shift + H'
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    const ctxMenu = new Menu()
    ctxMenu.append(new MenuItem({
        label: 'hello',
        click: function(){
            console.log('Context menu item clicked');
        }
    }))
    ctxMenu.append(new MenuItem({ role: 'selectall'}));

    win.webContents.on('context-menu', function(e,params){
        ctxMenu.popup(win,params.x,params.y)
    })

    globalShortcut.register('Alt+1',function(){
        win.show();
    })

});

app.on('will-quit', function(){
    globalShortcut.unregisterAll();
})