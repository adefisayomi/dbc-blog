// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "twitter-df36a.firebaseapp.com",
    projectId: "twitter-df36a",
    storageBucket: "twitter-df36a.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: "G-6TNE86ESWD"
  };
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const ClientAuth = firebase.auth()

module.exports = firebase
  