<template>
  <div class="formContent">
    <div class="title">邮寄快递</div>
    <div class="form">
      <div class="tableContent1">
      <div class="formTitle">
        <img class="positionImg" src="../../assets/img/position.png" alt="404">
        <sapn>选择取件地址</sapn>
      </div>
      <el-select v-model="position" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.value"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
      <div class="tableContent2">
        <div class="formTitle">
          <img class="phoneImg" src="../../assets/img/phone.png" alt="404">
          <span>手机号</span>
        </div>
        <el-input v-model="phoneNumber" type="number" placeholder="请输入手机号"></el-input>
      </div>
    </div>
    <el-button class="submitBtn" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      options: [
        {
          value: "北一寝室楼"
        },
        {
          value: "北二寝室楼"
        },
        {
          value: "北三寝室楼"
        },
        {
          value: "北四寝室楼"
        },
        {
          value: "北五寝室楼"
        },
        {
          value: "北六寝室楼"
        },
        {
          value: "北七寝室楼"
        },
        {
          value: "北八寝室楼"
        },
        {
          value: "北九寝室楼"
        },
        {
          value: "北十寝室楼"
        },
        {
          value: "北区其他"
        },
        {
          value: "南一寝室楼"
        },
        {
          value: "南二寝室楼"
        },
        {
          value: "南三寝室楼"
        },
        {
          value: "南四寝室楼"
        },
        {
          value: "南五寝室楼"
        },
        {
          value: "南六寝室楼"
        },
        {
          value: "南七寝室楼"
        },
        {
          value: "南八寝室楼"
        },
        {
          value: "南九寝室楼"
        },
        {
          value: "南十寝室楼"
        },
        {
          value: "南十一寝室楼"
        },
        {
          value: "南十二寝室楼"
        },
        {
          value: "南区其他"
        }
      ],
      position: "",
      phoneNumber: ""
    };
  },
  mounted() {
    document.title = "代取快递";
    if (localStorage.getItem("position")) {
      this.position = localStorage.getItem("position");
    }
    if (localStorage.getItem("phoneNumber")) {
      this.phoneNumber = localStorage.getItem("phoneNumber");
    }
  },
  methods: {
    async submit() {
      localStorage.setItem("position", this.position);
      localStorage.setItem("phoneNumber", this.phoneNumber);

      //发送请求
      const data = {
        position: this.position,
        phoneNumber: this.phoneNumber
      };
      const postUserdata = await axios.post("/postUserdata", data);

      if (
        this.position === "南一寝室楼" ||
        this.position === "南二寝室楼" ||
        this.position === "南三寝室楼" ||
        this.position === "南四寝室楼" ||
        this.position === "南五寝室楼" ||
        this.position === "南六寝室楼" ||
        this.position === "南七寝室楼" ||
        this.position === "南八寝室楼" ||
        this.position === "南九寝室楼" ||
        this.position === "南十寝室楼" ||
        this.position === "南十一寝室楼" ||
        this.position === "南十二寝室楼" ||
        this.position === "南区其他"
      ) {
        this.$message({
          message: "恭喜你，提交成功",
          type: "success"
        });
        this.$router.push("/successSouth");
      } else {
        this.$message({
          message: "恭喜你，提交成功",
          type: "success"
        });
        this.$router.push("/successNorth");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  /* -webkit-overflow-scrolling: touch; */
}
.formContent {
  height: 340px;
  width: 96vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 2vw;
}
.submitBtn {
  height: 50px;
  font-size: 17px;
}
.title {
  font-size: 40px;
  margin: 0 auto;
  padding: 2vh;
}
.tableContent1 {
  margin-bottom: 2vh;
}
.tableContent2 {
  margin-bottom: 3vh;
}
.formTitle {
  font-size: 22px;
  margin-bottom: 2vh;
}
.positionImg {
  height: 30px;
  width: 30px;
  margin-bottom: -1vh;
}
.phoneImg {
  height: 30px;
  width: 30px;
  margin-bottom: -1vh;
}
</style>

