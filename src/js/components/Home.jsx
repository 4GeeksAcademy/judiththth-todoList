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
		<div className="container d-flex flex-column align-items-center justify-content-center vh-100">
			<h1 className="mb-4" style={{ fontWeight: 100 }}>To-Do List</h1>

			<div className="w-100" style={{ maxWidth: "500px" }}>
				<input className="form-control form-control-lg mb-3 shadow-sm" onChange={(event) => setTask(event.target.value)} onKeyDown={addTask} value={task} placeholder="Write your task"></input>
				
				<ul className="list-group shadow-sm">
					{list.map((item, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
							<span>{item}</span>
							<button className="btn btn-sm btn-outline-danger" onClick={() => setList(list.filter((_, i) => i !== index))}>×</button>
						</li>
					))}
				</ul>

				<div className="text-muted small mt-2">{list.length} item{list.length !== 1 ? "s" : ""} left</div>
			</div>
		</div>
	);
};

export default Home;