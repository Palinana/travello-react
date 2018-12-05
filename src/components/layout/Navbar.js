import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            currentUser: ''
        }
    }
    
    render() {
        let { users } = this.props;
        console.log('Users: ', users)
        
        if(users) {

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
                            <use xlinkHref="/img/sprite.svg#icon-chat"></use>
                        </svg>
                        <span className="user-nav__notification">10</span>
                    </div>

                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="/img/sprite.svg#icon-shopping-cart"></use>
                        </svg>
                        <span className="user-nav__notification">2</span>
                    </div>

                    <div className="user-nav__user">
                        <Link to={`/users/${users[1].id}`} className="user-nav__profile-link">
                            <img src={users[1].photo} alt="User photo" className="user-nav__user-photo"/>
                            <span className="user-nav__user-name">{users[1].firstName}</span>
                        </Link>
                    </div>
                </nav>
            </header>
        );
    }
    else {
        return null
    }
    }
}

Navbar.propTypes = {
    firebase: PropTypes.object.isRequired,
    users: PropTypes.array
};

export default compose(
    firestoreConnect([{ collection: 'users' }]),
    connect((state, props) => ({
        users: state.firestore.ordered.users 
    }))
)(Navbar);

// export default Navbar;