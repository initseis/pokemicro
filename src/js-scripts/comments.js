import { getPokemonComments, setPokemonComment } from "./API.js";
import { blankInputs } from "./strings.js";

const form = document.querySelector("#add-comment");

const displayComments = async (id) => {
  const response = getPokemonComments(id);
  response.then((comments) => {
    const commentsDiv = document.querySelector("#comments");
    commentsDiv.innerHTML = "";
    const commentsQuantity = document.createElement("h5");
    commentsQuantity.className = "text-sm-center mt-2";
    commentsDiv.appendChild(commentsQuantity);
    const divWrapComments = document.createElement("div");
    divWrapComments.className = "d-flex flex-column align-items-sm-start ps-4";
    commentsDiv.appendChild(divWrapComments);
    if (comments.length !== undefined) {
      comments.forEach((element) => {
        const paragraph = document.createElement("p");
        paragraph.className = "m-0";
        paragraph.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
        divWrapComments.appendChild(paragraph);
      });
    }
    commentsQuantity.innerHTML = `Comments (${commentsCounter(
      divWrapComments
    )})`;
  });
};

const addComment = async (event) => {
  event.preventDefault();
  const response = setPokemonComment(
    form[2].value,
    form[0].value,
    form[1].value
  );
  response.then(() => {
    displayComments(form[2].value);
    blankInputs();
  });
};

const commentsCounter = (div) => div.childElementCount;

export { displayComments, addComment, commentsCounter };
