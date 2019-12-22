import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
function App() {
  return (
    <React.Fragment className="App">
    <NavBar/>  
    <main className ="container" >
      <Counters />
    </main>
    </React.Fragment>
  );
}

export default App;
