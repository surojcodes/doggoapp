import { combineReducers } from 'redux';
import dogReducer from './dogReducer';
import breedReducer from './breedReducer';
import imageReducer from './imageReducer';

export default combineReducers({
	dog: dogReducer,
	breed: breedReducer,
	image: imageReducer,
});
