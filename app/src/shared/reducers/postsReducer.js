export default (state = [], action) => {
	switch(action.type) {
		case "GET_ALL_POSTS":
			return action.payload;
		case "GET_POST":
			return action.payload;
		default:
			return state;
	}
}