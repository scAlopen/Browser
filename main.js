// main.js
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            webviewTag: true, // Enable webview tag
            hardwareAcceleration: true, // Important for gaming
        },
        titleBarStyle: 'hidden',  // Minimalistic UI for gaming
        frame: false,             // Remove the default frame for better immersion
    });

    // Load the HTML file
    win.loadFile('index.html');
    // win.webContents.openDevTools(); // Uncomment for debugging
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});
