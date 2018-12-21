import React from 'react';
import nightMountain from '../img/03 image@2x.png';

export const BlurbImage = () => (
  <div className='blurb-image-wrapper'>
    <p id='blurb-image-title'>Excepteur sint occaecat cupidatat dem</p>

    <div className='blurb-image-wrapper-contents'>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eleifend odio. Phasellus tempor sit amet turpis ut feugiat. Vestibulum id bibendum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <p>Aenean vel eleifend odio. Phasellus tempor sit amet turpis ut feugiat.</p>
      </div>

      <div>
        <img src={nightMountain} />
      </div>
    </div>
  </div>
);