<template>
	<div>
		<el-form label-width="100px" ref="ruleForm"  :model="logins"  :rules="rules" >
			<el-form-item label="账号" prop="parent_username">
				<el-input v-model="logins.parent_username" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="logins.password" placeholder="请输入密码"></el-input>
			</el-form-item>
		</el-form>
		<el-button @click="submitForm()">登录</el-button>
	</div>
</template>
<script  setup lang="ts">
	import { ref,reactive } from 'vue'
	import {signInPwd } from '@/request/api'
	const ruleForm=ref()
	const logins = ref({
		is_primary:'1',
		child_username:'',
        parent_username: 'TXG6242',
        password: 'dMTVHCPJ'
	})
	const rules=reactive({
		parent_username:[
			{
			  required: true, message: '请输入账号', trigger: 'blur' 
			}
		],
		password:[
			{
			  required: true, message: '请输入密码', trigger: 'blur' 
			}
		],

	})

	const submitForm=()=>{
		ruleForm.value.validate((valid:any) => {
          if (valid) {
			signInPwd(logins.value).then(res=>{
				console.log(res)
			})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
	}


	onMounted(() => {
		// console.log(ruleForm)
     })



</script>
<style>
	
</style>