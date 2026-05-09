const { app, BrowserWindow, Notification } = require("electron");

let win;

function createWindow() {

    win = new BrowserWindow({

        width: 1000,
        height: 700,

        webPreferences: {

            nodeIntegration: true,
            contextIsolation: false

        }

    });

    win.loadFile("index.html");

}

app.whenReady().then(() => {

    createWindow();

    // Controllo notifiche ogni minuto

    setInterval(() => {

        if (!win) return;

        win.webContents.executeJavaScript(

            `localStorage.getItem("orarioAllenamento");`

        ).then(orario => {

            if (!orario) return;

            const now = new Date();

            const ore =
                String(now.getHours()).padStart(2, "0");

            const minuti =
                String(now.getMinutes()).padStart(2, "0");

            const oraAttuale =
                ore + ":" + minuti;

            if (oraAttuale === orario) {

                mostraNotifica();

            }

        });

    }, 60000);

});

function mostraNotifica() {

    const notifica = new Notification({

        title: "Promemoria",

        body: "È ora di allenarsi!"

    });

    notifica.show();

}

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {

        app.quit();

    }

});