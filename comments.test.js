/**
 * @jest-environment jsdom
 */
import { commentsCounter } from "./src/js-scripts/comments.js";

test("Add one new item to the list", () => {
  document.body.innerHTML =
    "<div>" +
    "  <p>First Comment</p>" +
    "  <p>Second Comment</p>" +
    "  <p>Third Comment</p>" +
    "</div>";

  const divWrapComments = document.querySelector("div");
  const comments = commentsCounter(divWrapComments);
  expect(comments).toBe(3);
});
