import { app, BrowserWindow } from 'electron';

const isDev = !app.isPackaged;

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
    });

    if (isDev) {
        win.loadURL('http://localhost:5173');
    } else {
        win.loadFile('dist/index.html');
    }
});
