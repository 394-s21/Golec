import firebase from "@firebase/app";
import '@firebase/auth';
import "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBwJuucZc6KDwP89-MSJtolVst4eIEnEu0",
    authDomain: "golec-6fc62.firebaseapp.com",
    databaseURL: "https://golec-6fc62-default-rtdb.firebaseio.com",
    projectId: "golec-6fc62",
    storageBucket: "golec-6fc62.appspot.com",
    messagingSenderId: "1073235640087",
    appId: "1:1073235640087:web:739c8505eb1014eaf20152"
};

firebase.initializeApp(firebaseConfig);

export { firebase };