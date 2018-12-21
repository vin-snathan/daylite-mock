import React, { Component } from 'react';

// Components
import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {TrialSection} from './components/TrialSection';
import {TwoImages} from './components/TwoImages';
import {BlurbImage} from './components/BlurbImage';
import {SmallParagraph} from './components/SmallParagraph';
import {LoneMountainImage} from './components/LoneMountainImage';
import {ButtonParagraph} from './components/ButtonParagraph';
import {CustomerStories} from './components/CustomerStories';
import {Footer} from './components/Footer';

// CSS File
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='App-container'>
          <Header />
          <Banner />
          <TrialSection />
          <TwoImages />
          <BlurbImage />
          <SmallParagraph />
          <LoneMountainImage />
          <ButtonParagraph />
          <CustomerStories />
          <Footer />
        </div>
    );
  }
}

export default App;
