import React from 'react'
import './Business.css'

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

class Business extends React.Component {
    render() {
      let catCapitalized = business.category.toUpperCase();
        return (
        <div className="Business">
          <div className="image-container">
            <img
            src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg"
            alt=''
            />
          </div>
          <h2>{this.props.business.name}</h2>
          <div className="Business-information">
            <div className="Business-address">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>{this.props.business.state} {this.props.business.zipCode}</p>
            </div>
            <div className="Business-reviews">
              <h3>{this.props.business.category}</h3>
              <h3>{this.props.business.rating} stars</h3>
              <p>{this.props.business.reviewCount} reviews</p>
            </div>
          </div>
        </div> 
        )
    }
}

export default Business;