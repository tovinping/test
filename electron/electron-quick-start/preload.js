// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer, shell } = require('electron')
contextBridge.exposeInMainWorld('electron', {
  getAppPath() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'electron',
          age: 33
        })
      }, 1000);
    })
  },
  openFolder(path) {
    shell.showItemInFolder(path)
  },
  openFile(path){
    shell.openPath(path)
  },
  openUrl(url){
    shell.openExternal(url)
  },
  beep(){
    console.log('bbbb')
    shell.beep()
  }
})
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})