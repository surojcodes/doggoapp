import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleRandomDog, resetDogError } from '../actions/dogActions';
import { searchBreeds } from '../actions/breedActions';
import { emptyImages } from '../actions/imageActions';

const Search = ({
	searchBreeds,
	toggleRandomDog,
	show,
	resetDogError,
	error,
	emptyImages,
}) => {
	const text = useRef('');

	const onChange = () => {
		if (show) {
			toggleRandomDog();
		}
		if (error) {
			resetDogError();
		}
		searchBreeds(text.current.value);
		emptyImages();
		if (text.current.value === '') {
			toggleRandomDog();
		}
	};
	const onFocus = () => {
		if (text.current.value !== '') {
			toggleRandomDog();
			searchBreeds(text.current.value);
			emptyImages();
		}
		if (error) {
			toggleRandomDog();
			resetDogError();
			searchBreeds(text.current.value);
			emptyImages();
		}
	};
	return (
		<div style={{ maxWidth: '60%', margin: 'auto' }} className='mt-4'>
			<div className='form-group'>
				<input
					className='form-control form-control-lg'
					type='text'
					ref={text}
					placeholder='Search for dog breed...'
					onChange={onChange}
					onFocus={onFocus}
				/>
			</div>
		</div>
	);
};

Search.propTypes = {
	searchBreeds: PropTypes.func.isRequired,
	toggleRandomDog: PropTypes.func.isRequired,
	resetDogError: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	error: PropTypes.string,
};
const mapStateToProps = ({ dog: { show, error } }) => {
	return { show, error };
};
export default connect(mapStateToProps, {
	searchBreeds,
	toggleRandomDog,
	resetDogError,
	emptyImages,
})(Search);
