import { getPokemonComments, setPokemonComment } from "./API.js";

const form = document.querySelector("#add-comment");

const displayComments = async (id) => {
  const response = getPokemonComments(id);
  response.then((comments) => {
    const commentsDiv = document.querySelector("#comments");
    commentsDiv.innerHTML = "";
    const commentsQuantity = document.createElement("h4");
    commentsQuantity.className = "text-sm-center";
    comments.length === undefined
      ? (commentsQuantity.innerHTML = "Comments (0)")
      : (commentsQuantity.innerHTML = `Comments (${comments.length})`);
    commentsDiv.appendChild(commentsQuantity);
    if (comments.length !== undefined) {
      comments.forEach((element) => {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
        commentsDiv.appendChild(paragraph);
      });
    }
  });
};

const addComment = async (event) => {
  event.preventDefault();
  const response = setPokemonComment(
    form[2].value,
    form[0].value,
    form[1].value
  );
  // const response = await fetch(`${involvementUrl}/comments/`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     item_id: form[2].value,
  //     username: form[0].value,
  //     comment: form[1].value,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  response.then(() => {
    displayComments(form[2].value);
  });
};

export { displayComments, addComment };
