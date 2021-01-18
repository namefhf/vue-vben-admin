import{d as e,r as i,g as t,e as o,h as s,o as n,i as a,j as c,w as l,m as r}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./scrollTo.c9242ea7.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import"./index.60aa2731.js";import"./index.094c5fa2.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./uuid.30dcc41c.js";import{_ as d}from"./index.96f919e2.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.ecc4099c.js";import"./zh_CN.8094f4d6.js";import"./useSortable.1f634a4b.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./CaretDownFilled.662e33ec.js";import"./transButton.ab5a2809.js";import"./util.6b8a7cec.js";import"./index.cca9fed1.js";import"./CheckOutlined.826dcd76.js";import"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./SettingOutlined.b33037cf.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import"./useForm.5cd0cf29.js";import"./clickOutside.d8159c59.js";import"./useExpose.89ec940e.js";import{getBasicColumns as m,getBasicShortColumns as p}from"./tableData.7aa0192c.js";import{d as f}from"./table.c708603f.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:f,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(p())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),S=r("跳转到第2页"),R={class:"mb-4"},_=r("获取选中行"),h=r("获取选中行Key"),y=r("设置选中行"),O=r("清空选中行"),T=r("获取分页信息");u.render=function(e,i,t,o,r,d){const m=s("a-button"),p=s("BasicTable");return n(),a("div",j,[c("div",b,[c(m,{class:"mr-2",onClick:e.reloadTable},{default:l((()=>[C])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeLoading},{default:l((()=>[g])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeColumns},{default:l((()=>[x])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getColumn},{default:l((()=>[k])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getTableData},{default:l((()=>[w])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:l((()=>[S])),_:1},8,["onClick"])]),c("div",R,[c(m,{class:"mr-2",onClick:e.getSelectRowList},{default:l((()=>[_])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:l((()=>[h])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:l((()=>[y])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.clearSelect},{default:l((()=>[O])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getPagination},{default:l((()=>[T])),_:1},8,["onClick"])]),c(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;