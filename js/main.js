window.addEventListener("DOMContentLoaded", (e) => {

  let section_01_wrap = document.getElementsByClassName("section_01_wrap")[0];
  let section_01 = document.getElementsByClassName("section_01")[0];
  let section_01_content = document.getElementsByClassName("section_01_content");
  let section_02 = document.getElementsByClassName("section_02")[0];
  let height = section_01.offsetHeight;

  section_01_content[0].play();

  window.addEventListener("resize", (e) => {
    height = section_01.offsetHeight;
  })

  let scrollY = window.scrollY;
  let acting = [false, false]
  let scroll_fn = (e) => {
    if (window.scrollY < height) {
      section_01_wrap.style.opacity = `${-window.scrollY / height + 1}`
    } else if (window.scrollY >= height) {
      if (!acting[1]) {
        acting[1] = true;
      }
    }

    scrollY = window.scrollY;
  }

  window.addEventListener("scroll", (e) => {
    scroll_fn(e);
  })
})
