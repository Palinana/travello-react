import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firebaseConnect } from 'react-redux-firebase';

class Hotels extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

   
    render() {

        return (
            <nav className="hotel-view">
                Hotel view
            </nav>
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

export default Hotels;