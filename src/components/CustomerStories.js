import React from 'react';
import s01 from '../img/S01@2x.png';
import s02 from '../img/S02@2x.png';
import s03 from '../img/S03@2x.png';

export const CustomerStories = () => (
  <div className='customer-stories-wrapper'>
    <p className='customer-stories-title'> Customer Stories </p>
    <hr />

    <div className='customer-card-group'>
      
      <div className='customer-card'>
        <figure>
          <img src={s01} />
        </figure>
          <p className='customer-card-title'>Eiusmod Tempor</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eleifend odio.</p>
          <p>incididunt</p>
      </div>

      <div className='customer-card'>
        <figure>
          <img src={s02} />
        </figure>
          <p className='customer-card-title'>Dolore Magnam</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id bibendum mauris. Lorem ipsum dolor sit amet, consectetur.</p>
          <p>voluptatem</p>
      </div>

      <div className='customer-card'>
        <figure>
          <img src={s03} />
        </figure>
          <p className='customer-card-title'>Nulla aliquet</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <p>consectetur</p>
      </div>
    
    </div>

    <p className='see-all-link'><a href='#'>See All</a></p>
  </div>
);