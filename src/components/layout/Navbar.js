import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firebaseConnect } from 'react-redux-firebase';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false
        }
    }

    
    render() {

        return (
            <header className="header">
                <img src="/img/logo.png" alt="travello logo" className="logo"/>

                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels"/>
                    <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref="/img/sprite.svg#icon-magnifying-glass"></use>
                        </svg>
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="/img/sprite.svg#icon-bookmark"></use>
                        </svg>
                        <span className="user-nav__notification">7</span>
                    </div>

                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="/img/sprite.svg#icon-chat"></use>
                        </svg>
                        <span className="user-nav__notification">10</span>
                    </div>

                    <div className="user-nav__user">
                        <img src="/img/user.jpg" alt="User photo" className="user-nav__user-photo"/>
                        <span className="user-nav__user-name">John</span>
                    </div>
                </nav>
            </header>
        );
    }
}

// Navbar.PropTypes = {
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
// )(Navbar);

export default Navbar;