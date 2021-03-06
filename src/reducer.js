//empty data layer (initial)
export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	top_artists: null,
	discover_weekly: null,
	// reset it to token: null when done with dev.
	token: null,
	// token:
	// 	"BQDmSlrSyiio7vkts8qubSDs86Ps9nP_1XQ8WK4cCGjgWvvEROWVwSIdF2EqB3BRMof7Id2bHBROuRzGODjHoGdiz8qgvB7O7Dj3HzPTD5n9cI4D6Xo1YQuaragt4s822-n8GvWZu3bE7F6zhphY81zHmJRG264zCoib",
};

const reducer = (state, action) => {
	console.log(action);
	// when we push any user into the data layer for storing into context, it dispatches and action and we switch over that action
	switch (action.type) {
		//reducer primary job is to listen to action, so when we recieve an action called SET_USER do the following
		//ACTION -> type(action type) , [payload](dynamic which can be changed)
		case "SET_USER":
			//here type of action is SET_USER and payload is action.user
			//when we login SET_USER(action occurs) and set user to this user: action.user and throw it into the data layer(context)
			//return the new state
			return {
				...state,
				user: action.user,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};

		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		case "SET_PLAYING":
			return {
				...state,
				playing: action.playing,
			};

		case "SET_ITEM":
			return {
				...state,
				item: action.item,
			};

		case "SET_TOP_ARTISTS":
			return {
				...state,
				top_artists: action.top_artists,
			};

		case "SET_SPOTIFY":
			return {
				...state,
				spotify: action.spotify,
			};

		default:
			return state;
	}
};

export default reducer;
