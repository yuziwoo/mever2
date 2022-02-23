window.addEventListener("DOMContentLoaded", (e) => {

  let position = [];
  for (let i=0; i<document.getElementsByTagName("section").length; i++) {
    position.push(false);
  }

  let section_01_wrap = document.getElementsByClassName("section_01_wrap")[0];
  let section_01 = document.getElementsByClassName("section_01")[0];
  let section_01_content = document.getElementsByClassName("section_01_content");
  let section_02 = document.getElementsByClassName("section_02")[0];
  let section_02bg = document.getElementsByClassName("section_02bg")[0];
  let section_02_text = document.getElementsByClassName("section_02_text")[0];
  let count = document.getElementsByClassName("count");
  let height = section_01.offsetHeight;

  section_01_content[0].play();

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

    if  (window.scrollY < height * 2) {
      let scale = 1.5 - (window.scrollY - height / 2) / height / 1
      if ( scale < 1 ) { scale = 1;}
      section_02bg.style.transform = `scale(${scale})`
    }


    // position count
    if (window.scrollY >= height * 0.6 && !position[1]) {
      position[1] = true;
      section_02.classList.add("section_02_on");
    }

    scrollY = window.scrollY;
  }

  for (let i=0; i<count.length; i++) {
    count[i].style.height = `${section_02_text.offsetHeight}px`;
  }

  window.addEventListener("scroll", (e) => {
    scroll_fn(e);
  })
  window.addEventListener("resize", (e) => {
    height = section_01.offsetHeight;
    for (let i=0; i<count.length; i++) {
      count[i].style.height = `${section_02_text.offsetHeight}px`;
    }
    scroll_fn(e);
  })
  scroll_fn(e);
})
