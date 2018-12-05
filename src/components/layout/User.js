import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class User extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        let { user } = this.props;
        console.log('User ',user)
        if(user){
            
            return (
                <div className="user-profile-view">
                    <div className="user-profile-box">
                        <div className="user-profile">
                            <div className="user-profile__photo-box">
                                <img src={user.photo} alt="hotel" className="user-profile__photo"/>
                            </div>
                            <div className="user-profile__info">
                                <h3>{user.firstName} {user.lastName}</h3>
                                <h3><span>From</span> {user.city}, {user.country}</h3>
                                <h3><span>Age</span> {user.age} </h3>
                                <div className="user-profile__stat">Data</div>
                            </div>
                        </div>
                        
                    </div>    
                </div>   
            )
        }
        else {
            return <Spinner/>
        }
    }
}

User.propTypes = {
    firebase: PropTypes.object.isRequired,
};

export default compose(
    firestoreConnect(props => [   
        { collection: 'users', storeAs: 'user', doc: props.match.params.id }  
    ]), 
    connect(({ firestore: { ordered } }, props) => ({
        user: ordered.user && ordered.user[0]
    }))
)(User);
