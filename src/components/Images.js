import React from 'react';
import { connect } from 'react-redux';

const Images = ({ images, show }) => {
	return (
		<div className='container'>
			<div className='row'>
				{images &&
					show === true &&
					images.map((image) => (
						<div key={image.id} className='col-md-3 mb-3'>
							<img src={image.url} width='100%' />
						</div>
					))}
			</div>
		</div>
	);
};
const mapStateToProps = ({ image: { images }, dog: { show } }) => {
	return { images, show };
};
export default connect(mapStateToProps)(Images);
