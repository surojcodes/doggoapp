import React from 'react';

const Pagination = ({ breedsPerPage, totalBreeds, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalBreeds / breedsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<>
			{pageNumbers.map((number) => (
				<button
					onClick={() => paginate(number)}
					key={number}
					className='btn btn-primary btn-sm mr-2 rounded'
				>
					{number}
				</button>
			))}
		</>
	);
};

export default Pagination;
