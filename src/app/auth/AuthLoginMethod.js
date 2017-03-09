import firebase from 'firebase';
import $ from 'jquery';


export function fireBaseLogIn() {
  $('.login-btn').on('click', (e) => {
    const $this = $(e.currentTarget),
      email = $('#email').val(),
      password = $('#pwd').val(),
      $errorHolder = $('.error-message');

    if (email != '' && password != '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          $errorHolder.text(`${error.code}: ${error.message}`);
        });

    }
  });
}