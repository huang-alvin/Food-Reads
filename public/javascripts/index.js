//food-reads.herokuapp.com/home
//localhost:8080/books/22
// https: http:
if (document.querySelector("#addToShelf")) {
  document
    .querySelector("#addToShelf")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const form = new FormData(document.querySelector("#shelf-form"));
      const shelfId = form.get("shelfId");
      const bookId = form.get("bookId");

      const res = await fetch("/shelf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shelfId, bookId }),
      });

      if (res.ok) {
        //   console.log("ok");
        const shelfAdd = document.querySelector(".shelf-add-div");
        shelfAdd.innerText = "This book is now in your shelf";
      }
    });
}

if (document.querySelector("#addRating")) {
  document
    .querySelector("#addRating")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const form = new FormData(document.querySelector("#rating-form"));
      const rating = form.get("rating");
      const bookId = form.get("bookId");

      const res = await fetch("/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, bookId }),
      });

      if (res.ok) {
        //   console.log("ok");
        const ratingAdd = document.querySelector(".rating-add-div");

        ratingAdd.innerText = `Your Rating: ${rating}`;
      }
    });
}

document
  .querySelector("#addComment")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    const form = new FormData(document.querySelector("#comment-form"));
    const comment = form.get("comment");
    const bookId = form.get("bookId");
    const name = form.get("name");

    const res = await fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment, bookId }),
    });

    if (res.ok) {
      //   console.log("ok");
      const commentAdd = document.querySelector(".comment-section");

      const commentDiv = document.createElement("div");
      const span = document.createElement("span");
      const commentText = document.createElement("p");

      commentText.innerText = `${comment}`;
      span.innerText = `${name}:`;

      span.classList.add("name");
      commentText.classList.add("comment");
      commentDiv.classList.add("comment-div");

      commentDiv.appendChild(span);
      commentDiv.appendChild(commentText);
      commentAdd.prepend(commentDiv);
    }
  });
