import { SET_LOADING, LOAD_BREED_IMAGES, EMPTY_IMAGES } from './types';
import axios from 'axios';

export const getBreedImages = (breed_id) => async (dispatch) => {
	setLoading();
	const config = {
		headers: {
			'x-api-key': process.env.DOG_API_KEY,
		},
	};
	const res = await axios.get(
		`https://api.thedogapi.com/v1/images/search?breed_id=${breed_id}&limit=12&page=1`,
		config
	);
	console.log(res.data);
	dispatch({
		type: LOAD_BREED_IMAGES,
		payload: res.data,
	});
};
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

export const emptyImages = () => {
	return {
		type: EMPTY_IMAGES,
	};
};
