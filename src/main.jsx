import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(<MuiThemeProvider><HelloWorld /></MuiThemeProvider>, document.getElementById('mount'));