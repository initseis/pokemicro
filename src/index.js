import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import initializeHome from './home/home';
import displayModal from './js-scripts/modal.js';

initializeHome();
const btnModal = document.querySelectorAll('button');
btnModal.forEach((btn) => {
  btn.addEventListener('click', displayModal);
});
