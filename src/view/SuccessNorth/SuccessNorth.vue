<template>
  <div class="successNorthContent">
    <div class="qrCodeContent">
      <img class="QRcodeImg" src="../../assets/img/QRcodeNorth.jpg" alt="404">
    </div>
    <div class="footer">识别二维码填写快递信息</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.successNorthContent {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.title {
  font-size: 6vh;
  font-weight: bold;
  margin-top: 4vh;
}
.qrCodeContent {
  height: 40vh;
  width: 40vh;
  margin-top: 6vh;
}
.QRcodeImg {
  height: 40vh;
  width: 40vh;
}
.footer {
  margin-top: 3vh;
  flex: 1;
  width: 94%;
  padding: 2vh;
  display: flex;
  justify-content: center;
  font-size: 2.5vh;
}
</style>
