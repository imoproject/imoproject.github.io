<template>
  <section>
    <div class="wrapper">
      <h1>Stamp</h1>
      <h2>LINEスタンプ</h2>
      <p>
        IMOPROJECTでは、LINEスタンプを販売しております。<br />
        おいもちゃんとお友達の猫ちゃんは、<br />
        IMOPROJECTオリジナルキャラクターです！<br />
        ほっこり芋ライフを、スタンプでも！ 可愛い仲間が、あなたのトークを<br />
        もっとホクホクにしてくれるはず…！ お買い求めはこちらから🎉<br />
        <br />
      </p>
    </div>
    <div class="wrapper">
      <a
        href="https://store.line.me/stickershop/product/24031211/ja"
        target="_blank"
        ><div class="line-wrapper">
          <img src="../assets/images/line1.png" class="line-picture2" />
          <p>
            のんびり屋の<br class="only-sp" />おいもちゃんと<br
              class="only-sp"
            />猫ちゃん
          </p>
        </div></a
      >
      <a
        href=" https://store.line.me/stickershop/product/25743771/ja"
        target="_blank"
        ><div class="line-wrapper">
          <img src="../assets/images/line2.png" class="line-picture2" />
          <p>
            のんびり屋の<br class="only-sp" />おいもちゃんと<br
              class="only-sp"
            />猫ちゃん2
          </p>
        </div></a
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
.line-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
}
@media screen and (min-width: 721px) {
  .line-wrapper {
    width: 100%;
  }
  .only-sp {
    display: none;
  }
}
@media screen and (max-width: 720px) {
  .line-wrapper {
    width: 90%;
  }
}
.line-wrapper img {
  width: 100px;
  height: auto;
  margin-right: 10px;
}
.line-wrapper p {
  font-size: 1rem;
  color: #333;
}
a {
  appearance: none;
  text-decoration: none;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
