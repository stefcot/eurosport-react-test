import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from '@/components/App/app'
import store from './store'
import { Provider } from 'react-redux'
import DefaultErrorBoundary from '@/components/DefaultErrorBoundary'

// React aXe will check accessibility inconsistencies
// and report them in the console, alsosuggests solutions to fix problems
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <DefaultErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </DefaultErrorBoundary>,
  document.getElementById('app')
)

if (hot) {
  hot(module)('./App', () => {
    const NextApp = require('@/components/App/app').default
    ReactDOM.render(
      <DefaultErrorBoundary>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </DefaultErrorBoundary>,
      document.getElementById('root')
    )
  })
}
