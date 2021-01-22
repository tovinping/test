import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
function Dialog() {
  console.log('dddd')
  return <div>
    <h1>title</h1>
    <div>content</div>
    <div>footer</div>
  </div>
}
export function Model() {
  return ReactDOM.createPortal(<Dialog />, document.body)
}