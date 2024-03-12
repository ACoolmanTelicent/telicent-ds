import{j as o}from"./jsx-runtime-CKrituN3.js";import{r as u}from"./index-CBqU2yxZ.js";import{F as c,n as y,o as g,l as v}from"./index-DSy6vDdj.js";import{T as b}from"./TeliBasicMenu-Co7_KH0C.js";import{T as h}from"./TeliSwitch-DobT4qmp.js";import{c as x}from"./index-Bl6ORisp.js";import{T}from"./TeliButton-BHrGmTW6.js";import"./ClockRotateLeft-C6yht_pZ.js";import{T as j}from"./TeliAddIcon-DOZEh0gI.js";import"./TeliCloseIcon-D1IiTobh.js";import"./TeliDeleteIcon-DEYyW2SS.js";import"./TeliEditIcon-Bt5DYGfs.js";import"./TeliSearchIcon-DSQ35rhL.js";import"./TeliSortIcons-CPr6Raf0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./MenuList-DFNhk0xs.js";import"./extends-CCbyfPlC.js";import"./createTheme-CxKjqECZ.js";import"./styled-B4o22OB_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BBmpo-GE.js";import"./ButtonBase-DceNHgrg.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useForkRef-ByGBP3wL.js";import"./Paper-buxdT74x.js";import"./useSlotProps-PXix3Ffb.js";import"./mergeSlotProps-CRt2QW0J.js";import"./isHostComponent-DVu5iVWx.js";import"./List-lrBDYNc7.js";import"./MenuItem-C8ZIQfze.js";/* empty css                      */import"./Popper-BKo43FI9.js";import"./Grow-v3a2vyMz.js";import"./index-BtM5VmRH.js";import"./FormControlLabel-D0ZLyakJ.js";import"./useFormControl-Bd6AoRoF.js";import"./useControlled-BAdDSZ1i.js";import"./Typography-debr-egO.js";import"./useId-D6gHonEB.js";import"./Icon-DPzi7t-K.js";const e=({position:t="bottom-start",defaultControls:i=!0,vertical:a,variant:s="tertiary",onZoomIn:l,onZoomOut:n,children:r})=>{const m=s==="tertiary",p=t.startsWith("bottom")&&!a?"top":t.startsWith("bottom")&&a?"left":"bottom",d=m?"basic":"tertiary",f=()=>o.jsxs(o.Fragment,{children:[o.jsx(T,{"aria-label":"zoom in",tooltip:"Zoom in",tooltipPlacement:p,variant:d,onClick:l,children:o.jsx(j,{})}),o.jsx(T,{"aria-label":"zoom out",tooltip:"Zoom out",tooltipPlacement:p,variant:d,onClick:n,children:o.jsx(c,{icon:y})})]});return o.jsxs("ul",{className:x("toolbar",{"toolbar--vertical":a,"toolbar--tertiary":m,"toolbar--bottom-start":t==="bottom-start","toolbar--bottom-end":t==="bottom-end","toolbar--top-start":t==="top-start","toolbar--top-end":t==="top-end"}),children:[i&&o.jsx(f,{}),r]})};try{e.displayName="TeliToolbar",e.__docgenInfo={description:"",displayName:"TeliToolbar",props:{defaultControls:{defaultValue:{value:"true"},description:"",name:"defaultControls",required:!1,type:{name:"boolean"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"bottom-start"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},variant:{defaultValue:{value:"tertiary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"tertiary"'},{value:'"basic"'}]}},onZoomIn:{defaultValue:null,description:"",name:"onZoomIn",required:!1,type:{name:"(() => void)"}},onZoomOut:{defaultValue:null,description:"",name:"onZoomOut",required:!1,type:{name:"(() => void)"}}}}}catch{}const w=()=>{const[t,i]=u.useState(!0),[a,s]=u.useState(!1),l=()=>{i(r=>!r)},n=()=>{s(r=>!r)};return o.jsxs(e,{children:[o.jsx(b,{label:o.jsx(c,{icon:g}),tooltip:"Map styles",variant:"basic",yPlacement:"top",menuItems:[{id:"Dark",label:"Dark"},{id:"Satellite",label:"Satellite"}]}),o.jsx(b,{label:o.jsx(c,{icon:v}),tooltip:"Map layers",variant:"basic",yPlacement:"top",menuItems:[{id:"Tools",label:o.jsx(h,{id:"flood-stations-toggle-switch",label:"Flood stations",labelPlacement:"start",edge:"end",size:"small",checked:a,onChange:n})},{id:"Heatmap",label:o.jsx(h,{id:"heatmap-toggle-switch",label:"Heatmap",labelPlacement:"start",edge:"end",size:"small",checked:t,onChange:l})}]})]})},H={render:()=>o.jsx(w,{}),parameters:{docs:{description:{story:"Similar actions can be grouped together to reduce visual clutter."},source:{code:`
<TeliToolbar>
  <TeliBasicMenu
    label={<FontAwesomeIcon icon={faMap} />}
    tooltip="Map styles"
    variant="basic"
    yPlacement="top"
    menuItems={[
      { id: "Dark", children: "Dark" },
      { id: "Satellite", children: "Satellite" },
    ]}
  />
  <TeliBasicMenu
    label={<FontAwesomeIcon icon={faLayerGroup} />}
    tooltip="Map layers"
    variant="basic"
    yPlacement="top"
    menuItems={[
      {
        id: "Tools",
        children: (
          <TeliSwitch
            id="flood-areas-toggle-switch"
            label="Flood areas"
            switchPosition="end"
            className="ml-auto"
            checked={showHeat}
            onChange={toggleHeat}
          />
        ),
      },
      {
        id: "Heatmap",
        children: (
          <TeliSwitch
            id="heatmap-toggle-switch"
            label="Heatmap"
            switchPosition="end"
            className="ml-auto"
            checked={showHeat}
            onChange={toggleHeat}
          />
        ),
      },
    ]}
  />
</TeliToolbar>
      `}}}},bo=H,S={render:()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{}),o.jsx(e,{vertical:!0,position:"bottom-end"})]}),parameters:{docs:{description:{story:`
By default toolbar items are arranged horizontally, to arrange the items vertically 
use the <code>vertical</code> prop.
        `},source:{code:`
<TeliToolbar />
<TeliToolbar vertical position="bottom-end" />
      `}}}},ho=S,A={render:()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{position:"top-start"}),o.jsx(e,{position:"top-end"}),o.jsx(e,{position:"bottom-start"}),o.jsx(e,{position:"bottom-end"})]}),parameters:{docs:{description:{story:`
You can position the toolbar by using the <code>position</code> prop
        `},source:{code:`
<TeliToolbar position="top-start" />
<TeliToolbar position="top-end" />
<TeliToolbar position="bottom-start" />
<TeliToolbar position="bottom-end" />
      `}}}},To=A,fo={component:e,parameters:{docs:{description:{component:`The toolbar component should consist of commands or actions 
        that are frequently used by novice and expert users. The toolbar components comes 
        with default controls for visualisations which can be disabled by using 
        <code>defaultControls</code> prop`}}},decorators:[t=>o.jsx("div",{style:{position:"relative",height:"8em"},children:o.jsx(t,{})})]},yo=["HorizontalAndVerticalToolbars","PositionedToolbars","GroupedActions"];export{bo as GroupedActions,ho as HorizontalAndVerticalToolbars,To as PositionedToolbars,yo as __namedExportsOrder,fo as default};
