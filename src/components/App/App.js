import React from 'react'
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

let business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Arnos Pizzeria',
  address: '3933 Bardstown Rd',
  city: 'Louisville',
  state: 'KY',
  zipCode: '40218',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 95
}

let businesses = [business, business, business, business, business, business];

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;