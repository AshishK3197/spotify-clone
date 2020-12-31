import { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";

function App() {
	useEffect(() => {
		const hash = getTokenFromUrl();
		console.log(hash);
	}, []);

	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;
