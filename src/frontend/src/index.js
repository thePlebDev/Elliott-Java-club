import React from 'react';
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';

import App from "./components/App/App"
import GlobalStyle from './styles/global'
import Theme from './styles/mainTheme'

ReactDOM.render(
    <Router>
    <GlobalStyle/>
    <ThemeProvider theme={Theme}>
        <App/>
    </ThemeProvider>
    </Router>,document.getElementById("root"))
