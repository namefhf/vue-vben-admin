import{d as e,h as i,o as t,i as o,w as s,j as d,m as a}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./scrollTo.c9242ea7.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import"./index.60aa2731.js";import"./index.094c5fa2.js";import"./index.c8ee31bf.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./uuid.30dcc41c.js";import{_ as r}from"./index.96f919e2.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.ecc4099c.js";import"./zh_CN.8094f4d6.js";import"./useSortable.1f634a4b.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./CaretDownFilled.662e33ec.js";import"./transButton.ab5a2809.js";import"./util.6b8a7cec.js";import"./index.cca9fed1.js";import{_ as m}from"./index.286733da.js";import"./CheckOutlined.826dcd76.js";import"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./SettingOutlined.b33037cf.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import"./useForm.5cd0cf29.js";import"./clickOutside.d8159c59.js";import"./useExpose.89ec940e.js";import"./index.fb122384.js";import{c as n,d as p,j as c}from"./data.6be239b9.js";import"./usePageContext.4f40bde1.js";var j=e({components:{BasicTable:r,PageWrapper:m},setup:()=>({defaultHeader:function(){c({data:p,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){c({data:p,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:n,data:p})});const l=a("导出：默认头部"),f=a("导出：自定义头部");j.render=function(e,a,r,m,n,p){const c=i("a-button"),j=i("BasicTable"),u=i("PageWrapper");return t(),o(u,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:s((()=>[d(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:s((()=>[d(c,{onClick:e.defaultHeader},{default:s((()=>[l])),_:1},8,["onClick"]),d(c,{onClick:e.customHeader},{default:s((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default j;