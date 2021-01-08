//empty data layer (initial)
export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: null,
};

const reducer = (state, action) => {
	console.log(action);
	// when we push any user into the data layer for storing into context, it dispatches and action and we switch over that action
	switch (action.key) {
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

		default:
			return state;
	}
};

export default reducer;
