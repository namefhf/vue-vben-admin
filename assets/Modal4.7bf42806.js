import{d as i,r as e,h as o,o as t,i as s,w as r,j as d,aH as a}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import{_ as n}from"./index.60aa2731.js";import"./index.094c5fa2.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./uuid.30dcc41c.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./util.6b8a7cec.js";import"./index.cca9fed1.js";import{_ as m,a as p}from"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import{u as c}from"./useForm.5cd0cf29.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=i({components:{BasicModal:m,BasicForm:n},setup(){const i=e({}),[o,{}]=c({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=p((e=>{i.value={field2:e.data,field1:e.info}}));return{register:t,schemas:j,registerForm:o,model:i}}});l.render=function(i,e,n,m,p,c){const j=o("BasicForm"),l=o("BasicModal");return t(),s(l,a(i.$attrs,{onRegister:i.register,title:"Modal Title"}),{default:r((()=>[d(j,{onRegister:i.registerForm,model:i.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default l;