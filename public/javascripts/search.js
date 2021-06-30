const searchBar = document.querySelector("#search-input");
const searchModal = document.querySelector(".search-modal");

if (searchBar) {
  searchBar.addEventListener("keyup", async (e) => {
    // e.preventDefault();
    const searchInput = e.target.value;

    let delayTimer;

    function search() {
      clearTimeout(delayTimer);
      delayTimer = setTimeout(async () => {
        if (searchInput.length > 3) {
          const ajax = true;
          const res = await fetch("/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ searchInput, ajax }),
          });

          const searchResult = await res.json();
          // console.log({[searchInput]: searchResult});
          // searchModal.classList.remove("hidden");
          searchModal.innerHTML = "";
          searchModal.hidden = false;

          searchResult.forEach((book) => {
            searchModal.innerHTML += `<a href="/books/${book.id}">${book.name}</a>`;
          });
        }
      }, 500);
    }
    search();
  });
}

document.addEventListener('click',(e) => {
  const ignores = [searchModal, searchBar ]

  if(ignores.includes(e.target)) {
    e.stopPropagation()
    searchModal.style.display ="flex"
    return
  }
  searchModal.style.display = "none"
})
