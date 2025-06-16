import React from "react";



//create your first component
const Home = () => {

	const [key, setKey] = useState("");

	const handleKeyDown = (event) => {
		setKey(event.key);
	};

	//listaTareas.map((item)=><li>{item}</li>)

	return (
		<div className="text-center">
			<h1>To-Do List</h1>
			<input className="task" onKeyDown={(event) => setEnter(event.target.value)} placeholder="Write your task"></input>
			<ul>

			</ul>
		</div>
	);
};

export default Home;