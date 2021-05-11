const { app, BrowserWindow } = require("electron");
var path = require("path");
let win;
const fs = require("fs");

let data = JSON.parse(fs.readFileSync("fitnesstracker/userData.json", "utf8"));

function createWindow() {
	win = new BrowserWindow({
		width: 1280,
		height: 800,
		resizable: false,
		fullscreenable: false,
		title: "Fitness Tracker",
		frame: false,
		titleBarStyle: "hidden",
	});

	let loggedIn = data.users.find((x) => x.loggedIn === true);
	if (!loggedIn) {
		win.loadURL(`file://${__dirname}/fitnesstracker/login_page.html`);
	} else {
		win.loadURL(`file://${__dirname}/fitnesstracker/index.html`);
	}
}

app.on("ready", createWindow);
