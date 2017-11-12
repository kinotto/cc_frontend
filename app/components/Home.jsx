import React, {Component} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import OrderBy from './OrderBy';
import IdeaList from './ideas/IdeaList';
import Footer from './Footer';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
        <OrderBy />
        <IdeaList />
        <Footer/>
      </div>
    );
  }
}
