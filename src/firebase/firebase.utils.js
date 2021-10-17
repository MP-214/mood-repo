import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD2i5WE0CvOzLJ7CUPxYnRiEKw55-PgROE",
	authDomain: "moodrestro.firebaseapp.com",
	projectId: "moodrestro",
	storageBucket: "moodrestro.appspot.com",
	messagingSenderId: "52146622709",
	appId: "1:52146622709:web:d17777df6b0521d461b5bc",
	measurementId: "G-L7YGR1102M",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
