const electron = require("electron");
const url = require("url");
const path = require("path");
const { Menu } = require("electron/main");
const { ipcMain } = require("electron");

const {app, BrowserWindow} = electron;

let mainWindow, otherWindow, other_2Window;

app.on("ready", () => {
    console.log(process.platform);

mainWindow = new BrowserWindow({
    width: 600,
    height: 500,
    icon: __dirname + '/assets/icons/win/icon.ico',
    title: "UYGULAMALAR",
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
});

mainWindow.loadURL(
    url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    })
);

mainWindow.setResizable(false);

//HAVA DURUMU İÇİN
ipcMain.on("anahtar-4", () => {
    other_2Window = new BrowserWindow({
        width: 450,
        height: 500,
        title: "YENİ.mc",
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    other_2Window.setResizable(false);

    other_2Window.loadURL(
        url.format({
            pathname: path.join(__dirname, "/uygulamalar/havadurumu.html"),
            protocol: "file:",
            slashes: true
        })
    );

   mainWindow.on("close", () => {
        app.quit();
   })
});

ipcMain.on("anahtar-exit-2", () => {
    other_2Window.close();
    other_2Window = null;
});


// HESAP MAKİNESİ İÇİN
ipcMain.on("anahtar-3", () => {
    otherWindow = new BrowserWindow({
        width: 300,
        height: 521,
        title: "hesap makinesi",
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    otherWindow.setResizable(false);

    otherWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "/uygulamalar/hesapmkns.html"),
            protocol: "file:",
            slashes: true
        })
    );

        otherWindow.on("close", () => {
        otherWindow = null;
        })

   mainWindow.on("close", () => {
        app.quit();
   })
});

ipcMain.on("anahtar-exit-3", () => {
    otherWindow.close();
    otherWindow = null;
});

//çıkış butunu için
ipcMain.on("anahtar-exit", () => {
    mainWindow.close();
    mainWindow = null;
});

});





// MAC işletim sistemine sahip olanlar için menü

if(process.platform == "darwin"){
    mainMenuTemplate.unshift({
        label: app.getName(),
        role: "TODO"
    });
}


