<template>
  <div class="con">
	<el-button @click="add_product">新增</el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="促销ID" />
      <el-table-column prop="status" label="上下线状态">
      <template v-slot="slotProps">
            <el-tag effect="plain" v-if="slotProps.row.status > 0">
              启用
            </el-tag>
            <el-tag effect="plain" type="success" v-else>
              禁用
            </el-tag>
          </template>
      </el-table-column>
      <el-table-column prop="title" label="促销名称" />
      <el-table-column prop="startDate" label="开始时间" />
      <el-table-column prop="endDate" label="结束时间" />
      <el-table-column>
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row)"
            >删除</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="editInfo(scope.row)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="fenye">
      <MyPagination
        @change-page="changePage"
        :pagesize="ruleForm.size"
        :total="total"
        :page="ruleForm.current"
      />
    </div> -->
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
    >
      <el-form
        :model="addDate"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="促销名称" >
          <el-input v-model="addDate.title"  />
        </el-form-item>
        <el-form-item label="上下线状态">
          <el-switch
            v-model="addDate.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
          />
          <!-- <el-input v-model="addDate.status" /> -->
        </el-form-item>
        <el-form-item label="开始时间">
			<el-date-picker
			  v-model="addDate.startDate"
			  type="date"
			  placeholder="选择时间"
			  :default-value="new Date(2023, 6, 1)"
			/>
        </el-form-item>
        <el-form-item label="结束时间">
			<el-date-picker
			  v-model="addDate.endDate"
			  type="date"
			  placeholder="选择时间"
			  :default-value="new Date(2023, 6, 1)"
			/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
		  <el-button type="primary" @click="submitForm(addDate)"
            >提交</el-button
          >
          <el-button @click="resetForm()">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang='ts'>
// import MyPagination from "@/components/pagination.vue";
import type { FormInstance, FormRules } from "element-plus";
import { reactive, ref, onMounted } from "vue";
import {
  promotions,
  get_promotions,
  delete_promotions1,
  getOne_promotionslog,
  set_promotions,
} from "@/api/index";
import { add, add_promotions1, } from "@/api/add";

const tableData = ref([]);
const total = ref(0);
const ruleForm = reactive({
  current: 1,
  size: 10,
});
const dialogVisible = ref(false);
const changePage = (page: number) => {
  ruleForm.current = page;
  get_promotion();
};
const handleClick = (row: add) => {
  try {
    delete_promotions1(row);
    ElMessage.success("删除成功");
    
    get_promotion(); // 重新获取数据刷新界面
  } catch (error) {
    console.error(error);
    ElMessage.error("删除失败,请重试");
  }
};
const editInfo = async (row: add) => {
  const data = await getOne_promotionslog(row);
  dialogVisible.value = true;
  addDate.value = data.data.help;
};



const get_promotion = async () => {
  const data = await get_promotions(ruleForm);
  tableData.value = data.data.page.records;
  total.value = data.data.page.total;
};



const  addDate = ref({
  title: "",
  status:0,
  endDate: "",
  startDate: "",
});

const submitForm = async (row: promotions.add) => {
  if (row.id) {
	// 改
    const data = await set_promotions(addDate.value);
	if(data){
		dialogVisible.value=false
		ElMessage.success("提交成功");
		get_promotion();

	}

  } else {
	// 增
    const data = await add_promotions1(addDate.value);
	if(data){
		dialogVisible.value=false
		ElMessage.success("提交成功");
		get_promotion();

	}

  }
};

const add_product=()=>{
	dialogVisible.value=true
}

const resetForm = () => {
  dialogVisible.value = false;
};
onMounted(() => {
  get_promotion();
});
</script>

<style scoped>
.con {
  width: 100vw;
}

.fenye {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>