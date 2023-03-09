import React from 'react';
import SideBar from './components/SideBar';
import WindowNav from './components/WindowNav/index';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <WindowNav />
      <div className="content__wrapper">
        <SideBar />
        <div className="content">
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;
