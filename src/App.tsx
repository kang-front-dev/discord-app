import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Main/Layout';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route index path='/' element={<Main/>}></Route>
          <Route index path='/server/:id' element={<></>}></Route>
        </Route>
      </Routes>
        
    </div>
  );
}

export default App;
