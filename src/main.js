const searchBarContainerEl = document.querySelector(".search-bar-container")
const manigierEl = document.querySelector(".magnifier");

manigierEl.addEventListener('click', ()=> {
    searchBarContainerEl.classList.toggle("active")
})