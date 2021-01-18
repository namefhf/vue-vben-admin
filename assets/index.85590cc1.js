import{d as e,h as o,o as i,i as t,w as r,j as s,m as a}from"./index.54123aa3.js";import"./SearchOutlined.d42bf9f8.js";import"./index.9a2fc594.js";import"./DownOutlined.28e2aa25.js";import"./CheckOutlined.16a6041f.js";import"./index.5008765b.js";import"./EyeOutlined.df4464e5.js";import"./index.60aa2731.js";import{A as d}from"./index.094c5fa2.js";import"./index.c8ee31bf.js";import"./colors.71734b53.js";import"./index.d0aca5b6.js";import"./RightOutlined.96f5ad95.js";import"./index.a87352aa.js";import"./types.77d8ad57.js";import"./toInteger.036ba60c.js";import"./uuid.30dcc41c.js";import"./findIndex.659f0f1e.js";import"./_stringToArray.f5365b26.js";import"./domUtils.3cd1db27.js";import"./isEqual.22ed12f4.js";import"./_baseProperty.74f89655.js";import"./index.bb8a55bd.js";import"./index.328dcb33.js";import"./UpOutlined.a9412b7a.js";import"./LeftOutlined.e0a0c2d3.js";import"./index.1e06123c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7edf620b.js";import"./index.5084890e.js";import"./index.ecc7dd3a.js";import"./index.3605ec93.js";import"./index.1f6e6cd5.js";import"./index.661da0f6.js";import"./index.8accc11b.js";import"./index.84a72428.js";import"./transButton.ab5a2809.js";import"./util.6b8a7cec.js";import"./index.cca9fed1.js";import{_ as n}from"./index.286733da.js";import{b as p}from"./index.6a32a31c.js";import"./FullscreenOutlined.cd845ff2.js";import"./RightOutlined.af02c6ad.js";import"./useTimeout.ca2e13b2.js";import"./index.a6cb21ae.js";import"./index.8d91dadc.js";import"./animation.f5cd7d5f.js";import"./useScrollTo.ad781bf0.js";import"./useAttrs.a513da6b.js";import"./useWindowSizeFn.31b4c501.js";import"./download.64b4bcd9.js";import"./useForm.5cd0cf29.js";import"./usePageContext.4f40bde1.js";import m from"./Modal1.3a927245.js";import l from"./Modal2.29049bfb.js";import c from"./Modal3.0b728179.js";import j from"./Modal4.7bf42806.js";var f=e({components:{Alert:d,Modal1:m,Modal2:l,Modal3:c,Modal4:j,PageWrapper:n},setup(){const[e,{openModal:o,setModalProps:i}]=p(),[t,{openModal:r}]=p(),[s,{openModal:a}]=p(),[d,{openModal:n}]=p();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:a,register4:d,openModal4:n,send:function(){n(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a("打开弹窗 默认可以拖动/全屏"),b=a("打开弹窗"),g=a("打开弹窗"),x=a("打开弹窗并传递数据");f.render=function(e,a,d,n,p,m){const l=o("Alert"),c=o("a-button"),j=o("Modal1"),f=o("Modal2"),M=o("Modal3"),y=o("Modal4"),R=o("PageWrapper");return i(),t(R,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[x])),_:1},8,["onClick"]),s(j,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(M,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default f;