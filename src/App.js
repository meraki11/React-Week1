import React from 'react'
import Navigationbar from './components/Navbar';
import LogIn from './components/LoginForm';

function App() {
  return (
    <div className="container">
      <Navigationbar />
      <br/>
      <LogIn />
    </div>
  
  );
}

export default App;