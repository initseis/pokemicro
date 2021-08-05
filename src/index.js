import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { initializeHome } from './home/home';
import { addComment } from './js-scripts/comments.js';

initializeHome();

const form = document.querySelector('#add-comment');
form.addEventListener('submit', addComment);
