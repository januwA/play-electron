const {
  Menu,
  shell
} = require('electron');

const temp = [{
  label: '文件(F)',
  submenu: [{
      label: '打开文件(O)',
      click() {
        shell.beep()
      }
    }, {
      role: 'reload'
    },
    {
      role: 'quit'
    }
  ]
}, {
  label: '帮助(H)',
  role: 'help',
  submenu: [{
    label: '联系我',
    click() {
      shell.openExternal('http://www.cnblogs.com/ajanuw/')
    }
  }]
}]



// 构建
const menu = Menu.buildFromTemplate(temp);

// 设置
Menu.setApplicationMenu(menu);