import{d as e,g as t,h as i,o as n,i as a,w as o,j as s,m as l}from"./index.54123aa3.js";import"./DownOutlined.28e2aa25.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./index.3605ec93.js";import"./transButton.ab5a2809.js";import{a as r}from"./index.cca9fed1.js";import{_ as d}from"./index.286733da.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./usePageContext.4f40bde1.js";import{u as p}from"./useContextMenu.4b3b812a.js";var m=e({components:{CollapseContainer:r,PageWrapper:d},setup(){const[e]=p(),{createMessage:i}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=l("Right Click on me"),u=l("Right Click on me");m.render=function(e,t,l,r,d,p){const m=i("a-button"),b=i("CollapseContainer"),f=i("PageWrapper");return n(),a(f,{title:"右键菜单示例"},{default:o((()=>[s(b,{title:"Simple"},{default:o((()=>[s(m,{type:"primary",onContextmenu:e.handleContext},{default:o((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),s(b,{title:"Multiple",class:"mt-4"},{default:o((()=>[s(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:o((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;