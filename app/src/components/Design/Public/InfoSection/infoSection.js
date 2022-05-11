import React from 'react';
import Button from '../../Button/Button';
import './infoSection.css';

function infoSection({
  heading, p1, p2, buttonLabel1, buttonLabel2, image
}) {
  return (
    <section className="section">
      <div className="infoSection">
        <div className="columnLeft">
          <h1>{heading}</h1>
          <p>{p1}</p>
          <p>{p2}</p>
          <div className="buttons">
            <Button onClick="/buy" color="primary">{buttonLabel1}</Button>
            <Button onClick="/rent" color="primary">{buttonLabel2}</Button>
          </div>

        </div>
        <div className="columnRight">
          <img alt="Home" src={image}></img>
        </div>
      </div>
    </section>
  );
}

export default infoSection;
