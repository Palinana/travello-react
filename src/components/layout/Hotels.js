import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Hotels extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    renderStars(amount) {
        const stars = [];
        for(let i=0;i<amount;i++){
            stars.push(
                <svg className="overview__icon-star">
                    <use xlinkHref="/img/sprite.svg#icon-star"></use>
                </svg>
            );
        }
        return stars;
    }

    sortByPrice(data) {
        const sortedData = data.sort((a,b) => {
            return b.price - a.price
        })
        return sortedData;
    }
   
    render() {
        let { hotels } = this.props;

        if(hotels){
            hotels = this.sortByPrice(hotels);
            return (
                <div className="hotels-view">
                    <div className="hotels">
                        { hotels.map(hotel => {
                            return (
                                <div key={hotel.id} className="hotels__details">
                                    <img src={hotel.images[0]} alt="hotel" className="hotels__photo"/>
                                    <div className="hotels__info">
                                        <Link to={`/hotels/${hotel.id}`} className="hotels__link"><h2 className="hotels__name">{hotel.name}</h2></Link>
                                        <span className="hotels__location">{hotel.city}, {hotel.country}</span>
                                        <div className="hotels__stars">
                                            {this.renderStars(hotel.stars).map(star => (
                                                star
                                            ))}
                                        </div>   
                                    </div>
                                    <div className="hotels__price">${hotel.price}</div>
                                </div>
                            )    
                        })}
                    </div>
                    <div className="show-all">
                        <button className="show-all-btn">Show all</button>
                    </div>
                </div>   
            )
        }
        else {
            return <Spinner/>
        }
    }
}

Hotels.propTypes = {
    firebase: PropTypes.object.isRequired,
    hotels: PropTypes.array
};

export default compose(
    firestoreConnect([{ collection: 'hotels' }]),
    connect((state, props) => ({
        hotels: state.firestore.ordered.hotels 
    }))
)(Hotels);
