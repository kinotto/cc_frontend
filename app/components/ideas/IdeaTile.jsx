import React from 'react';
import PropTypes from 'prop-types';

const IdeaTile = ({idea}) => {
  let percentageFunded = (idea.raised / idea.target * 100).toFixed(0);
  return (
    <div className="card card--big" onClick={() => window.open(idea.page, '_self')}>
      {
        percentageFunded >= 100
          ? <span className="card__overfunded">overfunded</span>
          : ''
      }
      <img
        className="card__star"
        src="../../../images/star.png"
        onClick={() => window.open('https://www.crowdcube.com/login?redirect_to=aHR0cHM6Ly93d3cuY3Jvd2RjdWJlLmNvbS9pbnZlc3RtZW50cw%3D%3D', '_self')}
      />
      <div className="card__image" style={{'backgroundImage': `url( "${idea.image}" )`}} />
      <h2 className="card__title">{idea.title}</h2>
      <h3 className="card__daysLeft">{idea.daysLeft} days left</h3>
      <img className="card__logo" src={idea.logo} />
      <span className="card__subtitle">{idea.daysLeft}</span>
      <p className="card__text">{idea.description}</p>

      <div className="card__footer">
        <p className="card__footer--target">£ {idea.target.toLocaleString()} Target </p>
        <div className={percentageFunded >= 100
          ? 'card__footer--progress card__footer--progress__funded'
          : 'card__footer--progress'}
        style={{'width': percentageFunded + '%'}}>
          {percentageFunded}%
        </div>
        <div className="card__footer--results">
          <div className="card__footer--results__raised">
            <p>£ {idea.raised.toLocaleString()}</p>
            <span>Raised</span>
          </div>
          <div className="card__footer--results__equity">
            <p>{idea.equity}</p>
            <span>Equity</span>
          </div>
          <div className="card__footer--results__investors">
            <p>{idea.investors.toLocaleString()}</p>
            <span>Investors</span>
          </div>
        </div>
      </div>
    </div>
  );
};

IdeaTile.propTypes = {
  'idea': PropTypes.object
};
export default IdeaTile;
