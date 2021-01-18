import{d as t,P as a,M as e,C as r,G as s,x as i,R as n,j as o,F as c,a9 as l}from"./index.54123aa3.js";function f(){return(f=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function d(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function h(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!c(t)}var u=l(t({name:"AAvatar",props:{prefixCls:a.string,shape:a.oneOf(e("circle","square")),size:{type:[Number,String],default:"default"},src:a.string,srcset:a.string,srcSet:a.string,icon:a.VNodeChild,alt:a.string,loadError:{type:Function}},setup:function(){return{configProvider:r("configProvider",s)}},data:function(){return{isImgExist:!0,isMounted:!1,scale:1,lastChildrenWidth:void 0,lastNodeWidth:void 0}},watch:{src:function(){var t=this;i((function(){t.isImgExist=!0,t.scale=1,t.$forceUpdate()}))}},mounted:function(){var t=this;i((function(){t.setScale(),t.isMounted=!0}))},updated:function(){var t=this;i((function(){t.setScale()}))},methods:{setScale:function(){if(this.$refs.avatarChildren&&this.$refs.avatarNode){var t=this.$refs.avatarChildren.offsetWidth,a=this.$refs.avatarNode.offsetWidth;0===t||0===a||this.lastChildrenWidth===t&&this.lastNodeWidth===a||(this.lastChildrenWidth=t,this.lastNodeWidth=a,this.scale=a-8<t?(a-8)/t:1)}},handleImgLoadError:function(){var t=this.$props.loadError;!1!==(t?t():void 0)&&(this.isImgExist=!1)}},render:function(){var t,a,e,r,s=this.$props,i=s.prefixCls,c=s.shape,l=s.size,u=s.src,p=s.alt,v=s.srcset,g=s.srcSet,m=n(this,"icon"),x=(0,this.configProvider.getPrefixCls)("avatar",i),y=this.$data,b=y.isImgExist,C=y.scale,$=(y.isMounted,d(t={},"".concat(x,"-lg"),"large"===l),d(t,"".concat(x,"-sm"),"small"===l),t),E=f(f(d({},x,!0),$),(d(a={},"".concat(x,"-").concat(c),c),d(a,"".concat(x,"-image"),u&&b),d(a,"".concat(x,"-icon"),m),a)),W="number"==typeof l?{width:"".concat(l,"px"),height:"".concat(l,"px"),lineHeight:"".concat(l,"px"),fontSize:m?"".concat(l/2,"px"):"18px"}:{},j=null===(r=(e=this.$slots).default)||void 0===r?void 0:r.call(e);if(u&&b)j=o("img",{src:u,srcset:v||g,onError:this.handleImgLoadError,alt:p},null);else if(m)j=m;else{if(this.$refs.avatarChildren||1!==C){var N="scale(".concat(C,") translateX(-50%)"),S={msTransform:N,WebkitTransform:N,transform:N},O="number"==typeof l?{lineHeight:"".concat(l,"px")}:{},P=j;j=o("span",{class:"".concat(x,"-string"),ref:"avatarChildren",style:f(f({},O),S)},h(j)?j:{default:function(){return[P]}})}else{var I=j;j=o("span",{class:"".concat(x,"-string"),ref:"avatarChildren",style:{opacity:0}},h(j)?j:{default:function(){return[I]}})}}return o("span",{ref:"avatarNode",class:E,style:W},h(j)?j:{default:function(){return[j]}})}}));export{u as A};