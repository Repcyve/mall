import{d as h,r as p,a as z,o as N,c as M,b as e,w as a,E as S,e as j,f as q,g as m,h as d,i as k,j as O,k as _,l as P,m as A,n as G,p as H,q as J,s as K,t as L,_ as Q}from"./index-3449a19b.js";import{s as R}from"./el-message-7e94a6a9.js";/* empty css                       */import{g as W,d as X,a as Y,s as Z}from"./index-bc51e55b.js";const ee=f=>R.post("/mall/sms-flash-promotion/add",f),te={class:"con"},ae={class:"dialog-footer"},le=h({__name:"index",setup(f){const v=p([]),y=p(0),w=z({current:1,size:10}),n=p(!1),g=s=>{try{X(s),_.success("删除成功"),i()}catch(t){console.error(t),_.error("删除失败,请重试")}},D=async s=>{const t=await Y(s);n.value=!0,o.value=t.data.help},i=async()=>{const s=await W(w);v.value=s.data.page.records,y.value=s.data.page.total},o=p({title:"",status:0,endDate:"",startDate:""}),E=async s=>{s.id?await Z(o.value)&&(n.value=!1,_.success("提交成功"),i()):await ee(o.value)&&(n.value=!1,_.success("提交成功"),i())},C=()=>{n.value=!0},x=()=>{n.value=!1};return N(()=>{i()}),(s,t)=>{const r=S,u=P,b=A,F=j,B=G,c=H,I=J,V=K,T=L,U=q;return m(),M("div",te,[e(r,{onClick:C},{default:a(()=>[d("新增")]),_:1}),e(F,{data:v.value,stripe:"",style:{width:"100%"}},{default:a(()=>[e(u,{prop:"id",label:"促销ID"}),e(u,{prop:"status",label:"上下线状态"},{default:a(l=>[l.row.status>0?(m(),k(b,{key:0,effect:"plain"},{default:a(()=>[d(" 启用 ")]),_:1})):(m(),k(b,{key:1,effect:"plain",type:"success"},{default:a(()=>[d(" 禁用 ")]),_:1}))]),_:1}),e(u,{prop:"title",label:"促销名称"}),e(u,{prop:"startDate",label:"开始时间"}),e(u,{prop:"endDate",label:"结束时间"}),e(u,null,{default:a(l=>[e(r,{link:"",type:"primary",size:"small",onClick:$=>g(l.row)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"]),e(r,{link:"",type:"primary",size:"small",onClick:$=>D(l.row)},{default:a(()=>[d("修改")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(U,{modelValue:n.value,"onUpdate:modelValue":t[6]||(t[6]=l=>n.value=l),title:"Tips",width:"30%"},{footer:a(()=>[O("span",ae,[e(r,{type:"primary",onClick:t[4]||(t[4]=l=>E(o.value))},{default:a(()=>[d("提交")]),_:1}),e(r,{onClick:t[5]||(t[5]=l=>x())},{default:a(()=>[d("取消")]),_:1})])]),default:a(()=>[e(T,{model:o.value,"status-icon":"","label-width":"120px",class:"demo-ruleForm"},{default:a(()=>[e(c,{label:"促销名称"},{default:a(()=>[e(B,{modelValue:o.value.title,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value.title=l)},null,8,["modelValue"])]),_:1}),e(c,{label:"上下线状态"},{default:a(()=>[e(I,{modelValue:o.value.status,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value.status=l),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),e(c,{label:"开始时间"},{default:a(()=>[e(V,{modelValue:o.value.startDate,"onUpdate:modelValue":t[2]||(t[2]=l=>o.value.startDate=l),type:"date",placeholder:"选择时间","default-value":new Date(2023,6,1)},null,8,["modelValue","default-value"])]),_:1}),e(c,{label:"结束时间"},{default:a(()=>[e(V,{modelValue:o.value.endDate,"onUpdate:modelValue":t[3]||(t[3]=l=>o.value.endDate=l),type:"date",placeholder:"选择时间","default-value":new Date(2023,6,1)},null,8,["modelValue","default-value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});const ue=Q(le,[["__scopeId","data-v-3672e1dc"]]);export{ue as default};
