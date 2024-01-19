import React, { useState } from "react";
import './LoginForm.css';

const LoginForm = (props) => {

	const baseUserObj = {name :"", password : ""}
	const [userObj, setUserObj] = useState(baseUserObj);

	const handleSubmit = (event) =>{
		event.preventDefault();
		props.onSubmit({
			login: userObj.name,
			password: userObj.password,
		});
		setUserObj(baseUserObj)
	}

	const onValueChange = (event)=>{
		event.preventDefault();
		const {id, value } = event.target
		setUserObj({
			...userObj,
			[id] : value
		})
		
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" 
				value = {userObj.name} 
				onChange={(e)=> onValueChange(e)}
			/>
			<label htmlFor="password">Password</label>
			<input type="password" id="password" 
				value = {userObj.password} 
				onChange={(e)=> onValueChange(e)}
			/>
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}

export default LoginForm;