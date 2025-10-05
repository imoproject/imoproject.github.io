class FooterComponent extends HTMLElement {
  constructor() {
    super();
    // シャドウルートを作成
    // mode: "closed" で JavaScript からシャドウルートにアクセスできないようにできる（アクセス可は open）
    const shadow = this.attachShadow({ mode: "closed" });
    // シャドウルートにHTMLを挿入
    shadow.innerHTML = `   <div class="footer">
  </div>

  <style></style>`;
  }
}

// カスタム要素を登録
customElements.define("footer-component", FooterComponent);
