import React, { useState } from "react";
import './App.css';
import LoginForm from './LoginForm';
import LoginAttemptList from './LoginAttemptList';

const App = () => {
  let [loginAttempts, setLoginAttempts] = useState([]);
  
  const handleLogin = (obj)=>{

    setLoginAttempts([
        ...loginAttempts, 
        {name : obj.login, password : obj.password}
    ])
    console.log(loginAttempts)
  }

  return (
    <div className="App">
      <LoginForm onSubmit={(OBJ) => handleLogin(OBJ)} />
      <LoginAttemptList key ={loginAttempts} attempts={loginAttempts} />
    </div>
  );
};

export default App;
