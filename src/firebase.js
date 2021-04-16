import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useDispatch } from 'react-redux';
import { userAdded } from './redux/userSlice';

firebase.initializeApp({
    apiKey: "AIzaSyBWcVNZBzon8EMjGaqL5901pryQFN89EjY",
    authDomain: "todo-list-d962b.firebaseapp.com",
    projectId: "todo-lit-d962b",
    storageBucket: "todo-list-d962b.appspot.com",
    messagingSenderId: "336431139489",
    appId: "1:336431139489:web:9fee2bc6a51efa8d5cbee0"
  
  });

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export const signOut = () => {
    auth.signOut();
};