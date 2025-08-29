class HeaderComponent extends HTMLElement {
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
    <div class="header-wrapper">
    <div class="logo-container" id="home">
      <img src="../assets/imologo.png" class="imologo" />
      IMOPROJECT
    </div>
    <div class="sns-wrapper-pc">
      公式SNS
      <div class="horizonal">
        <a href="https://www.instagram.com/imoproject.ut/" target="_blank" class="sns-container">
          <img src="../assets/instagram.svg" class="sns-logo" />
          <div class="arrow">
            Instagram
            <div class="arrow-right"></div>
          </div>
        </a>
       <a href="https://x.com/imoproject_ut" target="_blank" class="sns-container">
  <img src="../assets/X.png" class="sns-logo" />
  <div class="arrow">
    X
    <div class="arrow-right"></div>
  </div>
</a>

      </div>
    </div>
    <div class="sns-wrapper-sp">
      <img src="../assets/instagram.svg" class="sns-logo" />
      <img src="../assets/X.png" class="sns-logo" />
    </div>
  </div>
  <style> 
  .imologo {
  width: 40px;
  margin-right: 10px;
}
.logo-container {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.header-wrapper {
  background-color: #fffafa;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  border-width: 15px 0 10px 0;
  border-color: #ad1a45;
  border-style: solid;
  z-index:10;
}
  .sns-container:hover {
  cursor: pointer;
}


@media screen and (max-width: 720px) {
  .imologo {
    width: 30px;
    margin-right: 7px;
  }
  .logo-container {
    font-size: 15px;
  }
  .header-wrapper {
    padding: 12px 18px;
    border-width: 8px 0 5px 0;
  }
  .sns-wrapper-pc {
    display: none;
  }
  .sns-wrapper-sp {
  display: flex;
  margin-right:60px;
}
}
@media screen and (min-width: 721px) {
  .sns-wrapper-pc {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 50px;
  justify-content: space-between;
}
  .sns-wrapper-sp {
    display: none;
  }
}

.sns-container {
  display: flex;
  align-items: center;
}
.sns-logo {
  width: 30px;
  margin-right: 10px;
}
.horizonal {
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  margin-top: 5px;
}
.arrow {
  display: flex;
  color: #ad1a45;
  align-items: center;
}
.arrow-right {
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent #ad1a45;
  margin-left: 10px;
}
a {
  text-decoration: none;
}
    </style>`;
    const homeButton = this.shadowRoot.querySelector("#home");
    homeButton.addEventListener("click", () => this.goHome());
  }
}

customElements.define("header-component", HeaderComponent);
