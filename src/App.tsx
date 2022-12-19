import React, { useContext } from 'react';
import './App.css';
import MainPage from './components/pages/MainPage';
import MensProducts from './components/Products/Categories/Mens';
import Navigation from './Navigation';
import AppRoutes from './AppRoutes';
import { PathContext } from './components/Context/PathContext';

function App() {
  const paths = useContext(PathContext);
  return (
    <PathContext.Provider value={paths}>
        <div className="App">
          <MainPage/>
        </div>
    </PathContext.Provider>
    
  );
}

export default App;
