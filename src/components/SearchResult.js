import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import Spinner from './Spinner';
import { getDogByBreed } from '../actions/dogActions';

const SearchResult = ({ breeds, loading, getDogByBreed }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalBreeds = breeds.length;

	let breedsPerPage = null;
	if (breeds.length > 42) {
		breedsPerPage = breeds.length / 7;
	} else {
		breedsPerPage = 6;
	}

	//current posts
	const indexOfLastBreed = currentPage * breedsPerPage;
	const indexofFirstBreed = indexOfLastBreed - breedsPerPage;
	const currentBreeds = breeds.slice(indexofFirstBreed, indexOfLastBreed);

	// change page
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	// console.log(breeds);
	return (
		<>
			{loading === true ? (
				<Spinner />
			) : (
				<div className='container'>
					<div className='row justify-content-center mt-4'>
						{currentBreeds.length === 0 ? (
							<h2 className='text-center mt-4'>No Results Found.</h2>
						) : (
							currentBreeds.map((breed) => (
								<div key={breed.id} className='col-md-4 m-3 p-3'>
									<a
										href='#!'
										className='list-group-item list-group-item-action active'
									>
										<span style={{ fontSize: '1.1em' }}> {breed.name} </span>
									</a>
									<a
										href='#!'
										className='list-group-item list-group-item-action '
									>
										<strong>Life Span </strong>: {breed.life_span}
									</a>

									<a
										href='#!'
										className='list-group-item list-group-item-action '
									>
										<strong>Height :</strong> {breed.height.metric} cm
									</a>
									<a
										href='#!'
										className='list-group-item list-group-item-action '
									>
										<strong>Weight :</strong> {breed.weight.metric} kg.
									</a>
									<div className='text-center mt-3'>
										<button
											className='btn btn-outline-primary'
											onClick={() => getDogByBreed(breed.id)}
										>
											Learn More
										</button>
									</div>
								</div>
							))
						)}
					</div>
					<div className='text-center mt-4'>
						<Pagination
							breedsPerPage={breedsPerPage}
							totalBreeds={totalBreeds}
							paginate={paginate}
						/>
					</div>
				</div>
			)}
		</>
	);
};

SearchResult.propTypes = {
	breeds: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	getDogByBreed: PropTypes.func.isRequired,
};
const mapStateToProps = ({ breed: { breeds, loading } }) => {
	return { breeds, loading };
};

export default connect(mapStateToProps, { getDogByBreed })(SearchResult);
