import React from 'react';
import PropTypes from 'prop-types';

const IdeaTile = ({idea}) => {
  return (
    <div className="card card--big" >
      <span className="card__overfunded">overfunded</span>
      <img className="card__star" src="../../../images/star.png"/>
      <div className="card__image" style={{'backgroundImage': `url( "${idea.image}" )`}} />
      <h2 className="card__title">{idea.title}</h2>
      <h3 className="card__daysLeft">{idea.daysLeft} days left</h3>
      <img className="card__logo" src={idea.logo} />
      <span className="card__subtitle">{idea.daysLeft}</span>
      <p className="card__text">{idea.description}</p>

      <div className="card__footer">
        <p className="card__footer--target">£ {idea.target} Target </p>
        <p>progress bar</p>
        <div className="card__footer--results">
          <div className="card__footer--results__raised">
            <p style={{'fontWeight': '600'}}>{idea.raised}</p>
            <p>Raised</p>
          </div>
          <div className="card__footer--results__equity">
            <p style={{'fontWeight': '600'}}>{idea.equity}</p>
            <p>Equity</p>
          </div>
          <div className="card__footer--results__investors">
            <p style={{'fontWeight': '600'}}>{idea.investors}</p>
            <p>Investors</p>
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
