window.addEventListener("DOMContentLoaded", (e) => {
  let header = document.createElement("header");
  header.innerHTML = `<div class="left">
    <div class="logo">
      <a href="index.html">
        <figure>
          <img src="img/logo_w3.png" alt="로고 이미지">
        </figure>
      </a>
    </div>

    <div class="gnb pc">
      <ul>
        <li class="header_list">
          <a href="sub01_mever.html">메버란?</a>
        </li>
        <li class="header_list">
          <a href="sub02_celebrity.html">셀럽·컨텐츠</a>
        </li>
        <li class="header_list">
          <a href="sub03_brand.html">기업·브랜드</a>
        </li>
        <li class="header_list">
          <a href="sub04_invest.html">투자</a>
        </li>
        <li class="header_list">
          <a href="sub05_cooperate.html">협력개발</a>
        </li>
        <li class="header_list">
          <a href="sub06_recruit.html">인재채용</a>
        </li>
        <li class="header_list">
          <a href="sub07_cs.html">고객지원</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="right">
    <div class="pc right_pc">
      <ul>
        <li class="header_list">
          <a href="#">
            <span>입성 예약</span>
          </a>
        </li>
        <li class="header_download">
            <span>앱 다운로드</span>
          <div class="header_dropdown">
            <ul>
              <li>
                <a href="#">
                  <figure>
                    <img src="img/apple.png" alt="플레이스토어 로고">
                  </figure>
                  <span>IOS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img src="img/playstore.png" alt="플레이스토어 로고">
                  </figure>
                  <span>Android</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="mobile right_mobile">
      <div class="hamb_button_wrap">
        <button type="button" name="button" class="hamb_button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="hamb_menu">

      </div>
    </div>
  </div>`

  document.body.insertBefore(header , document.body.firstElementChild);


  let header_dropdown = document.getElementsByClassName("header_dropdown")[0];
  let header_download = document.getElementsByClassName("header_download")[0];

  header_download.addEventListener("mouseenter", (e) => {
    header_dropdown.classList.add("header_dropdown_on");
  })
  header_download.addEventListener("mouseleave", (e) => {
    header_dropdown.classList.remove("header_dropdown_on");
  })

  let right_mobile = document.getElementsByClassName("right_mobile")[0];
  let hamb_button = document.getElementsByClassName("hamb_button")[0];

  hamb_button.addEventListener("click", () => {
    right_mobile.classList.toggle("right_mobile_on");
  })


  // header active code
  let header_list = document.getElementsByClassName("header_list");
  let main = document.getElementsByTagName("main")[0];
  let page_value = main.getAttributeNode("class");

  if (page_value) {
    page_value = main.getAttributeNode("class").value.toString();
  }

  switch (page_value) {
    case "sub01" : header_list[0].classList.add("active");
    break;
    case "sub02" : header_list[1].classList.add("active");
    break;
    case "sub03" : header_list[2].classList.add("active");
    break;
    case "sub04" : header_list[3].classList.add("active");
    break;
    case "sub05" : header_list[4].classList.add("active");
    break;
    case "sub06" : header_list[5].classList.add("active");
    break;
    case "sub07" : header_list[6].classList.add("active");
    break;
  }

})
