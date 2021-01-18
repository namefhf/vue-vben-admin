import{d as e,r as t,g as a,e as n,h as s,o as l,i as d,w as o,j as i,m as c}from"./index.54123aa3.js";import"./DownOutlined.28e2aa25.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./transButton.ab5a2809.js";import{a as r}from"./index.cca9fed1.js";import{_ as p}from"./index.286733da.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./usePageContext.4f40bde1.js";import{B as u,t as f}from"./data.da245b01.js";var m=e({components:{BasicTree:u,CollapseContainer:r,PageWrapper:p},setup(){const e=t(null),{createMessage:s}=a();function l(){const t=n(e);if(!t)throw new Error("tree is null!");return t}return{treeData:f,treeRef:e,handleLevel:function(e){l().filterByLevel(e)},handleSetCheckData:function(){l().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=l().getCheckedKeys();s.success(JSON.stringify(e))},handleSetSelectData:function(){l().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=l().getSelectedKeys();s.success(JSON.stringify(e))},handleSetExpandData:function(){l().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=l().getExpandedKeys();s.success(JSON.stringify(e))},appendNodeByKey:function(e=null){l().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){l().deleteNodeByKey(e)},updateNodeByKey:function(e){l().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=c("显示到第2级"),h=c("显示到第1级"),k=c("设置勾选数据"),j=c("获取勾选数据"),x=c("设置选中数据"),D=c("获取选中数据"),K=c("设置展开数据"),g=c("获取展开数据"),B={class:"mb-4"},S=c("添加根节点"),_=c("添加在parent3内添加节点"),b=c("删除parent3节点"),N=c("更新parent2节点");m.render=function(e,t,a,n,c,r){const p=s("a-button"),u=s("BasicTree"),f=s("CollapseContainer"),m=s("PageWrapper");return l(),d(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:o((()=>[i("div",y,[i(p,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:o((()=>[C])),_:1}),i(p,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:o((()=>[h])),_:1}),i(p,{onClick:e.handleSetCheckData,class:"mr-2"},{default:o((()=>[k])),_:1},8,["onClick"]),i(p,{onClick:e.handleGetCheckData,class:"mr-2"},{default:o((()=>[j])),_:1},8,["onClick"]),i(p,{onClick:e.handleSetSelectData,class:"mr-2"},{default:o((()=>[x])),_:1},8,["onClick"]),i(p,{onClick:e.handleGetSelectData,class:"mr-2"},{default:o((()=>[D])),_:1},8,["onClick"]),i(p,{onClick:e.handleSetExpandData,class:"mr-2"},{default:o((()=>[K])),_:1},8,["onClick"]),i(p,{onClick:e.handleGetExpandData,class:"mr-2"},{default:o((()=>[g])),_:1},8,["onClick"])]),i("div",B,[i(p,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:o((()=>[S])),_:1}),i(p,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:o((()=>[_])),_:1}),i(p,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:o((()=>[b])),_:1}),i(p,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:o((()=>[N])),_:1})]),i(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:o((()=>[i(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;