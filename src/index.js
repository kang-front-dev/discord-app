import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './assets/fonts/Secular One/stylesheet.css';
import './style.scss';

import './components/WindowNav/style.scss';

import './components/ServerCard/style.scss';
import './components/SideBar/style.scss';

import './pages/Main/style.scss';
import './pages/Main/MainNav/style.scss';
import './pages/Main/MainContent/style.scss';
import './components/DMList/styles.scss';
import './components/FriendsList/style.scss';
import './components/FriendCard/style.scss';
import './components/Activity/style.scss';
import './components/Profile/style.scss';
import './components/DMChat/style.scss';
import './components/FriendProfile/style.scss';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
