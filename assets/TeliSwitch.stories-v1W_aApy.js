import{T as t}from"./TeliSwitch-Dj8o8anZ.js";import{j as e}from"./jsx-runtime-CKrituN3.js";import{r}from"./index-CBqU2yxZ.js";import"./createTheme-CxKjqECZ.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styled-B4o22OB_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BBmpo-GE.js";import"./FormControlLabel-D0ZLyakJ.js";import"./useFormControl-Bd6AoRoF.js";import"./ButtonBase-DceNHgrg.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useForkRef-ByGBP3wL.js";import"./useControlled-BAdDSZ1i.js";import"./Typography-debr-egO.js";const o={render:()=>{const s={inputProps:{"aria-label":"Switch demo"}};return e.jsxs("fieldset",{className:"space-x-3",children:[e.jsx(t,{...s,defaultChecked:!0}),e.jsx(t,{...s}),e.jsx(t,{...s,disabled:!0,defaultChecked:!0}),e.jsx(t,{...s,disabled:!0})]})},parameters:{docs:{source:{code:`
const label = { inputProps: { "aria-label": "Switch demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} defaultChecked />
    <TeliSwitch {...label} />
    <TeliSwitch {...label} disabled defaultChecked />
    <TeliSwitch {...label} disabled />
  </fieldset>
);
        `}}}},E=o,d={render:()=>{const[s,l]=r.useState(!0),a=c=>{const i=c.target;l(i.checked)};return e.jsx(t,{checked:s,onChange:a})},parameters:{docs:{source:{description:{story:"You can control the switch with the <code>checked</code> and <code>onChange</code> props:"},code:`
const [checked, setChecked] = useState(true);

const handleChange = (event: React.ChangeEvent) => {
  const target = event.target as HTMLInputElement;
  setChecked(target.checked);
};

return <TeliSwitch checked={checked} onChange={handleChange} />;
        `}}}},$=d,n={render:()=>e.jsxs("fieldset",{className:"flex flex-col",children:[e.jsx(t,{label:"Label"}),e.jsx(t,{required:!0,label:"Required"}),e.jsx(t,{disabled:!0,label:"Disabled"})]}),parameters:{docs:{source:{code:`
<fieldset>
  <TeliSwitch label="Label" />
  <TeliSwitch required label="Required" />
  <TeliSwitch disabled label="Disabled" />
</fieldset>
        `}}}},q=n,h={render:()=>e.jsxs("fieldset",{className:"space-x-3",children:[e.jsx(t,{label:"Start",labelPlacement:"start"}),e.jsx(t,{label:"End",labelPlacement:"end"})]}),parameters:{docs:{source:{description:{story:"The placement of the label can be changed as shown below"},code:`
<fieldset>
  <TeliSwitch label="Start" labelPlacement="start" />
  <TeliSwitch label="End" labelPlacement="end" />
</fieldset>
        `}}}},B=h,m={render:()=>{const s={inputProps:{"aria-label":"Switch size demo"}};return e.jsxs("fieldset",{className:"flex items-center gap-x-3",children:[e.jsx(t,{...s}),e.jsx(t,{...s,size:"medium"})]})},parameters:{docs:{source:{description:{story:"Use the <code>size</code> prop to change the size of the switch."},code:`
const label = { inputProps: { "aria-label": "Switch size demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} />
    <TeliSwitch {...label} size="medium" />
  </fieldset>
);
        `}}}},N=m,R={component:t},v=["BasicSwitches","LabelledSwitches","ControlledSwitches","Sizes","LabelPlacement"];export{E as BasicSwitches,$ as ControlledSwitches,B as LabelPlacement,q as LabelledSwitches,N as Sizes,v as __namedExportsOrder,R as default};
