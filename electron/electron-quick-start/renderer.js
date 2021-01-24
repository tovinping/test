// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
console.log(window)
window.electron.getAppPath().then(res => {
  console.log('getAppPath', res)
})
function beep() {
  console.log('bbbbbbb')
  // window.electron.beep();
  // window.electron.openFolder('C:\\Users\\tovinping\\Downloads\\co-master.zip')
  // window.electron.openFile('C:\\Users\\tovinping\\Downloads\\co-master.zip')
  window.electron.openUrl('https://baidu.com')
}
const btn = document.getElementById('btn')
btn.onclick = beep