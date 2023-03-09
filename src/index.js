import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/fonts/Secular One/stylesheet.css';
import './style.scss';

import './components/WindowNav/style.scss'

import './components/Channel/style.scss'
import './components/SideBar/style.scss'

import './pages/Main/style.scss'
import './pages/Main/MainNav/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
