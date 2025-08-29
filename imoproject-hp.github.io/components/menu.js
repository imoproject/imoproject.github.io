class MenuComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  goHome() {
    window.location.href = "./";
  }
  goActivity() {
    window.location.href = "activity.html";
  }
  goFaq() {
    window.location.href = "faq.html";
  }
  goAboutPotato() {
    window.location.href = "about-potato.html";
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = ` 
    <div class="menu-wrapper">
    <div class="menu-upper">
      <div class="MENU">
        <span class="num1">M</span><span class="num2">E</span
        ><span class="num3">N</span><span class="num4">U</span>
      </div>
      <div class="menu-detail">
        地中に眠る可能性をいま、<br />
        掘り起こす。<br />
        ホクホクな最新情報は<br />
        こちらから！！ <br />今日もお芋を愛でています。
      </div>
    </div>
    <div class="menu-lower">
      <div class="item">
        <div class="icon-logo" id="home">
          <img src="../assets/imologo2.svg" class="icon-picture-logo" />
        </div>
        <div class="text">HOME</div>
      </div>
      <div class="item" id="activity">
        <div class="icon">
          <img src="../assets/imo1.png" class="icon-picture" />
        </div>
        <div class="text">活動内容</div>
      </div>
      <div class="item" id="faq">
        <div class="icon">
          <img src="../assets/imo2.png" class="icon-picture" />
        </div>
        <div class="text">よくあるご質問</div>
      </div>
      <div class="item" id="about-potato">
        <div class="icon">
          <img src="../assets/imo1.png" class="icon-picture" />
        </div>
        <div class="text">芋について<br />もっと知りたい方へ</div>
      </div>
      <div class="item" id="line-stamp">
        <div class="icon">
          <img src="../assets/line-stamp.png" class="icon-picture" />
        </div>
        <div class="text">LINEスタンプ</div>
      </div>
    </div>
  </div>
  <div class="hamburger-menu" id="hamburger-menu">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  <style> 
  .MENU {
  background-color: #ad1a45;
  position: relative;
  width: 250px;
  height: 35px;
}
span {
  font-size: 18px;
  font-weight: bold;
  height: 70px;
  position: absolute;
  color: #fffafa;
  width: 20px;
  left: 110px;
  top: 0;
  transform-origin: bottom center;
}
.num1 {
  transform: rotate(-9deg) translateX(-20px);
}
.num2 {
  transform: rotate(-5deg) translateX(-3px);
}
.num3 {
  transform: rotate(5deg) translateX(3px) translateY(1px);
}
.num4 {
  transform: rotate(12deg) translateX(13px) translateY(1px);
}
.menu-lower {
  width: max-content;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 10px;
}
.menu-detail {
  color: #75464c;
  background-color: #c48696;
  padding: 10px;
  width: 230px;
  border-radius: 0 0 14px 14px;
  text-align: center;
}
.item {
  display: flex;
  align-items: center;
}
.icon {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6d893;
}
.icon-logo {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ad1a45;
}
.icon-picture {
  width: 60px;
  border-radius: 10px;
}
.icon-picture-logo {
  width: 50px;
  border-radius: 10px;
}
.text {
  color: #ad1a45;
  background-color: white;
  padding: 10px;
  width: 160px;
  text-align: center;
  border-radius: 0 20px 20px 0;
}
.menu-wrapper {
  transition: all 0.3s ease;
}
.hamburger-menu {
  display: none;
}
@media screen and (max-width: 720px) {
  .menu-wrapper {
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
  .menu-wrapper.show {
    transform: translateX(0);
    transition: all 0.3s ease;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f2e7;
    height:100vh;
  }
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3;
  }
  .bar {
    width: 30px;
    height: 3px;
    background-color: #ad1a45;
    margin: 4px 0;
    border-radius: 1px;
  }
}
    </style>`;
    const homeButton = this.shadowRoot.querySelector("#home");
    homeButton.addEventListener("click", () => this.goHome());
    const activityButton = this.shadowRoot.querySelector("#activity");
    activityButton.addEventListener("click", () => this.goActivity());
    const faqButton = this.shadowRoot.querySelector("#faq");
    faqButton.addEventListener("click", () => this.goFaq());
    const aboutPotatoButton = this.shadowRoot.querySelector("#about-potato");
    aboutPotatoButton.addEventListener("click", () => this.goAboutPotato());
    const hamburgerMenu = this.shadowRoot.querySelector("#hamburger-menu");
    //const hamburgerBars = this.shadowRoot.querySelectorAll(".hamburger-bar");
    const menuWrapper = this.shadowRoot.querySelector(".menu-wrapper");
    const menuUpper = this.shadowRoot.querySelector(".menu-upper");
    const menuLower = this.shadowRoot.querySelector(".menu-lower");

    hamburgerMenu.addEventListener("click", () => {
      menuWrapper.classList.toggle("show");
      menuUpper.classList.toggle("show");
      menuLower.classList.toggle("show");
      optionWrappers.forEach((el) => {
        el.classList.toggle("show");
      });
    });
  }
}

customElements.define("menu-component", MenuComponent);
