import{j as e}from"./jsx-runtime-CKrituN3.js";import{F as g,i as b}from"./index-DSy6vDdj.js";import{T as A}from"./TeliChip-Da6Rlb7j.js";import{T as P}from"./TeliSpinner-D-cDFW7-.js";import"./ClockRotateLeft-C6yht_pZ.js";import"./TeliAddIcon-DOZEh0gI.js";import{T as j}from"./TeliCloseIcon-D1IiTobh.js";import"./TeliDeleteIcon-DEYyW2SS.js";import"./TeliEditIcon-Bt5DYGfs.js";import{T as V}from"./TeliSearchIcon-DSQ35rhL.js";import"./TeliSortIcons-CPr6Raf0.js";import{A as q}from"./TeliAutocomplete-BI37ACUF.js";import{F,a as _}from"./Select-C8RJGQqm.js";import{T as w}from"./TextField-pm-3t2h4.js";function m({error:l,fullWidth:p,helperText:i,label:u,loading:s,maxHeight:d,mode:c,placeholder:f,startAdornment:h,width:x,getChipIcon:I=t=>t==null?void 0:t.icon,getOptionLabel:T=t=>(t==null?void 0:t.label)??t,...y}){const t=r=>{if(c==="search"){if(r==="base")return{openOnFocus:!0,autoComplete:!0,autoHighlight:!0};if(r==="InputProps")return{InputProps:{type:"search",startAdornment:e.jsx(V,{size:"sm"})}}}};return e.jsxs(F,{error:l,sx:{width:x},fullWidth:p,children:[e.jsx(q,{disablePortal:!0,clearIcon:e.jsx(j,{}),popupIcon:e.jsx(g,{icon:b}),size:"small",className:"error",loading:s,renderInput:r=>{var o,n,a;return e.jsx(w,{...r,variant:"outlined",label:u,placeholder:f,error:l,InputProps:{...r.InputProps,...(o=t("InputProps"))==null?void 0:o.InputProps,startAdornment:e.jsxs(e.Fragment,{children:[h??((a=(n=t("InputProps"))==null?void 0:n.InputProps)==null?void 0:a.startAdornment),r.InputProps.startAdornment]}),endAdornment:e.jsxs(e.Fragment,{children:[s?e.jsx(P,{color:"inherit",size:14}):null,r.InputProps.endAdornment]})}})},renderTags:(r,o)=>r.map((n,a)=>e.jsx(A,{variant:"tertiary",size:"small",icon:I(n),label:T(n),...o({index:a})})),slotProps:{popper:{modifiers:[{name:"offset",options:{offset:[0,8]}}]}},ListboxProps:{sx:{maxHeight:d}},...t("base"),...y}),i?e.jsx(_,{children:i}):null]})}try{m.displayName="TeliAutocomplete",m.__docgenInfo={description:"",displayName:"TeliAutocomplete",props:{error:{defaultValue:null,description:"If true, the component will be rendered in an error state",name:"error",required:!1,type:{name:"boolean"}},getChipIcon:{defaultValue:{value:"(option: any) => option?.icon"},description:"Used to determine the icon elment of a given option",name:"getChipIcon",required:!1,type:{name:"((option: Value) => any)"}},helperText:{defaultValue:null,description:"The label content.",name:"helperText",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"ReactNode"}},maxHeight:{defaultValue:null,description:"Maximum height of the menu component",name:"maxHeight",required:!1,type:{name:"number"}},mode:{defaultValue:null,description:"The autocomplete mode with predefined defaults",name:"mode",required:!1,type:{name:"enum",value:[{value:'"search"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},startAdornment:{defaultValue:null,description:"Element placed before the input element",name:"startAdornment",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"Width of the component.",name:"width",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}export{m as T};