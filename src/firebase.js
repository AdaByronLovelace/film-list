import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD7eyqMLOmL4TijGTC0n0HwhVvFx4fPX0s",
  authDomain: "media-list-86e4d.firebaseapp.com",
  databaseURL: "https://media-list-86e4d.firebaseio.com",
  projectId: "media-list-86e4d",
  storageBucket: "media-list-86e4d.appspot.com",
  messagingSenderId: "49500698445"
}
firebase.initializeApp(config)

export default firebase