// let commentDivs = document.querySelectorAll(".comment-div");
let commentSection = document.querySelector(".comment-section");

const deleteComment = async (commentId) => {
  const res = await fetch(`/comments/${commentId}`, {
    method: "DELETE",
  });

  const result = res.json();
  return result;
};

const handleEditDelete = async (e) => {
  e.stopPropagation();
  if (e.target.value === "delete") {
    // TO DO
    // secondary popup confirmation to delete
    let commentDiv = e.currentTarget;
    const result = await deleteComment(commentDiv.id);
    if (result.success) {
      commentDiv.remove();
    } else {
      window.alert(`${result.error}`);
    }
  } else if (e.target.value === "edit") {
    console.log("dog");
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
