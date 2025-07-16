class FooterComponent extends HTMLElement {
  constructor() {
    super();
    // シャドウルートを作成
    // mode: "closed" で JavaScript からシャドウルートにアクセスできないようにできる（アクセス可は open）
    const shadow = this.attachShadow({ mode: "closed" });
    // シャドウルートにHTMLを挿入
    shadow.innerHTML = `   <div class="footer">
    <div class="sns-icons">
      <a href="https://twitter.com/imoproject_ut" target="_blank">
        <font-awesome-icon :icon="['fab', 'x-twitter']" class="icons" />
      </a>
      <a href="https://instagram.com/imoproject.ut" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" class="icons" />
      </a>
      <a href="mailto:imopro.ut@gmail.com">
        <font-awesome-icon :icon="['fas', 'envelope']" class="icons" />
      </a>
    </div>
  </div>

  <style> .icons {
  font-size: 30px;
  color: black;
}
.sns-icons {
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin-right: 5vw;
}
.footer {
  width: 100%;
  height: 100px;
  background: snow;
  margin-top: 20vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
}</style>`;
  }
}

// カスタム要素を登録
customElements.define("footer-component", FooterComponent);
