let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toy-collection = document.getElementById('toy-collection');
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(json =>{
    toy-collection.insertAdjacentHTML("beforeend",`<div class='card'><h2>${json.name}</h2><img src=${json.image} class='toy-avatar' /><p>${json.likes} Likes </p><button class='like-btn'>Like <3</button> </div>`)
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
