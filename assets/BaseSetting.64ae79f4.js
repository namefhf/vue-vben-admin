import{cV as a,d as s,a3 as t,aN as e,aa as i,g as o,cr as r,cs as d,h as n,o as c,i as m,bz as p,j as l,m as j}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import{_ as u}from"./index.60aa2731.js";import"./index.094c5fa2.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import{U as f}from"./uuid.30dcc41c.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import{R as b,C as x}from"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./util.6b8a7cec.js";import{a as h}from"./index.cca9fed1.js";import"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import{h as g}from"./header.3041aac3.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import{u as O}from"./useForm.5cd0cf29.js";import{b as _}from"./data.a32591d5.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var v=s({components:{BasicForm:u,CollapseContainer:h,Button:t,Upload:f,Icon:e,[b.name]:b,[x.name]:x},setup(){const{createMessage:s}=o(),[t,{setFieldsValue:e}]=O({labelWidth:120,schemas:_,showActionButtonGroup:!1});return i((async()=>{const s=await a.request({url:C.ACCOUNT_INFO,method:"GET"});e(s)})),{headerImg:g,register:t,handleSubmit:()=>{s.success("更新成功！")}}}});const I=p("data-v-756d276a");r("data-v-756d276a");const w={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),F=j("更换头像 "),U=j("更新基本信息");d();const A=I(((a,s,t,e,i,o)=>{const r=n("BasicForm"),d=n("a-col"),p=n("Icon"),j=n("Button"),u=n("Upload"),f=n("a-row"),b=n("CollapseContainer");return c(),m(b,{title:"基本设置",canExpan:!1},{default:I((()=>[l(f,{gutter:24},{default:I((()=>[l(d,{span:14},{default:I((()=>[l(r,{onRegister:a.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:I((()=>[l("div",w,[y,l("img",{width:"140",src:a.headerImg},null,8,["src"]),l(u,{showUploadList:!1},{default:I((()=>[l(j,{type:"ghost",class:"ml-5"},{default:I((()=>[l(p,{icon:"feather:upload"}),F])),_:1})])),_:1})])])),_:1})])),_:1}),l(j,{type:"primary",onClick:a.handleSubmit},{default:I((()=>[U])),_:1},8,["onClick"])])),_:1})}));v.render=A,v.__scopeId="data-v-756d276a";export default v;