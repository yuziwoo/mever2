window.addEventListener("DOMContentLoaded", (e) => {
  let list = document.getElementsByClassName("list");
  let title = document.getElementsByClassName("title");

  for (let i=0; i<title.length; i++) {
    title[i].addEventListener("click", () => {
      list[i].classList.toggle("list_on");
    })
  }
})
