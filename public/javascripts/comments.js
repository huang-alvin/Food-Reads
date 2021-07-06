// let commentDivs = document.querySelectorAll(".comment-div");
let commentSection = document.querySelector(".comment-section");

const deleteComment = async (commentId) => {
  const res = await fetch(`/comments/${commentId}`, {
    method: "DELETE",
  });

  const result = res.json();
  return result;
};

// ToDo: handle edit/cancel
//  refactor both handlers are doing similar things near the end
const handleEdit = async (
  e,
  text,
  commentContainer,
  editDeleteContainer,
  editInputContainer,
  commentId
) => {
  e.stopPropagation();
  e.preventDefault();

  const res = await fetch(`/comments/${commentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const result = await res.json();
  if (result.success) {
    commentContainer.innerText = text;
    editDeleteContainer.style.display = "";
    editInputContainer.remove();
    commentContainer.style.display = "";
  } else {
    window.alert(`${result.error}`);
  }
};

const handleCancel = (
  e,
  commentContainer,
  editDeleteContainer,
  editInputContainer
) => {
  e.stopPropagation();
  e.preventDefault();
  commentContainer.style.display = "";
  editInputContainer.remove();
  editDeleteContainer.style.display = "";
};

// This can be refactor significantly.
// instead of creating the edit form and removing it,
// in the book.pug file add a hidden edit form with the commentId attatched to the class names
// then you will only need to turn the display on or off for the edit form
// results in much cleaner code

const handleEditDelete = async (e) => {
  e.stopPropagation();
  let commentDiv = e.currentTarget;
  if (e.target.value === "delete") {
    // TO DO
    // secondary popup confirmation to delete
    const result = await deleteComment(commentDiv.id);
    if (result.success) {
      commentDiv.remove();
    } else {
      window.alert(`${result.error}`);
    }
  } else if (e.target.value === "edit") {
    let editDeleteContainer = document.querySelector(".edit-delete-container");
    let commentContainer = commentDiv.childNodes[1];
    editDeleteContainer.style.display = "none";
    commentContainer.style.display = "none";

    let editInputContainer = document.createElement("span");
    let commentText = commentContainer.innerText;

    //  refactor: reveal the once hidden edit container instead
    editInputContainer.innerHTML = `
    <form class="edit-form">
        <input type="text" class="edit-input-${commentDiv.id}" value="${commentText}" minlength="1" required="required" pattern="^[a-zA-Z0-9\s,-]{1,}" title="input not be empty"/>
        <button class="edit-button" type="submit">save changes</button>
        <button class="cancel-button">cancel</button>
    </form>
    `;

    commentDiv.appendChild(editInputContainer);

    const editInput = document.querySelector(`.edit-input-${commentDiv.id}`);

    const editButton = document.querySelector(".edit-button");
    const cancelButton = document.querySelector(".cancel-button");

    editButton.addEventListener("click", (e) => {
      handleEdit(
        e,
        editInput.value,
        commentContainer,
        editDeleteContainer,
        editInputContainer,
        commentDiv.id
      );
    });
    cancelButton.addEventListener("click", (e) => {
      handleCancel(
        e,
        commentContainer,
        editDeleteContainer,
        editInputContainer
      );
    });
  }
};

const attatchListeners = () => {
  let commentDivs = document.querySelectorAll(".comment-div");
  for (let i = 0; i < commentDivs.length; i++) {
    const comment = commentDivs[i];
    comment.addEventListener("click", handleEditDelete);
  }
};
attatchListeners();

// for newly added comments
const observer = new MutationObserver(() => {
  attatchListeners();
});
observer.observe(commentSection, { subtree: true, childList: true });
