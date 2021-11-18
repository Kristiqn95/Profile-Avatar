import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  
  const image = document.querySelector(".image");
  image.addEventListener("click", (event) => {
    if(event.target.classList.contains('active')) {
      event.target.classList.remove('active');
    } else {
      event.target.classList.add('active');
    }
  });
});
