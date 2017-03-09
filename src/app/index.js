// Import Styles
import styles from '../../src/app/styles.scss';

// Import Plugins
import $ from 'jquery';
import bootstrap from 'bootstrap';

// Import app scripts
import TodoListApp from '../../src/app/todo/todo.js';

// Initialize the task app
const app = new TodoListApp();
app.init();