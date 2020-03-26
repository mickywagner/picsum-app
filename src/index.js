import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"

import './index.css'
import 'remixicon/fonts/remixicon.css'

import {AppContextProvider} from "./Context"
import App from './App';


ReactDOM.render(
    <AppContextProvider>
    <Router>
        <App />
    </Router>
    </AppContextProvider>, 
    document.getElementById('root')
);

