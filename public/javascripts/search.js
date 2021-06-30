const searchBar = document.querySelector("#search-input");
const searchModal = document.querySelector(".search-modal");

if (searchBar) {
  searchBar.addEventListener("change", async (e) => {
    e.preventDefault();
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

          const { searchResult } = await res.json();
          console.log(searchResult, "=====");
          // searchModal.classList.remove("hidden");
          searchModal.hidden = false;
        }
      }, 500);
    }
    search();
  });
}
// if (searchModal) {
//   searchBar.addEventListener("keyup", async (e) => {
//     e.preventDefault();

//     const searchInput = e.target.value;

//     if (searchInput.length < 1) {
//       //   searchModal.classList.add("hidden");
//       searchModal.hidden = true;
//     }
//   });
// }
