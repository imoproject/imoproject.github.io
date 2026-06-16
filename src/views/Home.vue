<template>
  <section>
    <div class="wrapper">
      <h1>About Us</h1>
      <h2>
        <div class="english">IMOPROJECT</div>
        とは
      </h2>
      <p>
        IMOPROJECTは芋類の栽培や料理を通じてその魅力を学び発信することを目的とした、東京大学を主体とするインカレ学生団体です。<br />
        お芋に関する様々な活動を行っています！
      </p>
    </div>
    <div class="wrapper">
      <h1>Concept</h1>
      <h2>団体理念</h2>
      <p>
        I「いもを」M「もっと」O「多くの人に」<br />
        美味しい、でもそれだけじゃない。<br />
        芋類は過去に飢饉を幾度なく救ってきた歴史を持ち、現在では嗜好品、健康品としても大きく注目されています。<br />
        安価で手軽に食べれる主食としての用途からスイーツなどの高級品や嗜好品の一面を持つ芋類の幅広さも魅力の一つでしょう。<br />
        一口に芋類と言っても、多様な品種があり、産地、農家さんによって違いがあり、食としての楽しみの奥の深さは計り知れません。<br />
        それだけではなく芋の特性や芋が今まで築いてきた文化、歴史、世界。その面白さは食に限りません。<br />
        「食べる」、「巡る」、「育てる」、「学ぶ」、「伝える」<br />
        様々な角度から芋の魅力を深掘りします。<br />
        「100人の一歩を、小さな一歩の積み重ねを信じて」<br />
        ２０１８年の設立から、現在IMOPROJECTは現在100人を超える大きな団体に成長しました。<br />
        とはいえ、その多くがはじめは芋類についての知識はほとんどゼロ。<br />
        芋への愛も関心度もメンバーによって大きく差があります。<br />
        でも、それでいいのです。それがいいのです。<br />
        <br />

        IMOPROJECTをきっかけに<br />
        芋がより身近な存在になれば、<br />
        芋の知識が一つでも多く身につけば、<br />
        芋への愛が少しでも深まれば。<br />
        <br />
        例えば<br />
        スーパーに入って芋コーナーをつい確認しちゃう<br />
        芋に関する情報には少し敏感になる。<br />
        芋の種類や産地にまで目が向くようになる。<br />
        そんな一人一人の小さな変化が積み重なれば、きっと何かを変える力になるはずです。<br />
        「IMOPROJECT を通じて芋界を盛り上げる。」<br />
        それを胸に今日もIMOPROJECT の活動に取り組んで参ります。
      </p>
    </div>
    <img src="../assets/images/imo-home2.png" class="imo-home2" />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@media screen and (max-width: 720px) {
  section {
    margin-bottom: 0 !important;
    overflow: hidden;
  }
  .imo-home2 {
    width: 60%;
    transform: translateY(30px);
  }
}
@media screen and (min-width: 721px) {
  .imo-home2 {
    width: 250px;
    position: fixed;
    bottom: -30px;
    right: 3%;
    transform: rotateY(180deg);
  }
}
</style>
