let commentInput = document.querySelector(".user-comment");
function newAverage(average, total, newRating) {
  const avg = parseFloat(average);
  const totalInt = parseInt(total);
  const newRatingInt = parseInt(newRating);

  const newTotal = totalInt + 1;
  const newAvg = (avg * totalInt + newRatingInt) / newTotal;

  return [newAvg.toFixed(1), newTotal];
}

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

        //Add Star Rating
        const ratingAdd = document.querySelector(".rating-add-div");
        ratingAdd.innerHTML = "";
        const userRating = document.createElement("p");
        userRating.classList.add("user-rating");
        userRating.innerText = `Your Rating:`;
        ratingAdd.appendChild(userRating);
        const starSpan = document.createElement("span");
        starSpan.classList.add("star-rating-span");
        for (let n = 0; n < 5; n++) {
          const star = document.createElement("i");
          if (n < rating) {
            star.classList.add("fa-star", "fas");
          } else {
            star.classList.add("fa-star", "far");
          }
          starSpan.appendChild(star);
        }
        ratingAdd.appendChild(starSpan);

        // Update Average and Total Ratings
        const average = document.querySelector(".avg");
        const total = document.querySelector(".total");
        const [newAvg, newTotal] = newAverage(
          average.innerText,
          total.innerText,
          rating
        );
        average.innerText = newAvg;
        total.innerText = newTotal;
      }
    });
}

if (document.querySelector("#addComment")) {
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

      const result = await res.json();

      if (res.ok) {
        //   console.log("ok");
        const commentAdd = document.querySelector(".comment-section");

        const commentDiv = document.createElement("div");
        const span = document.createElement("span");
        const commentText = document.createElement("p");
        const editDeleteContainer = document.createElement("div");

        commentText.innerText = `${comment}`;
        span.innerText = `${name}:`;

        span.classList.add("name");
        commentText.classList.add("comment");
        commentDiv.classList.add("comment-div");
        editDeleteContainer.classList.add("edit-delete-container");

        editDeleteContainer.innerHTML = `<button value="edit" class="edit")>edit</button><button value="delete" class="delete")>delete</button>
        `;

        commentDiv.appendChild(span);
        commentDiv.appendChild(commentText);
        commentAdd.prepend(commentDiv);
        commentDiv.appendChild(editDeleteContainer);
        commentDiv.id = result.commentId;
        commentInput.value = "";
      }
    });
}
