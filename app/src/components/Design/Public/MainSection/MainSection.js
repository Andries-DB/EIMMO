import React from 'react';
import Slider from './ImageSlider/Slider';
import './MainSection.css';

function MainSection() {
  return (
    <section className="container">
      <div className="mainWrapper">
        <Slider />
      </div>
    </section>

  );
}

export default MainSection;
