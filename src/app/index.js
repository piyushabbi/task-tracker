// Import Styles
import styles from '../../src/app/styles.scss';

// Import Plugins
import $ from 'jquery';
import bootstrap from 'bootstrap';

// Import app scripts
import {fireBaseInitApp} from './auth/AuthInitialiseApp.js';
import {fireBaseStateChange} from './auth/AuthStateChange.js';
import {fireBaseLogIn} from './auth/AuthLoginMethod.js';
import {firebaseLogOut} from './auth/AuthLogOutMethod.js';

import TodoListApp from '../../src/app/todo/todo.js';

let Auth = {
  init : () => {
    fireBaseInitApp();
    fireBaseStateChange();
    fireBaseLogIn();
    firebaseLogOut();
  }
}
Auth.init();

// Initialize the task app
const app = new TodoListApp();
app.init();