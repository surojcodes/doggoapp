import { SEARCH_BREEDS, SET_LOADING } from '../actions/types';

const initialState = {
	breeds: [],
	loading: true,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_BREEDS:
			return {
				...state,
				breeds: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
