<template>
  <div class="con">
    <el-button @click="add_product">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="促销ID" prop="id" />
      <el-table-column label="产品名称" prop="productName" />
      <el-table-column label="产品ID" prop="productId" />
      <el-table-column label="会员ID" prop="memberId" />
      <el-table-column label="会员电话" prop="memberPhone" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="输入搜索内容" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)"
            >修改</el-button
          >
          <el-button size="small" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="Tips" width="30%">
      <el-form
        :model="logDate"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="产品名称" prop="productName">
          <el-input v-model="logDate.productName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="产品ID" prop="productId">
          <el-input v-model.number="logDate.productId" autocomplete="off" />
        </el-form-item>
        <el-form-item label="会员ID" prop="endDate">
          <el-input v-model="logDate.memberId" />
        </el-form-item>
        <el-form-item label="会员电话" prop="memberPhone">
          <el-input v-model="logDate.memberPhone" />
        </el-form-item>
        <el-form-item label="会员订阅时间" prop="subscribeTime">
          <el-date-picker
            v-model="logDate.subscribeTime"
            type="date"
            placeholder="选择时间"
            :default-value="new Date(2010, 9, 1)"
          />
          <!-- <el-input v-model="logDate.subscribeTime" /> -->
        </el-form-item>
        <el-form-item label="推送时间" prop="sendTime">
          <el-date-picker
            v-model="logDate.sendTime"
            type="date"
            placeholder="选择时间"
            :default-value="new Date(2010, 9, 1)"
          />
          <!-- <el-input v-model="logDate.sendTime" /> -->
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="submitForm(logDate)"
            >提交</el-button
          >
          <el-button @click="resetForm()">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, onMounted } from "vue";
import {
  promotions,
  get_promotionslog,
  delete_promotionslog,
  getOne_promotions_product,
  set_promotions_type,
  add_promotions_type,
} from "@/api/promotionslog";

const tableData = ref([]);

const ruleForm = reactive({
  current: 1,
  size: 10,
});

const dialogVisible = ref(false);
const search=ref({
	
})

const logDate = ref({
  id: 0,
  memberId: 0,
  memberPhone: "",
  productId: 0,
  productName: "",
  sendTime: "",
  subscribeTime: "",
});
const get_promotion = async () => {
  const data = await get_promotionslog(ruleForm);
  console.log(data);
  tableData.value = data.data.page.records;
};
const handleDelete = (row: promotions.add_log) => {
  try {
    delete_promotionslog(row);
    ElMessage.success("删除成功");
    get_promotion();
    get_promotion(); // 重新获取数据刷新界面
  } catch (error) {
    console.error(error);
    ElMessage.error("删除失败,请重试");
  }
};
const submitForm = async (row: promotions.add_log) => {
  if (row.id) {
    const data = await set_promotions_type(logDate.value);
      ElMessage.success("提交成功");
      dialogVisible.value = false;
      get_promotion();
  } else {
    const data = await add_promotions_type(logDate.value);
    ElMessage.success("提交成功");
    dialogVisible.value = false;
    get_promotion();
  }
};
const resetForm = () => {
  dialogVisible.value = false;
};
const add_product = () => {
  dialogVisible.value = true;
};

const data = delete_promotionslog(logDate.value);

//详情
const handleEdit = async (row: promotions.add_log) => {
  dialogVisible.value = true;
  const data = await getOne_promotions_product(row);
    logDate.value = data.data.help;
};

onMounted(() => {
  get_promotion();
});
</script>

<style scoped>
.con {
  width: 100vw;
}
</style>