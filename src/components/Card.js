import React from 'react';

const Card = (props) => {
	const { name, email, id } = props;
	return (
		<div className='tc bg-light-green dib br3 pa2 ma2 grow shadow-5'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='robotpic' />
			<div>
				<h4> {name} </h4>
				<p> {email} </p>
			</div>
		</div>

		);
}



export default Card;