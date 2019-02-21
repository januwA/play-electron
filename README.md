这个工具主要用来批量添加预设好的小程序模板消息。

下载后先安装依赖(不要用 cnpm):
- yarn

调试：
> npm run start

环境：
- windows


全局安装依赖 electron 和 electron-builder:
- cnpm i -g electron
- cnpm i -g electron-builder

打包：
> electron-builder --win --x64

执行上面的命令后，会打包在dist文件下面

把打包后的zip包，再次打包为.exe安装文件 [NSIS 下载](https://nsis.sourceforge.io/Download)

