import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class HotelDetails extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    renderStars(amount) {
        const stars = [];
        for(let i=0;i<amount;i++){
            stars.push(
                <svg className="overview__icon-star" key={i}>
                    <use xlinkHref="/img/sprite.svg#icon-star"></use>
                </svg>
            );
        }
        return stars;
    }

   
    render() {
        const { hotel } = this.props;
        console.log(hotel);
        if(hotel) {
            return (
                <div className="hotel-view">
                    <div className="gallery">
                        {hotel.images.map((image,ind) => (
                            <figure className="gallery__item" key={ind}>
                                <img src={image} alt="Photo of hotel" className="gallery__photo" key={ind}/>
                            </figure>
                        ))}
                    </div>

                    <div className="overview">
                            <h1 className="overview__heading">{hotel.name}</h1>

                            <div className="overview__stars">
                                {this.renderStars(hotel.stars).map(star => (
                                    star
                                ))}
                            </div>

                            <div className="overview__location">
                                <svg className="overview__icon-location">
                                    <use xlinkHref="/img/sprite.svg#icon-location-pin"></use>
                                </svg>
                                <button className="btn-inline">{hotel.city}, {hotel.country}</button>
                            </div>

                            <div className="overview__rating">
                                <div className="overview__rating-average">{hotel.score}</div>
                                <div className="overview__rating-count">{hotel.votes} votes</div>
                            </div>
                    </div>

                    <div className="detail">
                        <div className="description">
                            <p className="paragraph" key={hotel.id}>
                                {hotel.description}
                            </p>

                            <ul className="list">
                                {hotel.features.map(feature => (
                                    <li className="list__item" key={hotel.id}>{feature}</li>
                                ))}
                            </ul>

                            <div className="recommend">
                                <p className="recommend__count">
                                    Lucy and 3 other friends recommend this hotel.
                                </p>

                                <div className="recommend__friends">
                                    <img src="/img/user-1.jpeg" alt="Friend 1" className="recommend__photo"/>
                                    <img src="/img/user-2.jpeg" alt="Friend 2" className="recommend__photo"/>
                                    <img src="/img/user-3.jpeg" alt="Friend 3" className="recommend__photo"/>
                                    <img src="/img/user-4.jpeg" alt="Friend 4" className="recommend__photo"/>
                                </div>
                            </div>
                        </div>

                        <div className="user-reviews">
                            <figure className="review">
                                <blockquote className="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi,
                                    totam, itaque officia ex.
                                </blockquote>

                                <figcaption className="review__user">
                                    <img src="/img/user-5.jpg" alt="User 1" className="review__photo"/>
                                    <div className="review__user-box">
                                        <p className="review__user-name">Nick Smith</p>
                                        <p className="review__user-date">Feb 23, 2018</p>
                                    </div>
                                    <div className="review__rating">7.8</div>
                                </figcaption>
                            </figure>

                            <figure className="review">
                                <blockquote className="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                                </blockquote>

                                <figcaption className="review__user">
                                    <img src="/img/user-6.jpg" alt="User 2" className="review__photo"/>
                                    <div className="review__user-box">
                                        <p className="review__user-name">Mary Thomas</p>
                                        <p className="review__user-date">Sept 13, 2017</p>
                                    </div>
                                    <div className="review__rating">9.3</div>
                                </figcaption>
                            </figure>

                            <button className="btn-inline">Show all <span>&rarr;</span></button>
                        </div>

                        
                    </div>

                    <div className="cta">
                        <h2 className="cta__book-now">
                            Good news! We have 4 free rooms for your selected dates!
                        </h2>
                        <button className="btn">
                            <span className="btn__visible">Book now</span>
                            <span className="btn__invisible">Only 4 rooms left</span>
                        </button>
                    </div>

                </div>
            );
        }
        else {
            return <Spinner/>
        }
    }
}

HotelDetails.propTypes = {
    firebase: PropTypes.object.isRequired
};

export default compose(
    firestoreConnect(props => [   //getting a single client by passing props with ID in URL
        { collection: 'hotels', storeAs: 'hotel', doc: props.match.params.id }  //storing as client as it should not be the same name on state
    ]), 
    connect(({ firestore: { ordered } }, props) => ({
        hotel: ordered.hotel && ordered.hotel[0]
    }))
)(HotelDetails);

// export default HotelDetails;