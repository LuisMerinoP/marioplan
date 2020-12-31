import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
// firebase packages
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // for firestore
import { fbConfig, reduxFirebase as rfConfig} from './config/fbConfig';

// Initialize Firebase
firebase.initializeApp(fbConfig);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // reactReduxFirebase(fbConfig), // redux binding for firebase
    reduxFirestore(firebase, fbConfig) // redux bindings for firestore
  )
);

const rrfProps = {
  firebase,
  config: rfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>, 
    document.getElementById('root'));
  }
);

