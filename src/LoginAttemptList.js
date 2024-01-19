import React, { useEffect, useState } from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => {

	const [listData, setList] = useState(props.attempts)
	const [filterDataList, setFilterList] = useState(props.attempts)

	const filterList = (e)=>{
		let value = e.target.value
		let listDataNew = listData.filter((x) => x.name.toLowerCase().includes(value.toLowerCase()) );
		setFilterList(listDataNew)
	}

	return (
	<div className="Attempt-List-Main">
	 	<p>Recent activity</p>
	  	<input type="input" placeholder="Filter..." onChange={(e)=>filterList(e)} />
		<ul className="Attempt-List">
			{
				filterDataList && filterDataList.length > 0 && 
				filterDataList.map((x)=> {
					return (
					<LoginAttempt key = {x.name}>
						{/* <h1>TODO</h1> */}
						{x.name } 
					</LoginAttempt>
					)
				}
				)
			}
		</ul>
	</div>
	);
		}

export default LoginAttemptList;