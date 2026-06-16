<template>
  <section>
    <div class="wrapper">
      <h1>Activity</h1>
      <h2>活動内容</h2>
      <p>
        IMOPROJECTは、さつまいもをメインとしたすべての芋を対象とし、芋に関するあらゆる活動を行っています。<br />
        そのうちの一部の活動を紹介します！
      </p>
    </div>
    <div class="wrapper">
      <h1>Eat</h1>
      <h2>食べる</h2>
      <p>
        月に2、3回程度「芋を喰らう会」と言う名の料理会を開催しています。<br />
        定番の芋料理や世界の芋料理、マイナーな芋料理などジャンルは様々です！
      </p>
      <img src="../assets/images/activity1.png" class="activity-picture" />
    </div>
    <div class="wrapper">
      <h1>Go</h1>
      <h2>巡る</h2>
      <p>
        お芋の美味しいお店やお芋の産地など、芋に関する場所へはどこまででも行きます！<br />
        芋カフェ巡り、芋ツアー、芋合宿などを行っています。
      </p>
      <img src="../assets/images/activity2.png" class="activity-picture" />
    </div>
    <div class="wrapper">
      <h1>Cultivation</h1>
      <h2>栽培</h2>
      <p>
        東大キャンパス内の畑や協力してくださる会社様の畑をお借りして、様々な種類の芋を栽培しています！<br />
        今年はなんとキャッサバまで！？
      </p>
      <img src="../assets/images/activity3.png" class="activity-picture" />
    </div>
    <div class="wrapper">
      <h1>Study</h1>
      <h2>学ぶ</h2>
      <p>いろんなテーマで芋について学ぶ「芋ゼミ」も行っています！</p>
      <img src="../assets/images/activity4.png" class="activity-picture" />
    </div>
    <div class="wrapper">
      <h1>Promotion</h1>
      <h2>伝える</h2>
      <p>
        外部に芋について伝える活動も数多く行っています！<br />
        さつまいもイベントでの展示、アンソロジーやグッズの販売、学園祭への出展、町おこしへの協力など様々な方面で活動しています！！
      </p>
    </div>
    <img src="../assets/images/activity6.svg" class="activity-ill" />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 720px) {
  section {
    margin-bottom: 0 !important;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .activity-ill {
    width: 60%;
    transform: translateY(30px);
  }
  .activity-picture {
    width: 70%;
  }
}
@media screen and (min-width: 721px) {
  .activity-ill {
    width: 150px;
    position: fixed;
    bottom: 0;
    left: 300px;
    transform: rotateY(180deg);
  }
  .activity-picture {
    width: 50%;
  }
}
</style>
