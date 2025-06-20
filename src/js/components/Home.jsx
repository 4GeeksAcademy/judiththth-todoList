import React, { useState } from "react";



//create your first component
const Home = () => {

	const [task, setTask] = useState("");

	const [list, setList] = useState([]);

	function addTask(event) {

		if (event.keyCode === 13) {
			console.log("Enter funciona");
			// cuando se hace enter, se añade la tarea a una lista
			let updatedList = list.concat(task)
			setList(updatedList)
			setTask("")
		}
	}

	console.log(task);

	//listaTareas.map((item)=><li>{item}</li>)

	return (
		<div className="text-center">
			<h1>To-Do List</h1>
			<input className="task" onChange={(event) => setTask(event.target.value)} onKeyDown={addTask} value={task} placeholder="Write your task"></input>
			<ul>{list}
							
			</ul>
		</div>
	);
};

export default Home;