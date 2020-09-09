import React from 'react';
import { connect } from 'react-redux';
import { getRandomDog, setLoading } from '../actions/dogActions';
import { emptyImages } from '../actions/imageActions';
import PropTypes from 'prop-types';

const Random = ({ getRandomDog, setLoading, emptyImages }) => {
	return (
		<div className='text-center mt-4'>
			<button
				className='btn btn-primary'
				onClick={() => {
					emptyImages();
					setLoading();
					getRandomDog();
				}}
			>
				Surprise Me !
			</button>
		</div>
	);
};

Random.propTypes = {
	getRandomDog: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
};

export default connect(null, { getRandomDog, setLoading, emptyImages })(Random);
