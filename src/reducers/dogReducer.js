import {
	SET_LOADING,
	LOAD_DOG,
	TOGGLE_RANDOM_DOG,
	DOG_ERROR,
	RESET_DOG_ERROR,
} from '../actions/types';

const initialState = {
	image: null,
	name: null,
	height: null,
	weight: null,
	breed_id: null,
	life_span: null,
	temperament: null,
	breed_group: null,
	bred_for: null,
	loading: true,
	error: null,
	show: false,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DOG:
			return {
				...state,
				image: action.image.url,
				name: action.payload.name,
				life_span: action.payload.life_span,
				temperament: action.payload.temperament,
				bred_for: action.payload.bred_for,
				breed_id: action.payload.id,
				bred_group: action.payload.bred_group,
				height: action.payload.height.metric,
				weight: action.payload.weight.metric,
				loading: false,
				show: true,
				error: null,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case TOGGLE_RANDOM_DOG:
			return {
				...state,
				show: !state.show,
			};
		case DOG_ERROR:
			return {
				...state,
				error: 'Sorry, No Data Found.',
			};
		case RESET_DOG_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
