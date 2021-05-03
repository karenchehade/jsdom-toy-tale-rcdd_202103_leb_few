let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toy-collection = document.getElementById('toy-collection');
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(json =>{
    toy-collection.insertAdjacentHTML("beforeend","<div class='card'> </div>")
  })
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
