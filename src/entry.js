import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  if (process.env.isMiniprogram) {
    ReactDOM.render(<Counter />, container)
  } else {
    ReactDOM.render(<Counter />, container)
  }
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
