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
    <div class="header">
      <div class="option-wrapper" id="home">
        <img src="assets/imologo.png" class="imologo" />
        IMOPROJECT
      </div>
      <div class="header-righthalf">
        <div class="option-wrapper" id="activity">活動内容</div>
       
        <div class="option-wrapper" id="faq">よくあるご質問</div>
       
        <div class="option-wrapper" id="about-potato">芋についてもっと知りたい方へ</div>
      </div>
      <div class="hamburger-menu">
        <div class="hamburger-bar"></div>
        <div class="hamburger-bar"></div>
        <div class="hamburger-bar"></div>
      </div>
    </div>
  <style> 
  .header {
    display: flex;
    width: 100%;
    height: 4rem;
    padding: 0 10px;
    background-color: snow;
    justify-content: space-between;
    border-bottom: 3px solid #AD1A45;
    @media screen and (max-width: 720px) {
      justify-content:start;
      align-items:center;
    }
  }
  .option {
    font-size: 1rem;
    margin: 0 2px;
    color: black;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    align-items: center;
  }
  .option:hover {
    transform: scale(1.1);
  }
  .imologo {
    height: 40px;
    margin: 0 10px;
  }
  .option-wrapper {
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    @media screen and (max-width: 720px) {
      display:none;
    }
  }
  .header-righthalf {
    display: flex;
    width: 65%;
    justify-content: space-between;
    padding: 0 5%;
    @media screen and (max-width: 720px) {
      display:none;
    }
  }
  .hamburger-menu{
    width:28px;
    height:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-left:20px;
    @media screen and (min-width: 721px) {
      display:none;
    }
  }
  .hamburger-bar{
    width:28px;
    height:2px;
    background-color: #AD1A45;
    border-radius:1px;
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
  }
}

// カスタム要素を登録
customElements.define("header-component", HeaderComponent);
