var a=Object.assign;import{dt as o,e,d as n,bw as t,r as i,a as s,aF as l,h as p,bD as r,a2 as d,o as u,i as m,w as c,j as g,m as f}from"./index.54123aa3.js";import"./DownOutlined.28e2aa25.js";import{A as b}from"./index.094c5fa2.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./isEqual.22ed12f4.js";import"./transButton.ab5a2809.js";import{_ as y}from"./index.286733da.js";import"./index.8d91dadc.js";import"./usePageContext.4f40bde1.js";function j(a){let n,t=document.body;if(Reflect.has(a,"target")||Reflect.has(a,"props")){const o=a;n=o.props||{},t=o.target||document.body}else n=a;const i=o(n);return[()=>{const a=e(t);a&&i.open(a)},()=>{i.close()}]}var L=n({components:{Loading:t,PageWrapper:y,[b.name]:b},setup(){const o=i(null),e=i(!1),n=s({absolute:!1,loading:!1,tip:"加载中..."}),[t,p]=j({tip:"加载中..."}),[r,d]=j({target:o,props:{tip:"加载中...",absolute:!0}});function u(a){n.absolute=a,n.loading=!0,setTimeout((()=>{n.loading=!1}),2e3)}return a({openCompFullLoading:function(){u(!1)},openFnFullLoading:function(){t(),setTimeout((()=>{p()}),2e3)},openFnWrapLoading:function(){r(),setTimeout((()=>{d()}),2e3)},openCompAbsolute:function(){u(!0)},wrapEl:o,loadingRef:e,openDirectiveLoading:function(){e.value=!0,setTimeout((()=>{e.value=!1}),2e3)}},l(n))}});const C=f("全屏 Loading"),k=f("容器内 Loading"),x=f("全屏 Loading"),F=f("容器内 Loading"),_=f(" 打开指令Loading ");L.render=function(a,o,e,n,t,i){const s=p("a-alert"),l=p("a-button"),f=p("Loading"),b=p("PageWrapper"),y=r("loading");return d((u(),m(b,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:c((()=>[g(s,{message:"组件方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:a.openCompFullLoading},{default:c((()=>[C])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:a.openCompAbsolute},{default:c((()=>[k])),_:1},8,["onClick"]),g(f,{loading:a.loading,absolute:a.absolute,tip:a.tip},null,8,["loading","absolute","tip"]),g(s,{message:"函数方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:a.openFnFullLoading},{default:c((()=>[x])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:a.openFnWrapLoading},{default:c((()=>[F])),_:1},8,["onClick"]),g(s,{message:"指令方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:a.openDirectiveLoading},{default:c((()=>[_])),_:1},8,["onClick"])])),_:1},512)),[[y,a.loadingRef]])};export default L;