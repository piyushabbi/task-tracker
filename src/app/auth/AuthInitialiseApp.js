import fireBaseConfig from '../config/config.js';
import firebase from 'firebase';

export function fireBaseInitApp() {
  firebase.initializeApp(fireBaseConfig);
}