import React from 'react';
import MainNav from './MainNav';

import MainContent from './MainContent';
import { useFriends } from '../../hooks/useFriends';

export default function Main() {
  
  return (
    <div className="main">
      <MainNav  />
      <MainContent />
    </div>
  );
}
