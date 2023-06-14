<template>
	<div class="con">
		<el-button @click="add_product">新增</el-button>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="ID" />
			<el-table-column prop="productName" label="产品名称" />
			<el-table-column prop="memberPhone" label="型号" />
			<el-table-column align="right">
				<template #header>
					<el-input v-model="search" size="small" placeholder="输入搜索内容" />
				</template>
				<template #default="scope">
					<el-button size="small" @click="handleEdit(scope.row)">修改</el-button>
					<el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog v-model="dialogVisible" title="Tips" width="30%" @close="resetForm()">
			<el-form  :model="prodectDate" status-icon label-width="120px" class="demo-ruleForm">
				<el-form-item label="数量" prop="flashPromotionCount">
					<el-input v-model="prodectDate.memberPhone" />
				</el-form-item>
				<el-form-item label="产品" prop="flashPromotionId">
					<el-input v-model.number="prodectDate.productName" />
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button type="primary" @click="submitForm(prodectDate)">提交</el-button>
					<el-button @click="resetForm()">取消</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang='ts'>
	import {
		reactive,
		ref,
		onMounted
	} from "vue";
	import {
		promotions,
		get_promotions_type,
		set_promotions_type,
		sets_promotions_type,
		add_promotions_type,
		del_promotions_type

	} from "@/api/index";

	const tableData = ref([]);
	const dialogVisible = ref(false);
	const ruleForm = reactive({
		current: 1,
		size: 10,
	});

	const search = ref("")
	const add_product = () => {
		dialogVisible.value = true;
	};
	const prodectDate = ref({
		id: 0,
		memberPhone: "",
		productName: "",
	});

	const get_promotion = async () => {
		const data = await get_promotions_type(ruleForm);
		tableData.value = data.data.page.records;
	};

	const handleEdit = async (row: object) => {
		const data = await set_promotions_type(row.id);
			prodectDate.value = data.data.help;
			dialogVisible.value = true;
	};

	const resetForm = () => {
		dialogVisible.value = false;
	};
	const submitForm = async (row: object) => {
		if (row.id) {
			const data = await sets_promotions_type(prodectDate.value);
			console.log(data);
				ElMessage.success("提交成功");
				dialogVisible.value = false;
				get_promotion();
		} else {
			const data = await add_promotions_type(prodectDate.value);
				ElMessage.success("提交成功");
				dialogVisible.value = false;
				get_promotion();
		}
	};

	const handleDelete = (row: promotions.set_s) => {

		try {
			del_promotions_type(row.id);
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