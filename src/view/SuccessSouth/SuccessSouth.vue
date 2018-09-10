<template>
  <div class="successSouthContent">
    <div class="title">提交成功</div>
    <div class="qrCodeContent">
      <img class="QRcodeImg" src="../../assets/img/QRcodeSouth.jpg" alt="404">
    </div>
    <div class="footer">识别二维码填写快递信息</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.successSouthContent {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.title {
  margin-top: 4vh;
  font-size: 6vh;
  font-weight: bold;

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
