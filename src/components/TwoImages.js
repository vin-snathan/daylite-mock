import React from 'react';
import flower from '../img/02 image@2x.png';

export const TwoImages = () => (
  <div className='two-images-wrapper'>

  	<div className='two-images-section-one'>
  		<div>
		  <p>Sint occaecat cupidatat</p>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eleifend odio. Phasellus tempor sit amet turpis ut feugiat. Vestibulum id bibendum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
		</div>
    
	    <div>
	      <img src={flower} />
	    </div>
    </div>

    <div className='two-images-section-two'>
  		<div>
	    	<p>Occaecat cupidatat non</p>
	    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eleifend odio. Phasellus tempor sit amet turpis ut feugiat. Vestibulum id bibendum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
	  	</div>
    
	    <div>
	      <img src={flower} />
	    </div>
    </div>
    
  </div>
);