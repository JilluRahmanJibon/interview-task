// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApsEYMQtGrPqLfR8jvHX4_6eBvnQt6ZcU",
    authDomain: "interview-task-01.firebaseapp.com",
    databaseURL: "https://interview-task-01-default-rtdb.firebaseio.com",
    projectId: "interview-task-01",
    storageBucket: "interview-task-01.appspot.com",
    messagingSenderId: "805623947613",
    appId: "1:805623947613:web:cce396cc901e0256a9c8b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
