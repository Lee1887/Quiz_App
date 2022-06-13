export default function BookmarkButton(bookmarkButton) {
  const bookmark = bookmarkButton.querySelector(
    '[data-js="question__bookmark"]'
  );
  const bookmarkIcon = bookmarkButton.querySelector(
    '[data-js="question__bookmark__button]'
  );

  bookmarkIcon.addEventListener("click", () => {
    bookmark.classList.toggle("question__bookmark--save");
  });
}
