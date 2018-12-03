import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firebaseConnect } from 'react-redux-firebase';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

   
    render() {

        return (
            <nav className="sidebar">
                <ul className="side-nav">
                    <li className="side-nav__item side-nav__item--active">
                        <Link to="/" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref="img/sprite.svg#icon-home"></use>
                            </svg>
                            <span>Hotel</span>
                        </Link>
                    </li>

                    <li className="side-nav__item">
                        <Link to="/" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref="img/sprite.svg#icon-aircraft-take-off"></use>
                            </svg>
                            <span>Flight</span>
                        </Link>
                    </li>

                    <li className="side-nav__item">
                        <Link to="/" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref="img/sprite.svg#icon-key"></use>
                            </svg>
                            <span>Car rental</span>
                        </Link>
                    </li>

                    <li className="side-nav__item">
                        <Link to="/" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref="img/sprite.svg#icon-map"></use>
                            </svg>
                            <span>Tours</span>
                        </Link>
                    </li>
                </ul>

                <div class="legal">
                    &copy; 2018 by travello. All rights reserved.
                </div>
            </nav>
        );
    }
}

// Sidebar.PropTypes = {
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
// )(Sidebar);

export default Sidebar;