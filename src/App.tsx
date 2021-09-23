import { useEffect } from 'react';
import './App.scss';
import firebaseApp from './Constants/firebase';
import HomePageContainer from './Containers/HomePageContainer';
import LoginPageContainer from './Containers/LoginPageContainer';
//import LoginFormComponent from './Components/LoginFormComponent';

function App() {

  useEffect(() => {
    let firebaseapp: any = firebaseApp;
    return () => {
      firebaseapp = null;
    }
  }, [])

  return (
    <div className="App">
      <HomePageContainer />
      <LoginPageContainer />
    </div>
  );
}

export default App;
