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

export const generateUserDocument = async (user, additionalData) => { //TODO: fix n shit user stuff
    if(!user){
        return;
    }
  
    const userRef = db.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
  
    if(!snapshot.exists){
      const { email } = user;
      try{
        await userRef.set({
          email,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };

const getUserDocument = async uid => {
    if(!uid){
        return null;
    }

    try{
        const userDocument = await db.doc(`users/${uid}`).get();

        return{
            uid,
            ...userDocument.data()
        };
    }catch(error){
        console.error("Error fetching user", error);
    }
};

export const signOut = () => {
    auth.signOut();
    console.log('user signed out');
};