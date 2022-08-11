import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBk4mFSuiKuwTDPPmkRxYQtfXYGy8Qlycg",
    authDomain: "olx-clone-5f627.firebaseapp.com",
    projectId: "olx-clone-5f627",
    storageBucket: "olx-clone-5f627.appspot.com",
    messagingSenderId: "1091276339695",
    appId: "1:1091276339695:web:a37d87e32dca7e03d01e1a",
    measurementId: "G-DCT50WX5D7"
  };
export default firebase.initializeApp(firebaseConfig);