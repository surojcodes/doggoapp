import React from 'react';

const About = () => {
	return (
		<div className='' style={{ margin: '2em auto 8em auto' }}>
			<div className='container text-center'>
				<h1 className='display-5'>About DoggoApp</h1>
				<hr style={{ width: '20%' }} />
				<div
					className='p-5 border my-4 shadow'
					style={{ width: '80%', margin: 'auto' }}
				>
					<p className='lead'>
						{' '}
						DoggoApp is written in React using
						<span className='text-danger'> hooks</span> and
						<span className='text-danger'> Redux</span> for state management.{' '}
					</p>
					<div>
						<h3 className=' mt-4'>
							{' '}
							<strong> Author </strong>
						</h3>
						surojcodes@gmail.com <br />
						Github :{' '}
						<a
							href='https://github.com/surojcodes'
							rel='noopener noreferrer'
							target='_blank'
						>
							{' '}
							https://github.com/surojcodes
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
