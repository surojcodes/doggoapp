import {
	SET_LOADING,
	LOAD_DOG,
	TOGGLE_RANDOM_DOG,
	DOG_ERROR,
	RESET_DOG_ERROR,
} from './types';
import axios from 'axios';
const config = {
	headers: {
		'x-api-key': process.env.DOG_API_KEY,
	},
};
export const getRandomDog = () => async (dispatch) => {
	let dogInfo = null;
	do {
		const res = await axios.get(
			'https://api.thedogapi.com/v1/images/search',
			config
		);
		dogInfo = res.data[0];
	} while (!dogInfo.breeds[0]);
	dispatch({
		type: LOAD_DOG,
		payload: dogInfo.breeds[0],
		image: dogInfo,
	});
};

export const getDogByBreed = (breed_id) => async (dispatch) => {
	const res = await axios.get(
		`https://api.thedogapi.com/v1/images/search?breed_id=${breed_id}`,
		config
	);
	const dogInfo = res.data[0];
	console.log(dogInfo);
	if (!dogInfo) {
		dispatch({
			type: DOG_ERROR,
		});
	} else {
		dispatch({
			type: LOAD_DOG,
			payload: dogInfo.breeds[0],
			image: dogInfo,
		});
	}
};
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

export const toggleRandomDog = () => {
	return {
		type: TOGGLE_RANDOM_DOG,
	};
};

export const resetDogError = () => {
	return {
		type: RESET_DOG_ERROR,
	};
};
