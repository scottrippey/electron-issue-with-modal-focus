const path = require('path');
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const main = new BrowserWindow({ });
  main.loadFile(path.resolve('test.html'));

  const modal = new BrowserWindow({
    parent: main,
    modal: true,
    width: 200,
    height: 100,
    show: false,
  });
  modal.loadFile(path.resolve('test.html'));
  modal.once('ready-to-show', () => { modal.show(); });
});
