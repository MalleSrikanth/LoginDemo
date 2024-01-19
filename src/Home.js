import { useState } from "react";
import LoginAttemptList from "./LoginAttemptList";
import LoginForm from "./LoginForm";

const Home = (props) => {
    let [loginAttempts, setLoginAttempts] = useState([]);
  
  const handleLogin = (obj)=>{
    //let userObj = {name : obj.login, password : obj.password}
    //loginAttempts.push(userObj) 
    setLoginAttempts([
        ...loginAttempts, 
        {name : obj.login, password : obj.password}
    ])
    console.log(loginAttempts)
  }

    return (
        <>
        <LoginForm onSubmit={(OBJ) => handleLogin(OBJ)} />
        
        <LoginAttemptList key ={loginAttempts} attempts={loginAttempts} /> 
      
        </>
    )
}

export default Home;