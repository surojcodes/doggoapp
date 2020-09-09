import React from 'react';

const Footer = () => {
	return (
		<div>
			<hr style={{ width: '50%' }} />
			<p className='text-center'>
				Copyright &copy; 2020{' '}
				<a
					href='https://github.com/surojcodes'
					rel='noopener noreferrer'
					target='_blank'
				>
					SurojCodes
				</a>{' '}
				<br /> All Rights Reserved
			</p>
		</div>
	);
};

export default Footer;
