import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class Business extends React.Component {

  render() {
    return ( <
      div className = "Business" >
      <
      div className = "image-container" >
      <
      img src = 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg'
      alt = '' / >
      <
      /div> <
      h2 > {
        business.name
      } < /h2> <
      div className = "Business-information" >
      <
      div className = "Business-address" >
      <
      p > {
        business.address
      } < /p> <
      p > {
        business.city
      } < /p> <
      p > {
        business.state
      } {
        business.zipCode
      } < /p> < /
      div > <
      div className = "Business-reviews" >
      <
      h3 > {
        business.category
      } < /h3> <
      h3 className = "rating" > {
        business.rating
      }
      stars
    } < /h3> <
    p > {
      business.reviewCount
    } < /p> < /
    div > <
      /div> < /
    div >
  );
}
}

class App extends React.Component {
  render() {
    return ( <
      div className = "App" >
      <
      h1 > Ravenous < /h1> <
      SearchBar / >
      <
      BusinessList / >
      <
      /div>
    );
  }
}

const Business = [business, business, business, business, business, business];

export default App;