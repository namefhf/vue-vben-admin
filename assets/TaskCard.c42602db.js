import{d as s,N as a,cr as t,cs as e,h as r,o as n,i as o,j as c,l as i,bz as p,m as l}from"./index.54123aa3.js";import"./CheckOutlined.16a6041f.js";import{A as f}from"./index.c8ee31bf.js";import"./types.77d8ad57.js";import{P as d}from"./index.8accc11b.js";var x=s({name:"GrowCard",components:{Progress:d,Avatar:f},props:{info:{type:Object,default:null}},setup:s=>({prefixCls:"task-card",text:a((()=>{const{status:a}=s.info||{};return"active"===a?"进度正常":"exception"===a?"进度滞后":"项目完成"}))})});const u=p("data-v-43ac58a2");t("data-v-43ac58a2");const m=c("span",null,"进度",-1),v=l(" 更新日期: "),_=l("+3");e();const C=u(((s,a,t,e,p,l)=>{const f=r("Progress"),d=r("Avatar");return n(),o("div",{class:s.prefixCls},[c("div",{class:`${s.prefixCls}-header`},[c("div",{class:`${s.prefixCls}__info`},[c("span",{class:`${s.prefixCls}__title`},i(s.info.title),3),c("span",{class:`${s.prefixCls}__desc`},i(s.info.desc),3)],2),c("span",{class:`${s.prefixCls}__tag ${s.info.status}`},i(s.info.text),3)],2),c("div",{class:`${s.prefixCls}-body mt-5`},[c("div",{class:`${s.prefixCls}__process-nfo`},[m,c("span",null,i(s.info.percent)+"%",1)],2),c(f,{percent:s.info.percent,showInfo:!1,status:s.info.status},null,8,["percent","status"])],2),c("div",{class:`${s.prefixCls}-footer`},[c("span",{class:`${s.prefixCls}__date`},[v,c("span",null,i(s.info.updateTime),1)],2),c("div",{class:`${s.prefixCls}__avatar`},[c(d,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),c(d,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),c(d,null,{default:u((()=>[_])),_:1})],2)],2)],2)}));x.render=C,x.__scopeId="data-v-43ac58a2";export default x;