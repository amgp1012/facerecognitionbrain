import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt b32 shadow-2' scale='1.2'>
	      		<div className='pa3'>
	        		<img alt='logo' src={brain}/>
	      		</div>
	    	</Tilt>
		</div>
	);
};

export default Logo;