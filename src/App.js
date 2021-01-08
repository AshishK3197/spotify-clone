import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromUrl } from "./spotify";
const spotify = new SpotifyWebApi();

function App() {
	// const [token, setToken] = useState(null);
	//instead of using useState hook to store token we will use context to store it.
	//dispatch is a gun to shoot at data layer to change and update it with values etc.
	const [{ user, token }, dispatch] = useDataLayerValue();
	// or  const [dataLayer.user , dispatch] = userDataLayerValue(); just in above we have destructured

	console.log("🧔", user);
	console.log("token👉", token);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		// console.log(hash);
		const _token = hash.access_token;
		// console.log(_token);

		if (_token) {
			// setToken(_token);
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				// console.log(user);
				//dispatch an action to set the user when we recieve the token as object
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				});
			});
		}
	}, []);

	return (
		<div className="App">
			{token ? <Player spotify={spotify} /> : <Login />}
			{/* <Login /> */}
		</div>
	);
}

export default App;
