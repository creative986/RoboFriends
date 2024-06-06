import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div>
			<input 
			className='pa2 bg-light-blue ba b--navy b--dashed bw1-m' 
			type='search' 
			placeholder='type name'
			onChange={searchChange}
			/>
		</div>
	);
}


export default SearchBox; 

