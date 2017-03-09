import firebase from 'firebase';
import $ from 'jquery';

export function firebaseLogOut() {
  $('.logout-btn').on('click', () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log('LogoutMethod: Sign Out Successful...');
      }, (error) => {
        // An error happened.
        console.log('LogoutMethod: Sign Out Error...', error);
      })
  });
}