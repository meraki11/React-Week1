import React from 'react'
import Header from './components/Header'
import Navigationbar from './components/Navbar';
import LogIn from './components/LoginForm';

function App() {
  return (
    <div className="container">
      <Header />
      <Navigationbar />
      <LogIn />
    </div>
  
  );
}

export default App;
