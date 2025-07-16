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
        <div class="option-wrapper stick">/</div>
        <div class="option-wrapper" id="faq">よくあるご質問</div>
        <div class="option-wrapper stick">/</div>
        <div class="option-wrapper" id="about-potato">芋についてもっと知りたい人へ</div>
      </div>
    </div>
  <style> .header {
    display: flex;
    width: 100%;
    height: 4rem;
    padding: 0 10px;
    background-color: snow;
    justify-content: space-between;
  }
  .option {
    font-size: 15px;
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
  }
  .header-righthalf {
    display: flex;
    width: 65%;
    justify-content: space-between;
    padding: 0 5%;
  }</style>`;
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
