import React from 'react';
import WindowNav from '../../../components/WindowNav';
import SideBar from '../../../components/SideBar';
import Main from '../Main';
import Profile from '../../../components/Profile';

export default function Layout() {
  return (
    <div>
      <WindowNav />
      <div className="content__wrapper">
        <SideBar />
        <Profile />
        <div className="content">
          <Main />
          
        </div>
      </div>
    </div>
  );
}
