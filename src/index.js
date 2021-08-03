// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/style.css";
import displayModal from "./js-scripts/modal.js";
import { addComment } from "./js-scripts/comments.js";

const btnModal = document.querySelectorAll("button");
const form = document.querySelector("#add-comment");

btnModal.forEach((btn) => {
  btn.addEventListener("click", displayModal);
});

form.addEventListener("submit", addComment);
