import React from 'react';
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components';

import App from "./components/App/App"
import GlobalStyle from './styles/global'
import Theme from './styles/mainTheme'

ReactDOM.render(
    <>
    <GlobalStyle/>
    <ThemeProvider theme={Theme}>
        <App/>
    </ThemeProvider>
    </>,document.getElementById("root"))
