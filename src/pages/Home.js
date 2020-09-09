import React from 'react';

import Search from '../components/Search';
import Random from '../components/Random';
import DogInfo from '../components/DogInfo';
import Images from '../components/Images';

import { Provider } from 'react-redux';
import store from '../store';

const Home = () => {
	return (
		<Provider store={store}>
			<Search />
			<Random />
			<DogInfo />
			<Images />
		</Provider>
	);
};

export default Home;
