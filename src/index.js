import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './style/index.css'
import App from './App'

const render = (AppContainer) => {
  ReactDOM.render(<AppContainer/>, document.getElementById('root'))
}

render(App)
window.__REACT__ = React // eslint-disable-line no-underscore-dangle

// 模块热替换的 API
if (module.hot) {
  module.hot.accept(() => {
    render(App)
  })
}
