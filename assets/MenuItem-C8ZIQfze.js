import{a as c,_ as F}from"./createTheme-CxKjqECZ.js";import{_ as n}from"./extends-CCbyfPlC.js";import{r as d}from"./index-CBqU2yxZ.js";import{a as p,g as k,s as N,r as P,u as _,c as x,b as D}from"./styled-B4o22OB_.js";import{a as I}from"./List-lrBDYNc7.js";import{j as $}from"./jsx-runtime-CKrituN3.js";import{B as G,u as U}from"./ButtonBase-DceNHgrg.js";import{u as E}from"./useForkRef-ByGBP3wL.js";function ie(e){return k("MuiDivider",e)}const S=p("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),M=S,H=p("MuiListItemIcon",["root","alignItemsFlexStart"]),O=H,W=p("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),R=W;function z(e){return k("MuiMenuItem",e)}const A=p("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),r=A,h=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],q=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},J=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:u,classes:o}=e,i=D({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",u&&"selected"]},z,o);return n({},o,i)},K=N(G,{shouldForwardProp:e=>P(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:q})(({theme:e,ownerState:t})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${r.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${R.root}`]:{marginTop:0,marginBottom:0},[`& .${R.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),Q=d.forwardRef(function(t,s){const a=_({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:o=!1,divider:f=!1,disableGutters:i=!1,focusVisibleClassName:V,role:w="menuitem",tabIndex:v,className:B}=a,L=F(a,h),b=d.useContext(I),C=d.useMemo(()=>({dense:o||b.dense||!1,disableGutters:i}),[b.dense,o,i]),m=d.useRef(null);U(()=>{l&&m.current&&m.current.focus()},[l]);const T=n({},a,{dense:C.dense,divider:f,disableGutters:i}),g=J(a),j=E(m,s);let y;return a.disabled||(y=v!==void 0?v:-1),$.jsx(I.Provider,{value:C,children:$.jsx(K,n({ref:j,role:w,tabIndex:y,component:u,focusVisibleClassName:x(g.focusVisible,V),className:x(g.root,B)},L,{ownerState:T,classes:g}))})}),re=Q;export{re as M,ie as g};
