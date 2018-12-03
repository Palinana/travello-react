import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBG1pINR78fK5TbCb4UFG20F0As0JCQcoA",
    authDomain: "travello-86527.firebaseapp.com",
    databaseURL: "https://travello-86527.firebaseio.com",
    projectId: "travello-86527",
    storageBucket: "travello-86527.appspot.com",
    messagingSenderId: "6689699577"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

//Init firebase instance
firebase.initializeApp(firebaseConfig);

//Init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) 
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

const initialState = {};
//Create store
const store = createStoreWithFirebase(
    rootReducer,
    initialState, 
    compose(
        reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
