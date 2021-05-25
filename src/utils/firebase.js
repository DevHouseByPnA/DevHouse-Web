import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWtLEWWIUwnDsrLg8-ZZDRcpsxyLjOkXs",
    authDomain: "devhouse-demo.firebaseapp.com",
    projectId: "devhouse-demo",
    storageBucket: "devhouse-demo.appspot.com",
    messagingSenderId: "488856086794",
    appId: "1:488856086794:web:a268a80eaa2f5730c672f3"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
export const firebaseAuth = firebase.auth();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
githubAuthProvider.addScope('repo');

export const signInWithGithub = async () => {
    try {
        await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const result = await firebaseAuth.signInWithPopup(githubAuthProvider);

        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;

        const user = result.user;

        return { user, token };
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;

        return {
            errorCode,
            errorMessage,
            email,
            credential,
        };
    }
}

export const signOut = async () => {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        console.log(error);
    }
}