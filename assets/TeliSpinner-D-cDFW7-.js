import{j as c}from"./jsx-runtime-CKrituN3.js";import{c as l,_ as T}from"./createTheme-CxKjqECZ.js";import{_ as o}from"./extends-CCbyfPlC.js";import{r as w}from"./index-CBqU2yxZ.js";import{g as I,a as U,k as D,s as k,h as R,u as z,c as E,b as F}from"./styled-B4o22OB_.js";function K(r){return I("MuiCircularProgress",r)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const V=["className","color","disableShrink","size","style","thickness","value","variant"];let d=r=>r,P,_,S,b;const t=44,W=D(P||(P=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),q=D(_||(_=d`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),B=r=>{const{classes:e,variant:s,color:a,disableShrink:m}=r,p={root:["root",s,`color${l(a)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,m&&"circleDisableShrink"]};return F(p,K,e)},G=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${l(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&R(S||(S=d`
      animation: ${0} 1.4s linear infinite;
    `),W)),L=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${l(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&R(b||(b=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),q)),A=w.forwardRef(function(e,s){const a=z({props:e,name:"MuiCircularProgress"}),{className:m,color:p="primary",disableShrink:M=!1,size:u=40,style:j,thickness:i=3.6,value:f=0,variant:v="indeterminate"}=a,N=T(a,V),n=o({},a,{color:p,disableShrink:M,size:u,thickness:i,value:f,variant:v}),h=B(n),g={},x={},y={};if(v==="determinate"){const C=2*Math.PI*((t-i)/2);g.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(f),g.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return c.jsx(G,o({className:E(h.root,m),style:o({width:u,height:u},x,j),ownerState:n,ref:s,role:"progressbar"},y,N,{children:c.jsx(L,{className:h.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:c.jsx(Z,{className:h.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),H=A,$=r=>c.jsx(H,{...r});try{$.displayName="TeliSpinner",$.__docgenInfo={description:"",displayName:"TeliSpinner",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{$ as T};
