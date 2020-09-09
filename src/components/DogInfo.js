import React, { useEffect } from 'react';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { getRandomDog } from '../actions/dogActions';
import {
	getBreedImages,
	setLoading,
	emptyImages,
} from '../actions/imageActions';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';

const DogInfo = ({
	image,
	name,
	life_span,
	temperament,
	bred_for,
	bred_group,
	height,
	weight,
	getRandomDog,
	loading,
	show,
	error,
	breed_id,
	getBreedImages,
	setLoading,
	emptyImages,
}) => {
	useEffect(() => {
		setLoading();
		getRandomDog();
		emptyImages();
		//eslint-disable-next-line
	}, []);

	return (
		<>
			{loading === true ? (
				<Spinner />
			) : error !== null ? (
				<h2 className='text-center mt-4'>{error}</h2>
			) : show === false ? (
				<SearchResult />
			) : (
				<div className='container'>
					<div className='row justify-content-center mt-5  p-4 m-5'>
						<div className='col-lg-7  col-md-12 text-center mb-5'>
							<img src={image} alt='Doggo pic' width='80%' />
						</div>
						<div className='col-md-12 col-lg-5 '>
							<div className='list-group' style={{ fontSize: '1em' }}>
								<li className='list-group-item list-group-item-action active'>
									<strong> Breed : </strong>{' '}
									<span style={{ fontSize: '1.2em' }}>
										{' '}
										{name ? name : 'N/A'}
									</span>
								</li>

								{bred_group && (
									<li className='list-group-item list-group-item-action'>
										Breed Group : ${bred_group}
									</li>
								)}

								<li className='list-group-item list-group-item-action '>
									<strong>Bred For :</strong> {bred_for ? bred_for : 'N/A'}
								</li>
								<li className='list-group-item list-group-item-action '>
									<strong>Life Span :</strong> {life_span ? life_span : 'N/A'}
								</li>
								<li className='list-group-item list-group-item-action '>
									<strong>Temperament :</strong>{' '}
									{temperament ? temperament : 'N/A'}
								</li>
								<li className='list-group-item list-group-item-action '>
									<strong>Height :</strong> {height ? `${height} cm` : 'N/A'}
								</li>
								<li className='list-group-item list-group-item-action '>
									<strong>weight :</strong> {weight ? `${weight} kg` : 'N/A'}
								</li>
							</div>
							<button
								className='btn btn-block btn-outline-primary mt-3'
								onClick={() => {
									getBreedImages(breed_id);
								}}
							>
								More {name} Images
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
DogInfo.propTypes = {
	getRandomDog: PropTypes.func.isRequired,
};

const mapStateToProps = ({
	dog: {
		image,
		name,
		life_span,
		temperament,
		bred_for,
		bred_group,
		height,
		weight,
		loading,
		show,
		error,
		breed_id,
	},
}) => {
	return {
		image,
		name,
		life_span,
		temperament,
		bred_for,
		bred_group,
		height,
		weight,
		loading,
		show,
		error,
		breed_id,
	};
};

export default connect(mapStateToProps, {
	getRandomDog,
	getBreedImages,
	setLoading,
	emptyImages,
})(DogInfo);
