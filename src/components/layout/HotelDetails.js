import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firebaseConnect } from 'react-redux-firebase';

class HotelDetails extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

   
    render() {

        return (
            <main class="hotel-view">
                <div class="gallery">
                    <figure class="gallery__item">
                        <img src="img/hotel-1.jpeg" alt="Photo of hotel 1" class="gallery__photo"/>
                    </figure>

                    <figure class="gallery__item">
                        <img src="img/hotel-2.jpeg" alt="Photo of hotel 2" class="gallery__photo"/>
                    </figure>

                    <figure class="gallery__item">
                        <img src="img/hotel-3.jpeg" alt="Photo of hotel 3" class="gallery__photo"/>
                    </figure>
                </div>

                <div class="overview">
                        <h1 class="overview__heading">Hotel Las Palmas</h1>

                        <div class="overview__stars">
                            <svg class="overview__icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="overview__icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="overview__icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="overview__icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="overview__icon-star">
                                <use xlinkHref="img/sprite.svg#icon-star"></use>
                            </svg>
                        </div>

                        <div class="overview__location">
                            <svg class="overview__icon-location">
                                <use xlinkHref="img/sprite.svg#icon-location-pin"></use>
                            </svg>
                            <button class="btn-inline">Itacaré, Brazil</button>
                        </div>

                        <div class="overview__rating">
                            <div class="overview__rating-average">8.6</div>
                            <div class="overview__rating-count">429 votes</div>
                        </div>
                </div>

                <div class="detail">
                    <div class="description">
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. 
                            Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                        </p>

                        <p class="paragraph">
                            Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, 
                            inventore iure aliquid aliquam.
                        </p>

                        <ul class="list">
                            <li class="list__item">Close to the beach</li>
                            <li class="list__item">Breakfast included</li>
                            <li class="list__item">Free airport shuttle</li>
                            <li class="list__item">Free wifi in all rooms</li>
                            <li class="list__item">Air conditioning and heating</li>
                            <li class="list__item">Pets allowed</li>
                            <li class="list__item">We speak all languages</li>
                            <li class="list__item">Perfect for families</li>
                        </ul>

                        <div class="recommend">
                            <p class="recommend__count">
                                Lucy and 3 other friends recommend this hotel.
                            </p>

                            <div class="recommend__friends">
                                <img src="img/user-1.jpeg" alt="Friend 1" class="recommend__photo"/>
                                <img src="img/user-2.jpeg" alt="Friend 2" class="recommend__photo"/>
                                <img src="img/user-3.jpeg" alt="Friend 3" class="recommend__photo"/>
                                <img src="img/user-4.jpeg" alt="Friend 4" class="recommend__photo"/>
                            </div>
                        </div>
                    </div>

                    <div class="user-reviews">
                        <figure class="review">
                            <blockquote class="review__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi,
                                totam, itaque officia ex.
                            </blockquote>

                            <figcaption class="review__user">
                                <img src="img/user-5.jpg" alt="User 1" class="review__photo"/>
                                <div class="review__user-box">
                                    <p class="review__user-name">Nick Smith</p>
                                    <p class="review__user-date">Feb 23, 2018</p>
                                </div>
                                <div class="review__rating">7.8</div>
                            </figcaption>
                        </figure>

                        <figure class="review">
                            <blockquote class="review__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                            </blockquote>

                            <figcaption class="review__user">
                                <img src="img/user-6.jpg" alt="User 2" class="review__photo"/>
                                <div class="review__user-box">
                                    <p class="review__user-name">Mary Thomas</p>
                                    <p class="review__user-date">Sept 13, 2017</p>
                                </div>
                                <div class="review__rating">9.3</div>
                            </figcaption>
                        </figure>

                        <button class="btn-inline">Show all <span>&rarr;</span></button>
                    </div>

                    
                </div>

                <div class="cta">
                    <h2 class="cta__book-now">
                        Good news! We have 4 free rooms for your selected dates!
                    </h2>
                    <button class="btn">
                        <span class="btn__visible">Book now</span>
                        <span class="btn__invisible">Only 4 rooms left</span>
                    </button>
                </div>

            </main>
        );
    }
}

// Content.PropTypes = {
//     firebase: PropTypes.object.isRequired,
//     auth: PropTypes.object.isRequired,
//     settings: PropTypes.object.isRequired
// };

// export default compose(
//     firebaseConnect(),
//     connect((state, props) => ({
//         auth: state.firebase.auth,
//         settings: state.settings
//      }))
// )(Content);

export default HotelDetails;