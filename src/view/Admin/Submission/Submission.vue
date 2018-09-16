<template>
  <div class="submissionContent">
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">已提交订单</el-menu-item>
        <el-menu-item @click="gotoTaken" index="2">已取订单</el-menu-item>
      </el-menu>
    </div>
    
    <div class="tableContent">
      <div>
        <el-select @change="targetOrder" v-model="position" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button class="showAllOrders" type="primary" @click="allOrders">显示全部订单</el-button>
      </div>
      <div class="tableBody">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="position"
            label="地址"
            width="90">
          </el-table-column>
          <el-table-column
            prop="phoneNumber"
            label="电话"
            width="110">
            <template slot-scope="scope">
              <a :href="'tel:' + scope.row.phoneNumber">{{scope.row.phoneNumber}}</a>
            </template>
          </el-table-column>
          <el-table-column
            prop="createdAt"
            label="提交时间"
            width="108">
          </el-table-column>
          <el-table-column
            label="操作"
            width="">
            <template slot-scope="scope">
                <div class="btnContent">
                  <div class="editBtn" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-check"></i><span class="text-margin">已取</span></div>
                </div>
              </template>
          </el-table-column>
        </el-table>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeIndex: "1",
      tableData: [],
      position: "",
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
    };
  },
  async mounted() {
    document.title = "代取快递后台";

    const getOrders = await axios.get("/getSubmissionOrders");
    // console.log(getOrders.data);
    this.tableData = getOrders.data;
  },
  methods: {
    gotoTaken() {
      this.$router.replace("/admin/taken");
    },
    handleEdit(index, row) {
      const _id = row._id;
      this.$confirm("此操作将修改该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(async () => {
          const result = await axios.post("/changeTaken", { _id: _id });

          this.tableData = result.data;

          this.$message({
            type: "success",
            message: "修改成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改"
          });
        });
    },
    async targetOrder() {
      const data = {
        position: this.position
      };
      const getTargetOrders = await axios.post(
        "/submissionGetTargetOrders",
        data
      );
      this.tableData = getTargetOrders.data;
    },
    async allOrders() {
      const getTakenOrders = await axios.get("/getSubmissionOrders");
      this.tableData = getTakenOrders.data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submissionContent {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.nav {
  margin-bottom: 2vh;
}
.tableContent {
  flex: 1;
  overflow: scroll;
}
.btnContent {
  display: flex;
}
.editBtn {
  height: 24px;
  width: 50px;
  border: 1px solid #f35842;
  color: #f35842;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.showAllOrders {
}
</style>
