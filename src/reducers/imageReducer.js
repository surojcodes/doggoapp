import { LOAD_BREED_IMAGES, SET_LOADING, EMPTY_IMAGES } from '../actions/types';

const initialState = {
	images: [],
	loading: false,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_BREED_IMAGES:
			return {
				...state,
				images: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case EMPTY_IMAGES:
			return {
				...state,
				images: [],
			};
		default:
			return state;
	}
};
