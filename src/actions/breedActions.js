import { SET_LOADING, SEARCH_BREEDS } from './types';
import axios from 'axios';

export const searchBreeds = (searchText) => async (dispatch) => {
	const config = {
		headers: {
			'x-api-key': process.env.DOG_API_KEY,
		},
	};
	const res = await axios.get(
		`https://api.thedogapi.com/v1/breeds/search?q=${searchText}`,
		config
	);
	dispatch({
		type: SEARCH_BREEDS,
		payload: res.data,
	});
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
