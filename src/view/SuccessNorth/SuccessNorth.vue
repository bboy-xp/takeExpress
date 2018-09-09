<template>
  <div class="successNorthContent">
    <div class="title">提交成功</div>
    <div class="qrCodeContent">
      <img class="QRcodeImg" src="../../assets/img/QRcodeNorth.jpg" alt="404">
    </div>
    <div class="footer">footer</div>
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
  margin-top: 6vh;
  flex: 1;
  width: 94%;
  padding: 2vh;
}
</style>
