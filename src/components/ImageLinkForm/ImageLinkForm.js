import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onNewInput, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'This magic brain will detect faces in your pics'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input 
						className='f4 pa2 w-70 ba b--black-20 center' type='tex' 
						onChange={onNewInput} 
					/>
					<button 
						className='w-30 grow f4 link ph3 pv2 br3 ba b--white white dib bg-light-purple'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;