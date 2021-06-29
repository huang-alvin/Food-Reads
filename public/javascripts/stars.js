const stars = document.querySelectorAll(".fa-star")
let rating = 1;
const select = document.getElementById("rating-select")

const checkElement = document.querySelector(".star-rating-edit")

if (checkElement) {

    stars.forEach((star, i) => {
    
        star.addEventListener("mouseenter", (e) => {
            // console.log(e.target.value)
            const tempRating = i + 1
    
            stars.forEach((s, j) => {
                if (j < tempRating) {
                    s.classList.remove("far")
                    s.classList.add("fas")
                } else {
                    s.classList.remove("fas")
                    s.classList.add("far")
                }
            })
    
    
        })
    
        star.addEventListener("mouseleave", (e) => {
            // console.log(e.target.value)
    
            stars.forEach((s, j) => {
                if (j < rating) {
                    s.classList.remove("far")
                    s.classList.add("fas")
                } else {
                    s.classList.remove("fas")
                    s.classList.add("far")
                }
            })
    
    
        })
    
        star.addEventListener("click", (e) => {
            rating = i+1
            select.value=rating
        })
    })
}

