/**
 * @jest-environment jsdom
 */
import { commentsCounter } from "./src/js-scripts/comments.js";

describe("Testing the comments counter function", () => {
  test("Count three comments", () => {
    //Arrange
    document.body.innerHTML =
      "<div id='commentsWrapper'>" +
      "  <p>2021-08-01 Jane: Nice Pokemon!</p>" +
      "  <p>2021-08-02 John: My fav <3</p>" +
      "  <p>2021-08-03 Kevin: GOAT</p>" +
      "</div>";

    //Act
    const comments = commentsCounter(document.querySelector("div"));

    //Assert
    expect(comments).toBe(3);
  });

  test("Add a comment and count the comments", () => {
    //Arrange
    const newComment = document.createElement("p");
    newComment.innerHTML = "2021-08-04 Lu: Lovely";
    const divWrapComments = document.querySelector("div");
    divWrapComments.appendChild(newComment);

    //Act
    const comments = commentsCounter(divWrapComments);

    //Assert
    expect(comments).toBe(4);
  });
});
