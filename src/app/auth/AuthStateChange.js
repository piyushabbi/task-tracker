import firebase from 'firebase';
import $ from 'jquery';

export function fireBaseStateChange() {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('Authstatechange: User Signed in!')
      } else {
        // No user is signed in.
        console.log('Authstatechange: No User found!');
      }
    });
}