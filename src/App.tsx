import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageContainer from './Containers/HomePageContainer';
import LoginFormComponent from './Components/LoginFormComponent';

function App() {
  return (
    <div className="App">
      <HomePageContainer />
      <LoginFormComponent />
    </div>
  );
}

export default App;
