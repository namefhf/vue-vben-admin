import{d as i,h as e,o as t,i as s,w as o,j as r,aH as d}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import{_ as a}from"./index.60aa2731.js";import"./index.094c5fa2.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./uuid.30dcc41c.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./util.6b8a7cec.js";import"./index.7b7f0ce9.js";import"./index.cca9fed1.js";import{_ as n,a as p}from"./index.a0d1589f.js";import"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import{u as m}from"./useForm.5cd0cf29.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=i({components:{BasicDrawer:n,BasicForm:a},setup(){const[i,{setFieldsValue:e}]=m({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=p((i=>{e({field2:i.data,field1:i.info})}));return{register:t,schemas:c,registerForm:i}}});j.render=function(i,a,n,p,m,c){const j=e("BasicForm"),l=e("BasicDrawer");return t(),s(l,d(i.$attrs,{onRegister:i.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[r("div",null,[r(j,{onRegister:i.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default j;