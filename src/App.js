import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./components/Data";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	const [data, setData] = useState(null);

	const url = "https://swapi.dev/api/people/";

	useEffect(() => {
		getAllData();
	}, [url]);

	const getAllData = () => {
		axios
			.get(url)
			.then((response) => {
				//console.log(response.data.results)
				const allData = response.data.results;
				setData(allData);
			})
			.catch((error) => console.error(`Error: $(error)`));
	};

	if(data) {
		return (
			<div className="App">
				<Data data={data} />
			</div>
		);
	}
	else{
		return (
			<div></div>
		)
	}
}

export default App;
