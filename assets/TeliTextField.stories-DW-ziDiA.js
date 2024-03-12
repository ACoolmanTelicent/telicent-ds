import{j as e}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import{T as j}from"./TextField-pm-3t2h4.js";import{_ as q,c as h}from"./createTheme-CxKjqECZ.js";import{_ as f}from"./extends-CCbyfPlC.js";import{r as u}from"./index-CBqU2yxZ.js";import{a as I,g as S,s as R,u as H,c as W,b as k}from"./styled-B4o22OB_.js";import{u as M,F as N}from"./useFormControl-Bd6AoRoF.js";import{T as L}from"./Typography-debr-egO.js";import{F as T,r as _,s as z,t as $}from"./index-DSy6vDdj.js";import{T as U}from"./TeliButton-By7FvipG.js";import"./Select-C8RJGQqm.js";import"./isMuiElement-BxNAcTwJ.js";import"./Menu-79bHUSdP.js";import"./useSlotProps-PXix3Ffb.js";import"./mergeSlotProps-CRt2QW0J.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ByGBP3wL.js";import"./Modal-CXP5e93J.js";import"./Grow-v3a2vyMz.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ButtonBase-DceNHgrg.js";import"./assertThisInitialized-LnzLPM7_.js";import"./Paper-buxdT74x.js";import"./ownerWindow-C4NkdjO3.js";import"./debounce-Be36O1Ab.js";import"./MenuList-DFNhk0xs.js";import"./List-lrBDYNc7.js";import"./useControlled-BAdDSZ1i.js";import"./useId-D6gHonEB.js";import"./createSvgIcon-Ax4BTbPH.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BBmpo-GE.js";import"./index-D3ylJrlI.js";import"./index-Bl6ORisp.js";import"./Popper-BKo43FI9.js";function O(l){return S("MuiInputAdornment",l)}const B=I("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),y=B;var v;const D=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Y=(l,a)=>{const{ownerState:r}=l;return[a.root,a[`position${h(r.position)}`],r.disablePointerEvents===!0&&a.disablePointerEvents,a[r.variant]]},G=l=>{const{classes:a,disablePointerEvents:r,hiddenLabel:n,position:o,size:i,variant:p}=l,m={root:["root",r&&"disablePointerEvents",o&&`position${h(o)}`,p,n&&"hiddenLabel",i&&`size${h(i)}`]};return k(m,O,a)},J=R("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Y})(({theme:l,ownerState:a})=>f({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(l.vars||l).palette.action.active},a.variant==="filled"&&{[`&.${y.positionStart}&:not(.${y.hiddenLabel})`]:{marginTop:16}},a.position==="start"&&{marginRight:8},a.position==="end"&&{marginLeft:8},a.disablePointerEvents===!0&&{pointerEvents:"none"})),K=u.forwardRef(function(a,r){const n=H({props:a,name:"MuiInputAdornment"}),{children:o,className:i,component:p="div",disablePointerEvents:m=!1,disableTypography:F=!1,position:x,variant:b}=n,P=q(n,D),s=M()||{};let c=b;b&&s.variant,s&&!c&&(c=s.variant);const g=f({},n,{hiddenLabel:s.hiddenLabel,size:s.size,disablePointerEvents:m,position:x,variant:c}),C=G(g);return e.jsx(N.Provider,{value:null,children:e.jsx(J,f({as:p,ownerState:g,className:W(C.root,i),ref:r},P,{children:typeof o=="string"&&!F?e.jsx(L,{color:"text.secondary",children:o}):e.jsxs(u.Fragment,{children:[x==="start"?v||(v=e.jsx("span",{className:"notranslate",children:"​"})):null,o]})}))})}),w=K,t=({ariaLabel:l,endAdornment:a,readOnly:r,pointerEvents:n,startAdornment:o,...i})=>e.jsx(j,{variant:"outlined",size:"small",maxRows:4,InputProps:{readOnly:r,startAdornment:e.jsx(w,{position:"start",children:o}),endAdornment:e.jsx(w,{position:"end",children:a})},InputLabelProps:{shrink:n},inputProps:{"aria-label":l},...i});try{t.displayName="TeliTextField",t.__docgenInfo={description:`Text Fields let users enter and edit text. They typically appear in forms and dialogs.
More information about this component can be used can be found [here](https://mui.com/material-ui/react-text-field/)`,displayName:"TeliTextField",props:{ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:`This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill. You can learn
more about it [following the
specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).`,name:"autoComplete",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"If true, the input element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"unknown"}},disabled:{defaultValue:{value:"false"},description:"If true, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"If true, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:null,description:"End InputAdornment for this component.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If true, the input will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"The helper text content.",name:"helperText",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:`The id of the input element. Use this prop to make label and helperText
accessible for screen readers.`,name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the input element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"ReactNode"}},maxRows:{defaultValue:null,description:"Maximum number of rows to display when multiline option is set to true.",name:"maxRows",required:!1,type:{name:"string | number"}},minRows:{defaultValue:null,description:"Minimum number of rows to display when multiline option is set to true.",name:"minRows",required:!1,type:{name:"string | number"}},multiline:{defaultValue:null,description:"If true, a textarea element is rendered instead of an input.",name:"multiline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the input element.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when the value is changed.
(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
@param event The event source of the callback. You can pull out the new
value by accessing event.target.value (string).
@returns void`,name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"The short hint displayed in the input before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"If true, the label is displayed as required and the input element is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true.",name:"rows",required:!1,type:{name:"string | number"}},startAdornment:{defaultValue:null,description:"Start InputAdornment for this component.",name:"startAdornment",required:!1,type:{name:"ReactNode"}},pointerEvents:{defaultValue:null,description:"If true, pointer events like onClick are enabled",name:"pointerEvents",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"If true, the input value cannot be changed",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:`Type of the input element. It should be a [valid HTML5 input
type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).`,name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},value:{defaultValue:null,description:"The value of the input element, required for a controlled component.",name:"value",required:!1,type:{name:"unknown"}}}}}catch{}const Q={render:()=>{const[l,a]=u.useState(!1),r=()=>{a(n=>!n)};return e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{id:"start-adornment-amount",label:"Amount",startAdornment:e.jsx(T,{icon:_,size:"sm"})}),e.jsx(t,{id:"start-adornment-weight",label:"Weight",startAdornment:"kg"}),e.jsx(t,{id:"end-adornment-weight",label:"Weight",endAdornment:"kg"}),e.jsx(t,{id:"end-adornment-password",label:"Password",type:l?"text":"password",autoComplete:"current-password",endAdornment:e.jsx(U,{onClick:r,children:e.jsx(T,{icon:l?z:$,size:"sm"})})})]})},parameters:{docs:{description:{story:`Start and end adornments can be added to the component to add a 
        prefix, a suffix, or an action to an input. For instance, you can use 
        an icon button to hide or reveal the password.`},source:{code:`
const [showPassword, setShowPassword] = useState(false);

const handlePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

return (
  <div className="grid grid-cols-3 gap-3">
    <TeliTextField
      id="start-adornment-amount"
      label="Amount"
      startAdornment={<FontAwesomeIcon icon={faPoundSign} size="sm" />}
    />
    <TeliTextField
      id="start-adornment-weight"
      label="Weight"
      startAdornment="kg"
    />
    <TeliTextField
      id="end-adornment-weight"
      label="Weight"
      endAdornment="kg"
    />
    <TeliTextField
      id="end-adornment-password"
      label="Password"
      type={showPassword ? "text" : "password"}
      autoComplete="current-password"
      endAdornment={
        <TeliButton onClick={handlePasswordVisibility}>
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            size="sm"
          />
        </TeliButton>
      }
    />
  </div>
      `}}}},Ne=Q,X={render:()=>{const[l,a]=u.useState("I'm batman!"),r=n=>{a(n.target.value)};return e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{id:"controlled",label:"Controlled",value:l,onChange:r}),e.jsx(t,{id:"uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]})},parameters:{docs:{description:{story:"The component can be controlled or uncontrolled."},source:{code:`
const [value, setValue] = useState("I'm batman!");

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};

return (
  <div className="grid grid-cols-3 gap-3">
    <TeliTextField
      id="controlled"
      label="Controlled"
      value={value}
      onChange={handleChange}
    />
    <TeliTextField
      id="uncontrolled"
      label="Uncontrolled"
      defaultValue="foo"
    />
  </div>
);
      `}}}},Le=X,Z={render:({label:l,id:a})=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{required:!0,id:"required-example",label:"Required",defaultValue:"Hello World"}),e.jsx(t,{disabled:!0,id:"disabled-example",label:"Disabled",defaultValue:"Hello World"}),e.jsx(t,{id:"password-example",label:"Password",type:"password",autoComplete:"current-password"}),e.jsx(t,{readOnly:!0,id:"read-only-example",label:"Read Only",defaultValue:"Hello World"}),e.jsx(t,{pointerEvents:!0,id:"number-example",label:"Number",type:"number"}),e.jsx(t,{id:"search-example",label:"Search",type:"search"}),e.jsx(t,{id:"helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})]}),parameters:{docs:{description:{story:`Standard form attributes are supported e.g. required, disabled, 
        type, etc. as well as a helperText which is used to give context about a 
        field's input, such as how the input will be used.`},source:{code:`
<TeliTextField
  required
  id="required-example"
  label="Required"
  defaultValue="Hello World"
/>
<TeliTextField
  disabled
  id="disabled-example"
  label="Disabled"
  defaultValue="Hello World"
/>
<TeliTextField
  id="password-example"
  label="Password"
  type="password"
  autoComplete="current-password"
/>
<TeliTextField
  readOnly
  id="read-only-example"
  label="Read Only"
  defaultValue="Hello World"
/>
<TeliTextField
  pointerEvents
  id="number-example"
  label="Number"
  type="number"
/>
<TeliTextField id="search-example" label="Search" type="search" />
<TeliTextField
  id="helperText"
  label="Helper text"
  defaultValue="Default Value"
  helperText="Some important text"
/>
      `}}}},_e=Z,ee={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{id:"multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),e.jsx(t,{id:"textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),e.jsx(t,{id:"multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"})]}),parameters:{docs:{description:{story:`The error prop toggles the error state. The helperText prop can 
        then be used to provide feedback to the user about the error.`},source:{code:`
<TeliTextField
  error
  id="error-example"
  label="Error"
  defaultValue="Hello World"
/>
<TeliTextField
  error
  id="error-helper-text"
  label="Error"
  defaultValue="Hello World"
  helperText="Incorrect input"
/>
      `}}}},ze=ee,te={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx(t,{error:!0,id:"error-example",label:"Error",defaultValue:"Hello World"}),e.jsx(t,{error:!0,id:"error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect input"})]}),parameters:{docs:{description:{story:`The error prop toggles the error state. The helperText prop can 
        then be used to provide feedback to the user about the error.`},source:{code:`
<TeliTextField
  error
  id="error-example"
  label="Error"
  defaultValue="Hello World"
/>
<TeliTextField
  error
  id="error-helper-text"
  label="Error"
  defaultValue="Hello World"
  helperText="Incorrect input"
/>
      `}}}},$e=te,Ue={component:t},d={args:{id:"example-id",label:"Example",fullWidth:!0},parameters:{docs:{description:{story:`<code>fullWidth</code> can be used to make the input take up the
        full width of its parent container.`}}}};var V,E,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    id: "example-id",
    label: "Example",
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: \`<code>fullWidth</code> can be used to make the input take up the
        full width of its parent container.\`
      }
    }
  }
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const Oe=["Basic","FormProps","ValidationExamples","MultilineExamples","AdornmentExamples","Controlled"];export{Ne as AdornmentExamples,d as Basic,Le as Controlled,_e as FormProps,ze as MultilineExamples,$e as ValidationExamples,Oe as __namedExportsOrder,Ue as default};
