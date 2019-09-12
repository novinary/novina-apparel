import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCwk69OWCnaIfRR7rA4WJa9jlfMC_89kVE',
  authDomain: 'novina-apparel-db.firebaseapp.com',
  databaseURL: 'https://novina-apparel-db.firebaseio.com',
  projectId: 'novina-apparel-db',
  storageBucket: '',
  messagingSenderId: '88508646501',
  appId: '1:88508646501:web:1d89ffb987506e04c3f28c'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
