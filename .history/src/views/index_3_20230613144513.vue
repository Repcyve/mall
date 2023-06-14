<template>
  <div class="con">
    <el-button @click="add_product">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="ID" prop="id" />
      <el-table-column prop="flashPromotionPrice" label="限制" />
      <el-table-column prop="flashPromotionPrice" label="价格" />
      <el-table-column prop="sort" label="排序" />
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

    <el-dialog v-model="dialogVisible" title="Tips" width="30%"  @close="resetForm()">
      <el-form
        :model="prodectDate"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="限时购数量" prop="flashPromotionCount">
          <el-input v-model="prodectDate.flashPromotionCount" />
        </el-form-item>
        <el-form-item label="flashPromotionId" prop="flashPromotionId">
          <el-input v-model.number="prodectDate.flashPromotionId" />
        </el-form-item>
        <el-form-item label="每人限购数量" prop="flashPromotionLimit">
          <el-input v-model="prodectDate.flashPromotionLimit" />
        </el-form-item>
        <el-form-item label="限时购价格" prop="flashPromotionPrice">
          <el-input v-model="prodectDate.flashPromotionPrice" />
        </el-form-item>
        <el-form-item label="编号" prop="flashPromotionSessionId">
          <el-input v-model="prodectDate.flashPromotionSessionId" />
        </el-form-item>
        <el-form-item label="productId" prop="productId">
          <el-input v-model="prodectDate.productId" />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="prodectDate.sort" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="submitForm(prodectDate)"
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
  get_promotions_product,
  delete_promotions_product,
  getOne_promotions_product,
  add_promotions_product,
  edit_promotions_product,
} from "@/api/product";

const tableData = ref([]);
const prodectDate = ref({
  id: 0,
  productId: 0,
  flashPromotionSessionId: 0,
  flashPromotionPrice: 0,
  flashPromotionLimit: 0,
  flashPromotionId: 0,
  flashPromotionCount: 0,
  sort: 0,
  productName: "",
  sendTime: "",
  subscribeTime: "",
});
const search =ref("")
const ruleForm = reactive({
  current: 1,
  size: 10,
});
const dialogVisible = ref(false);

const get_promotion = async () => {
  const data = await get_promotions_product(ruleForm);
  tableData.value = data.data.page.records;
};
const handleEdit = async (row: add_product.add_product) => {
  const data = await getOne_promotions_product(row);
  if (data) {
    prodectDate.value = data.data.help;
    dialogVisible.value = true;
  }

  console.log(data);
};


const resetForm = () => {
  dialogVisible.value = false;
};

const submitForm =async (row: object) => {
  if (row.id) {
    const data =await edit_promotions_product(prodectDate.value);
	console.log(data)
    if (data.code == 1) {
      ElMessage.success("提交成功");
      dialogVisible.value = false;
      get_promotion();
    }
  } else {
    const data =await add_promotions_product(prodectDate.value);
    if (data.code) {
      ElMessage.success("提交成功");
      dialogVisible.value = false;
      get_promotion();
    }
  }
};
const add_product = () => {
  dialogVisible.value = true;
};


const handleDelete = (row: promotions.add_log) => {
  
  try {
    delete_promotions_product(row);
    ElMessage.success("删除成功");
    get_promotion(); // 重新获取数据刷新界面
  } catch (error) {
    console.error(error);
    ElMessage.error("删除失败,请重试");
  }
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