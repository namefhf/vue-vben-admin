import{d as t,b5 as o,u as e,aW as r,N as a,aD as n,dx as s,h as i,o as u,i as d,w as l,j as m}from"./index.54123aa3.js";import{B as c}from"./index.8c16bfb6.js";import"./colors.71734b53.js";import"./isNumeric.2bec345d.js";import{B as p}from"./BugOutlined.eaf9a5e8.js";import"./index.8d91dadc.js";var f=t({name:"ErrorAction",components:{BugOutlined:p,Tooltip:o,Badge:c},setup(){const{t:t}=e(),{push:o}=r();return{t:t,getCount:a((()=>s.getErrorListCountState)),handleToErrorList:function(){o(n.ERROR_LOG_PAGE).then((()=>{s.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,a,n){const s=i("BugOutlined"),c=i("Badge"),p=i("Tooltip");return u(),d(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[m(c,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[m(s)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;