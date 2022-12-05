import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBwcQn7hkQgQhV78nOE9On93VpUegWsp2g",
  authDomain: "netflix-clone-cf491.firebaseapp.com",
  projectId: "netflix-clone-cf491",
  storageBucket: "netflix-clone-cf491.appspot.com",
  messagingSenderId: "1088041748843",
  appId: "1:1088041748843:web:26b979317e2542c4f7a42e"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}
export default db