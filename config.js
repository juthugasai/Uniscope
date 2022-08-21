import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC5ZGHVGctgmxkCggvHziqJ0vDRg-gIo5Q",
  authDomain: "uniscope-2bc57.firebaseapp.com",
  projectId: "uniscope-2bc57",
  storageBucket: "uniscope-2bc57.appspot.com",
  messagingSenderId: "620539137688",
  appId: "1:620539137688:web:65ec5e89d1b674346f4aed"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
