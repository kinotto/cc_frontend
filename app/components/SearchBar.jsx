import React from 'react';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <hr/>
      <div className="searchBarFlex">
        <div className="searchBarFlex__investment">Investment opportunities</div>
        <div className="searchBarFlex__input">
          <input placeholder="Search" />
          <i className="fa fa-search fa-sm" aria-hidden="true" />
        </div>
        <div className="searchBarFlex__input">
          <span>Filter (0)</span>
          <i className="fa fa-plus fa-sm" aria-hidden="true" />
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default SearchBar;
