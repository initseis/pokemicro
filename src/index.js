import 'bootstrap/dist/css/bootstrap.min.css';
import displayModal from './js-scripts/modal.js';

const btnModal = document.querySelectorAll('button');

btnModal.forEach((btn) => {
  btn.addEventListener('click', displayModal);
});
