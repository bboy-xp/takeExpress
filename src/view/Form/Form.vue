<template>
  <div class="formContent">
    <div class="form">
      <div class="title">选择取件地址</div>
      <el-select v-model="position" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.value"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="title">手机号</div>
      <el-input v-model="phoneNumber" type="number" placeholder="请输入手机号"></el-input>
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
          value: "游泳馆"
        },
        {
          value: "校医院"
        },
        {
          value: "工程学院"
        },
        {
          value: "电信学院"
        },
        {
          value: "水利学院"
        },
        {
          value: "动医学院"
        },
        {
          value: "园艺学院"
        },
        {
          value: "老图书馆"
        },
        {
          value: "化学馆"
        },
        {
          value: "农学院"
        },
        {
          value: "艺术学院"
        },
        {
          value: "音乐厅"
        },
        {
          value: "主楼"
        },
        {
          value: "新图书馆"
        },
        {
          value: "食品学院"
        },
        {
          value: "实验楼"
        },
        {
          value: "教学楼"
        },
        {
          value: "动科学院"
        },
        {
          value: "动物医院"
        },
        {
          value: "研楼"
        },
        {
          value: "创客中心"
        },
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
          value: "新艺楼"
        },
        {
          value: "成栋楼"
        }
      ],
      position: "",
      phoneNumber: ""
    };
  },
  mounted() {
    if (localStorage.getItem("position")) {
      this.position = localStorage.getItem("position");
    }
    if (localStorage.getItem("phoneNumber")) {
      this.phoneNumber = localStorage.getItem("phoneNumber");
    }
  },
  methods: {
    async submit() {
      console.log(this.position, this.phoneNumber);
      localStorage.setItem("position", this.position);
      localStorage.setItem("phoneNumber", this.phoneNumber);

      //发送请求
      const data = {
        position: this.position,
        phoneNumber: this.phoneNumber,
      }
      const postUserdata = await axios.post("/postUserdata",data);

      if(this.position === "南一寝室楼" || this.position === "南二寝室楼" || this.position === "南三寝室楼" || this.position === "南四寝室楼" || this.position === "南五寝室楼" || this.position === "南一寝室楼" || this.position === "南六寝室楼" || this.position === "南七寝室楼" || this.position === "南八寝室楼" || this.position === "南九寝室楼" || this.position === "南十寝室楼" || this.position === "南十一寝室楼" || this.position === "南十二寝室楼" || this.position === "游泳馆" || this.position === "校医院" || this.position === "工程学院" || this.position === "电信学院" || this.position === "水利学院" || this.position === "动医学院" || this.position === "园艺学院" || this.position === "老图书馆" || this.position === "化学馆" || this.position === "农学院" || this.position === "艺术学院" || this.position === "音乐厅" || this.position === "主楼" ) {
        this.$router.push("/successSouth");
      }else {
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
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.submitBtn {
  height: 10vh;
}
</style>

