import{d as e,r as a,e as t,g as o,h as i,o as s,i as r,w as n,j as p,m as d}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./DownOutlined.28e2aa25.js";import{I as l}from"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./transButton.ab5a2809.js";import{a as m}from"./index.cca9fed1.js";import{_ as u}from"./index.286733da.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./usePageContext.4f40bde1.js";import{u as c}from"./useCopyToClipboard.44b4bf05.js";var f=e({name:"Copy",components:{CollapseContainer:m,PageWrapper:u,[l.name]:l},setup(){const e=a(""),{createMessage:i}=o(),{clipboardRef:s,copiedRef:r}=c();return{handleCopy:function(){const a=t(e);a?(s.value=a,t(r)&&i.warning("copy success！")):i.warning("请输入要拷贝的内容！")},value:e}}});const j={class:"flex justify-center"},b=d("Copy");f.render=function(e,a,t,o,d,l){const m=i("a-input"),u=i("a-button"),c=i("CollapseContainer"),f=i("PageWrapper");return s(),r(f,{title:"文本复制示例"},{default:n((()=>[p(c,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",j,[p(m,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),p(u,{type:"primary",onClick:e.handleCopy},{default:n((()=>[b])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default f;