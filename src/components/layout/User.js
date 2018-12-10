import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import Spinner from '../layout/Spinner';
import UserChart from '../layout/UserChart';

class User extends Component {
    constructor() {
        super();
        this.state = {
            userData: []
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
                                <h3 className="user-profile__user-name">{user.firstName} {user.lastName}</h3>
                                <h3 className="user-profile__user-location"><span className="user-profile__user-span">From</span> {user.city}, {user.country}</h3>
                                <h3 className="user-profile__user-age"><span className="user-profile__user-span">Age</span> {user.age} </h3>
                                <div className="user-profile__data">
                                    <div className="user-profile__data-info">
                                        <div className="user-profile__data-section">Friends</div>
                                        <div className="user-profile__data-number">{user.profileData['friends']}</div>
                                    </div>
                                    <div className="user-profile__data-info">
                                        <div className="user-profile__data-section">Photos</div>
                                        <div className="user-profile__data-number">{user.profileData['photos']}</div>
                                    </div>
                                    <div className="user-profile__data-info">
                                        <div className="user-profile__data-section">Rewiews</div>
                                        <div className="user-profile__data-number">{user.profileData['reviews']}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="user-about">
                            <div className="user-about__data">Visited <span className="user-about__span">{user.travelData['countries']}</span> countires</div>
                            <div className="user-about__data">Had <span className="user-about__span">{user.travelData['flights']}</span> flights</div>
                            <div className="user-about__data">Enjoyed <span className="user-about__span">{user.travelData['tours']}</span> tours</div>
                        </div>

                        <div className="user-chart">
                            <h2 className="user-chart__summary">Your Summary</h2>
                            <UserChart data={user.travelData}/>
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
