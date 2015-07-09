var app = require('app');
var BrowserWindow = require('browser-window');

//require('crash-report').start();

var mainWindow = null;

app.on('window-all-closed', function() {
    //if (process.platform != 'darwin') {
        app.quit();
    //}
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        'auto-hide-menu-bar': true,
        'use-content-size': true,
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.openDevTools();

    mainWindow.on('close', function() {
        mainWindow = null;
    });
    mainWindow.focus();
});
