import React from 'react';
import loremIpsum from '../img/Lorem Ipsum@2x.png';

export const Header = () => (
  <header>
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span> 
          </button>
          <a class="navbar-brand" href="#"><img src={loremIpsum} /></a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li> 
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Lorem</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);