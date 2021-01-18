import{d as e,bf as s,bK as a,dC as o,dD as t,cr as r,cs as i,h as d,bD as n,o as c,i as m,bz as l,j as u,l as p,k as f,a2 as _,m as x}from"./index.54123aa3.js";import"./DownOutlined.28e2aa25.js";import{A as j}from"./index.094c5fa2.js";import"./index.c8ee31bf.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./isEqual.22ed12f4.js";import{D as y}from"./index.3605ec93.js";import"./transButton.ab5a2809.js";import{_ as P}from"./index.286733da.js";import"./index.8d91dadc.js";import"./usePageContext.4f40bde1.js";import h from"./CurrentPermissionMode.ec7a7edd.js";import{_ as b}from"./index.19d7a40c.js";var C=e({components:{Alert:j,PageWrapper:P,CurrentPermissionMode:h,Divider:y,Authority:b},setup(){const{hasPermission:e}=o();async function r(e){const a=await t({userId:e});s.commitPermCodeListState(a)}return r("1"),{hasPermission:e,permissionStore:s,changePermissionCode:r,PermissionModeEnum:a}}});const g=l("data-v-beeadad6");r("data-v-beeadad6");const v=x(" 当前拥有的code列表: "),k=x(" 点击切换按钮权限(用户id为2) "),D=x(" 点击切换按钮权限(用户id为1,默认) "),A=x("组件方式判断权限"),w=x("拥有code ['1000']权限可见"),M=x("拥有code ['2000']权限可见"),S=x("拥有code ['1000','2000']角色权限可见"),I=x("函数方式方式判断权限"),B=x(" 拥有code ['1000']权限可见 "),E=x(" 拥有code ['2000']权限可见 "),L=x(" 拥有code ['1000','2000']角色权限可见 "),O=x("指令方式方式判断权限(该方式不能动态修改权限.)"),W=x(" 拥有code ['1000']权限可见 "),q=x(" 拥有code ['2000']权限可见 "),z=x(" 拥有code ['1000','2000']角色权限可见 ");i();const K=g(((e,s,a,o,t,r)=>{const i=d("Alert"),l=d("CurrentPermissionMode"),x=d("Divider"),j=d("a-button"),y=d("Authority"),P=d("PageWrapper"),h=n("auth");return c(),m(P,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:g((()=>[u(i,{message:"刷新后会还原","show-icon":""}),u(l),u("p",null,[v,u("a",null,p(e.permissionStore.getPermCodeListState),1)]),u(x),u(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(x),u(j,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:g((()=>[k])),_:1}),u(j,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:g((()=>[D])),_:1}),u(x,null,{default:g((()=>[A])),_:1}),u(y,{value:"1000"},{default:g((()=>[u(j,{type:"primary",class:"mx-4"},{default:g((()=>[w])),_:1})])),_:1}),u(y,{value:"2000"},{default:g((()=>[u(j,{color:"success",class:"mx-4"},{default:g((()=>[M])),_:1})])),_:1}),u(y,{value:["1000","2000"]},{default:g((()=>[u(j,{color:"error",class:"mx-4"},{default:g((()=>[S])),_:1})])),_:1}),u(x,null,{default:g((()=>[I])),_:1}),e.hasPermission("1000")?(c(),m(j,{key:0,type:"primary",class:"mx-4"},{default:g((()=>[B])),_:1})):f("",!0),e.hasPermission("2000")?(c(),m(j,{key:1,color:"success",class:"mx-4"},{default:g((()=>[E])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),m(j,{key:2,color:"error",class:"mx-4"},{default:g((()=>[L])),_:1})):f("",!0),u(x,null,{default:g((()=>[O])),_:1}),_(u(j,{type:"primary",class:"mx-4"},{default:g((()=>[W])),_:1},512),[[h,"1000"]]),_(u(j,{color:"success",class:"mx-4"},{default:g((()=>[q])),_:1},512),[[h,"2000"]]),_(u(j,{color:"error",class:"mx-4"},{default:g((()=>[z])),_:1},512),[[h,["1000","2000"]]])])),_:1})}));C.render=K,C.__scopeId="data-v-beeadad6";export default C;