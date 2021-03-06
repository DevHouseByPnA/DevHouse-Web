import firebase from "firebase/app";
import "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyDWtLEWWIUwnDsrLg8-ZZDRcpsxyLjOkXs",
    authDomain: "devhouse-demo.firebaseapp.com",
    projectId: "devhouse-demo",
    storageBucket: "devhouse-demo.appspot.com",
    messagingSenderId: "488856086794",
    appId: "1:488856086794:web:a268a80eaa2f5730c672f3",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
export const firebaseAuth = firebase.auth();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
githubAuthProvider.addScope("repo");
githubAuthProvider.addScope("read:user");

export const signInWithGithub = async () => {
    try {
        await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const result = await firebaseAuth.signInWithPopup(githubAuthProvider);

        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const githubToken = credential.accessToken;
        localStorage.setItem("githubToken", githubToken);
        const user = result.user;
        const { token: authToken } = await user.getIdTokenResult();

        return { user, githubToken, authToken };
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;

        toast.error(errorMessage);

        return {
            errorCode,
            errorMessage,
            email,
            credential,
        };
    }
};

export const signOut = async () => {
    try {
        await firebase.auth().signOut();
        toast.success("Signed Out!");
    } catch (error) {
        console.log(error);
        toast.error("Could not sign out");
    }
};
