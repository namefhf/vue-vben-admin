import{a9 as t,d as e,C as a,G as n,N as r,aG as o,j as i,F as l}from"./index.54123aa3.js";function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u=t(e({name:"ADivider",props:{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"}},setup:function(t,e){var u=e.slots,s=a("configProvider",n).getPrefixCls,d=r((function(){return s("divider",t.prefixCls)})),f=r((function(){var e,a=t.type,n=t.dashed,r=t.orientation,o=r.length>0?"-"+r:r,i=d.value;return c(e={},i,!0),c(e,"".concat(i,"-").concat(a),!0),c(e,"".concat(i,"-with-text").concat(o),u.default),c(e,"".concat(i,"-dashed"),!!n),e}));return function(){var t,e,a=o(null===(t=u.default)||void 0===t?void 0:t.call(u));return i("div",{class:f.value,role:"separator"},[a.length?i("span",{class:"".concat(d.value,"-inner-text")},(e=a,"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!l(e)?a:{default:function(){return[a]}})):null])}}}));export{u as D};