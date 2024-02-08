import React from 'react';
import { Outlet } from "react-router-dom";
import './App.css'

import HeaderTitle from './components/Header/HeaderTitle/HeaderTitle';

function App () {

  return (
    <div>
      <HeaderTitle/>
    </div>
  );
}

export default App;
