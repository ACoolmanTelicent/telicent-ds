import{_ as h}from"./createTheme-CxKjqECZ.js";import{_ as n}from"./extends-CCbyfPlC.js";import{r as R}from"./index-CBqU2yxZ.js";import{u as I,g as T,a as _,s as F,c as N,b as D}from"./styled-B4o22OB_.js";import{c as M}from"./createSvgIcon-Ax4BTbPH.js";import{j as b}from"./jsx-runtime-CKrituN3.js";import{r as O,m as z,a as E}from"./mergeSlotProps-CRt2QW0J.js";import{u as U}from"./useForkRef-ByGBP3wL.js";const L=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],$=["component","slots","slotProps"],q=["component"];function B(o,e){const{className:t,elementType:r,ownerState:l,externalForwardedProps:a,getSlotOwnerState:i,internalForwardedProps:s}=e,A=h(e,L),{component:P,slots:d={[o]:void 0},slotProps:k={[o]:void 0}}=a,f=h(a,$),u=d[o]||r,m=O(k[o],l),x=z(n({className:t},A,{externalForwardedProps:o==="root"?f:void 0,externalSlotProps:m})),{props:{component:c},internalRef:C}=x,g=h(x.props,q),y=U(C,m==null?void 0:m.ref,e.ref),p=i?i(g):{},v=n({},l,p),S=o==="root"?c||P:c,w=E(u,n({},o==="root"&&!P&&!d[o]&&s,o!=="root"&&!d[o]&&s,g,S&&{as:S},{ref:y}),v);return Object.keys(p).forEach(j=>{delete w[j]}),[u,w]}function H(o){return I}const W=M(b.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function G(o){return T("MuiAvatar",o)}_("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const J=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],K=H(),Q=o=>{const{classes:e,variant:t,colorDefault:r}=o;return D({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},G,e)},V=F("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})(({theme:o})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(o.vars||o).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:n({color:(o.vars||o).palette.background.default},o.vars?{backgroundColor:o.vars.palette.Avatar.defaultBg}:n({backgroundColor:o.palette.grey[400]},o.applyStyles("dark",{backgroundColor:o.palette.grey[600]})))}]})),X=F("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(o,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Y=F(W,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(o,e)=>e.fallback})({width:"75%",height:"75%"});function Z({crossOrigin:o,referrerPolicy:e,src:t,srcSet:r}){const[l,a]=R.useState(!1);return R.useEffect(()=>{if(!t&&!r)return;a(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&a("loaded")},s.onerror=()=>{i&&a("error")},s.crossOrigin=o,s.referrerPolicy=e,s.src=t,r&&(s.srcset=r),()=>{i=!1}},[o,e,t,r]),l}const oo=R.forwardRef(function(e,t){const r=K({props:e,name:"MuiAvatar"}),{alt:l,children:a,className:i,component:s="div",slots:A={},slotProps:P={},imgProps:d,sizes:k,src:f,srcSet:u,variant:m="circular"}=r,x=h(r,J);let c=null;const C=Z(n({},d,{src:f,srcSet:u})),g=f||u,y=g&&C!=="error",p=n({},r,{colorDefault:!y,component:s,variant:m}),v=Q(p),[S,w]=B("img",{className:v.img,elementType:X,externalForwardedProps:{slots:A,slotProps:{img:n({},d,P.img)}},additionalProps:{alt:l,src:f,srcSet:u,sizes:k},ownerState:p});return y?c=b.jsx(S,n({},w)):a||a===0?c=a:g&&l?c=l[0]:c=b.jsx(Y,{ownerState:p,className:v.fallback}),b.jsx(V,n({as:s,ownerState:p,className:N(v.root,i),ref:t},x,{children:c}))}),co=oo;export{co as A};
