import{j as t}from"./jsx-runtime-CKrituN3.js";import{T as S,a as h}from"./TeliMenu-IxfFeWJ9.js";import{r as p,R as U}from"./index-CBqU2yxZ.js";import{c as i,a as v,_ as H}from"./createTheme-CxKjqECZ.js";import{_ as r}from"./extends-CCbyfPlC.js";import{a as A,g as D,s as f,r as q,j as J,u as K,c as R,b as Q}from"./styled-B4o22OB_.js";import{B as X}from"./ButtonBase-DceNHgrg.js";import"./Menu-79bHUSdP.js";import"./useSlotProps-PXix3Ffb.js";import"./mergeSlotProps-CRt2QW0J.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ByGBP3wL.js";import"./Modal-CXP5e93J.js";import"./Grow-v3a2vyMz.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./assertThisInitialized-LnzLPM7_.js";import"./Paper-buxdT74x.js";import"./ownerWindow-C4NkdjO3.js";import"./debounce-Be36O1Ab.js";import"./MenuList-DFNhk0xs.js";import"./List-lrBDYNc7.js";import"./MenuItem-C8ZIQfze.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BBmpo-GE.js";function Y(o){return D("MuiButton",o)}const Z=A("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),x=Z,w=p.createContext({}),oo=w,ao=p.createContext(void 0),no=ao,io=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],ro=o=>{const{color:a,disableElevation:n,fullWidth:s,size:l,variant:e,classes:c}=o,b={root:["root",e,`${e}${i(a)}`,`size${i(l)}`,`${e}Size${i(l)}`,`color${i(a)}`,n&&"disableElevation",s&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${i(l)}`],endIcon:["icon","endIcon",`iconSize${i(l)}`]},m=Q(b,Y,c);return r({},c,m)},P=o=>r({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),to=f(X,{shouldForwardProp:o=>q(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.root,a[n.variant],a[`${n.variant}${i(n.color)}`],a[`size${i(n.size)}`],a[`${n.variant}Size${i(n.size)}`],n.color==="inherit"&&a.colorInherit,n.disableElevation&&a.disableElevation,n.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var n,s;const l=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],e=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return r({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":r({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:e,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":r({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${x.focusVisible}`]:r({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${x.disabled}`]:r({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${v(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(n=(s=o.palette).getContrastText)==null?void 0:n.call(s,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:l,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}}),so=f("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.startIcon,a[`iconSize${i(n.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},P(o))),lo=f("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:n}=o;return[a.endIcon,a[`iconSize${i(n.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},P(o))),eo=p.forwardRef(function(a,n){const s=p.useContext(oo),l=p.useContext(no),e=J(s,a),c=K({props:e,name:"MuiButton"}),{children:b,color:m="primary",component:C="button",className:W,disabled:z=!1,disableElevation:j=!1,disableFocusRipple:y=!1,endIcon:$,focusVisibleClassName:T,fullWidth:N=!1,size:O="medium",startIcon:I,type:B,variant:_="text"}=c,L=H(c,io),u=r({},c,{color:m,component:C,disabled:z,disableElevation:j,disableFocusRipple:y,fullWidth:N,size:O,type:B,variant:_}),d=ro(u),V=I&&t.jsx(so,{className:d.startIcon,ownerState:u,children:I}),F=$&&t.jsx(lo,{className:d.endIcon,ownerState:u,children:$}),G=l||"";return t.jsxs(to,r({ownerState:u,className:R(s.className,d.root,W,G),component:C,disabled:z,focusRipple:!y,focusVisibleClassName:R(d.focusVisible,T),ref:n,type:B},L,{classes:d,children:[V,b,F]}))}),co=eo,po=()=>{const[o,a]=U.useState(!1),n=()=>{a(!0)},s=()=>{a(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(co,{variant:"outlined",onClick:n,children:"Open simple menu"}),t.jsxs(S,{open:o,onClose:s,children:[t.jsx(h,{children:"First item"}),t.jsx(h,{children:"Second item"})]})]})},Oo={component:S,title:"components/Menus/TeliMenu"},g={render:()=>t.jsx(po,{}),args:{open:!1}};var k,E,M;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <SimpleMenu />,
  args: {
    open: false
  }
}`,...(M=(E=g.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const _o=["SimpleMenuExample"];export{g as SimpleMenuExample,_o as __namedExportsOrder,Oo as default};
