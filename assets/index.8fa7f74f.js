import{d as e,r as l,h as t,o as r,i as o,w as s,j as n,m as i,l as a}from"./index.54123aa3.js";import"./DownOutlined.28e2aa25.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./transButton.ab5a2809.js";import{a as c}from"./index.cca9fed1.js";import{_ as d}from"./index.286733da.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./usePageContext.4f40bde1.js";import{u}from"./useFullScreen.c7b8c404.js";var m=e({components:{CollapseContainer:c,PageWrapper:d},setup(){const e=l(null),{enterFullscreen:t,toggleFullscreen:r,isFullscreenRef:o,exitFullscreen:s}=u(),{toggleFullscreen:n}=u(e);return{enterFullscreen:t,toggleDom:n,toggleFullscreen:r,isFullscreenRef:o,exitFullscreen:s,domRef:e}}});const p=i(" Enter Window Full Screen "),f=i(" Toggle Window Full Screen "),g=i(" Exit Window Full Screen "),j=i(" Enter Dom Full Screen "),F={ref:"domRef",class:"w-1/2 h-64 flex justify-center rounded-md items-center bg-white mx-auto mt-10"},x=i(" Exit Dom Full Screen ");m.render=function(e,l,c,d,u,m){const C=t("a-button"),b=t("CollapseContainer"),w=t("PageWrapper");return r(),o(w,{title:"全屏示例"},{default:s((()=>[n(b,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Window Full Screen"},{default:s((()=>[n(C,{type:"primary",onClick:e.enterFullscreen,class:"mr-2"},{default:s((()=>[p])),_:1},8,["onClick"]),n(C,{color:"success",onClick:e.toggleFullscreen,class:"mr-2"},{default:s((()=>[f])),_:1},8,["onClick"]),n(C,{color:"error",onClick:e.exitFullscreen,class:"mr-2"},{default:s((()=>[g])),_:1},8,["onClick"]),i(" Current State: "+a(e.isFullscreenRef),1)])),_:1}),n(b,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Dom Full Screen"},{default:s((()=>[n(C,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:s((()=>[j])),_:1},8,["onClick"])])),_:1}),n("div",F,[n(C,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:s((()=>[x])),_:1},8,["onClick"])],512)])),_:1})};export default m;