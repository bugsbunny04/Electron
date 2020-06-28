const shell = require('electron').shell;

const btn = document.getElementById('openBtn');

btn.addEventListener('click', function(){
    shell.showItemInFolder("E:\\ElectronFolder\\1.txt");
    shell.openPath("E:\\ElectronFolder\\brush.jpg");
    shell.openExternal('https://electron.atom.io');
});