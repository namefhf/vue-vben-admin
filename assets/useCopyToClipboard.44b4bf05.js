import{r as e,aZ as t,dw as n}from"./index.54123aa3.js";function o(o){const a=e(o||""),c=e(!1),s=e(!1);return t(a,(e=>{n(e)&&(s.value=!0,c.value=function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let c;a&&a.rangeCount>0&&(c=a.getRangeAt(0));t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(r){throw new Error(r)}n.remove(),c&&a&&(a.removeAllRanges(),a.addRange(c));o&&o.focus();return s}(e))}),{immediate:!!o,flush:"sync"}),{clipboardRef:a,isSuccessRef:c,copiedRef:s}}export{o as u};