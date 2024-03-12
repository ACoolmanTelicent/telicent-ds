import{j as h}from"./jsx-runtime-CKrituN3.js";/* empty css              */import{c as o,l as R,a as v,d as j,_ as M}from"./createTheme-CxKjqECZ.js";import{_ as f}from"./extends-CCbyfPlC.js";import{r as c}from"./index-CBqU2yxZ.js";import{a as P,g as A,s as N,u as W,c as U,b as D}from"./styled-B4o22OB_.js";import{T as q}from"./Tablelvl2Context-CrQfokTI.js";const E=c.createContext(),I=E;function L(e){return A("MuiTableCell",e)}const V=P("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),B=V,J=["align","className","component","padding","scope","size","sortDirection","variant"],F=e=>{const{classes:a,variant:i,align:l,padding:s,size:g,stickyHeader:r}=e,u={root:["root",i,r&&"stickyHeader",l!=="inherit"&&`align${o(l)}`,s!=="normal"&&`padding${o(s)}`,`size${o(g)}`]};return D(u,L,a)},G=N("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:i}=e;return[a.root,a[i.variant],a[`size${o(i.size)}`],i.padding!=="normal"&&a[`padding${o(i.padding)}`],i.align!=="inherit"&&a[`align${o(i.align)}`],i.stickyHeader&&a.stickyHeader]}})(({theme:e,ownerState:a})=>f({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?R(v(e.palette.divider,1),.88):j(v(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},a.variant==="body"&&{color:(e.vars||e).palette.text.primary},a.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${B.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),K=c.forwardRef(function(a,i){const l=W({props:a,name:"MuiTableCell"}),{align:s="inherit",className:g,component:r,padding:u,scope:k,size:z,sortDirection:x,variant:_}=l,$=M(l,J),t=c.useContext(I),d=c.useContext(q),b=d&&d.variant==="head";let n;r?n=r:n=b?"th":"td";let p=k;n==="td"?p=void 0:!p&&b&&(p="col");const m=_||d&&d.variant,y=f({},l,{align:s,component:n,padding:u||(t&&t.padding?t.padding:"normal"),size:z||(t&&t.size?t.size:"medium"),sortDirection:x,stickyHeader:m==="head"&&t&&t.stickyHeader,variant:m}),H=F(y);let C=null;return x&&(C=x==="asc"?"ascending":"descending"),h.jsx(G,f({as:n,ref:i,className:U(H.root,g),"aria-sort":C,scope:p,ownerState:y},$))}),O=K,T=({minWidth:e,children:a,...i})=>h.jsx(O,{sx:{minWidth:e},...i,children:a});try{T.displayName="TeliTableCell",T.__docgenInfo={description:"",displayName:"TeliTableCell",props:{minWidth:{defaultValue:null,description:"Minimum width of the table",name:"minWidth",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{T,I as a};
