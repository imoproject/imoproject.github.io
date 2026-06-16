<template>
  <section>
    <div class="wrapper">
      <div class="wrapper">
        <h1>Join Us</h1>
        <h2>入会希望の方へ</h2>
        <p>
          当会への入会は、原則通常イベントにご参加後となっております。<br />
          体験のイベント情報や参加方法の詳細が知りたい方は、インスタのDMまでご連絡ください。
        </p>
        <h1>FAQ</h1>
        <h2>よくあるご質問</h2>
        <div class="small-wrapper">
          <div class="horizontal">
            <div class="Q">Q</div>
            <p>東大生しか入れないんですか？</p>
          </div>
          <div class="horizontal">
            <div class="A">A</div>
            <div>
              <p>
                大学などにより制限は設けておりません、他大学の方も大歓迎です！
              </p>
            </div>
          </div>
        </div>
        <div class="small-wrapper">
          <div class="horizontal">
            <div class="Q">Q</div>
            <p>東大生以外でも活躍できますか？</p>
          </div>
          <div class="horizontal">
            <div class="A">A</div>
            <div>
              <p>
                できます！実際、東京大学の学生以外で深く関わっているメンバーもたくさんいます！
              </p>
            </div>
          </div>
        </div>
        <div class="small-wrapper">
          <div class="horizontal">
            <div class="Q">Q</div>
            <p>どのような活動をおこなっていますか？</p>
          </div>
          <div class="horizontal">
            <div class="A">A</div>
            <div>
              <p>
                芋を喰らう会という料理会や芋ゼミという勉強会をはじめ、茨城の畑でのさつまいも栽培と収穫、<br />イベントへの出展などをおこなっています。
              </p>
            </div>
          </div>
        </div>
        <div class="small-wrapper">
          <div class="horizontal">
            <div class="Q">Q</div>
            <p>活動頻度はどれくらいですか？</p>
          </div>
          <div class="horizontal">
            <div class="A">A</div>
            <div>
              <p>
                活動頻度は平均して大体月に2回ほどです。基本土日に活動しております。
              </p>
            </div>
          </div>
        </div>
        <div class="small-wrapper">
          <div class="horizontal">
            <div class="Q">Q</div>
            <p>活動には原則参加しないといけないみたいな規則はありますか？</p>
          </div>
          <div class="horizontal">
            <div class="A">A</div>
            <div>
              <p>
                すべての活動は任意参加です。なので月に1回も入れない……という方もご安心ください。
              </p>
            </div>
          </div>
        </div>
        <div class="small-wrapper">
          <div class="horizontal">
            <div class="Q">Q</div>
            <p>
              芋に関する知識が全くないのですが、入ってもついていけるのでしょうか？
            </p>
          </div>
          <div class="horizontal">
            <div class="A">A</div>
            <div>
              <p>
                芋に関する知識が全くなくても大丈夫です！知識０で入会される方がほとんどです。<br />芋に関して語りたい、という方も大丈夫！メンバーの中にはすごく詳しい人や熱意のすごい方もいます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@media screen and (max-width: 720px) {
  .horizontal {
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
}
@media screen and (min-width: 721px) {
  .horizontal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.Q {
  color: white;
  background-color: #f8b500;
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.A {
  color: white;
  background-color: #ad1a45;
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
.small-wrapper {
  margin: 5vh 0;
}
</style>
