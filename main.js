const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')


const path = require('path')
const url = require('url')

//保留窗口对象的全局引用，如果不这样做，窗口将会
//当JavaScript对象被垃圾收集时自动关闭。
let mainWindow

function createWindow() {
  //创建浏览器窗口。f12 查看所有的参数
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#f48', // 优雅地显示窗口
    // frame: false
  });


  /**
   * ! 优雅地显示窗口
   */
  mainWindow.once('ready-to-show', () => {
    win.show()
  })


  /**
   * * 加载本地HTML文件
   */
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    autoHideMenuBar: true,
    slashes: true
  }))


  /**
   * * 打开DevTools
   */
  mainWindow.webContents.openDevTools()

  /**
   * * 关闭窗口时发出。
   */
  mainWindow.on('closed', function () {
    //解引用窗口对象，通常你会存储窗口
    //如果您的应用程序支持多窗口，则在数组中，现在是时候了
    //当你应该删除相应的元素。
    mainWindow = null
  });

  // menu
  require('./menu.js');
}

// Electron完成后将调用此方法
// 初始化并准备创建浏览器窗口。
// 一些API只能在发生此事件后才能使用。
app.on('ready', createWindow)

//关闭所有窗口时退出。
app.on('window-all-closed', function () {
  //在OS X上，应用程序及其菜单栏很常见
  //保持活动状态，直到用户使用Cmd + Q显式退出
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  //在OS X上，通常会在应用程序中重新创建一个窗口
  //点击了dock图标，并且没有其他窗口打开。
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * * 监听index.html 发送的事件
 */
// ipcMain.on('master-close', (e, msg) => {
//   // 关闭master进程
//   app.quit();
// })

// ipcMain.on('master-minimize', (e, msg) => {
//   // 最小化  master进程
//   mainWindow.minimize();
//   // 主进程向 渲染进程发送消息
//   // e.sender.send('index-minimize', 'master')
// })

// ipcMain.on('master-maximize', (e, msg) => {
//   // 最大化  master进程
//   if (mainWindow.isMaximized()) {
//     mainWindow.unmaximize()
//   } else {
//     mainWindow.maximize();
//   }
// })