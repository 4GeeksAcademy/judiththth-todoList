import React, { useState } from "react";



//create your first component
const Home = () => {

	const [task, setTask] = useState("");

	const [list, setList] = useState([]);

	function addTask(event) {

		if (event.keyCode === 13) {
			// cuando se hace enter, se añade la tarea a una lista
			let updatedList = list.concat(task)
			setList(updatedList)
			setTask("")
		}
	}

	return (
		<div className="text-center">
			<h1>To-Do List</h1>
			<input className="task" onChange={(event) => setTask(event.target.value)} onKeyDown={addTask} value={task} placeholder="Write your task"></input>
			<div>
				<ul>{list.map((item, index) => (
					<li key={index}>{item}<button className="btn" onClick={() => setList(list.filter((_, i) => i !== index))}>X</button></li>
				))}
				</ul>
			</div>
		</div>
	);
};

export default Home;