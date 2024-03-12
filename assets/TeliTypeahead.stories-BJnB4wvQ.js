import{j as n}from"./jsx-runtime-CKrituN3.js";import{u as b,Q as v,a as x}from"./useQuery-Cljj7LH1.js";import{r as l}from"./index-CBqU2yxZ.js";import{T as V}from"./TeliAutocomplete-DV_FB16t.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DSy6vDdj.js";import"./index-D3ylJrlI.js";import"./TeliChip-MNbGvMEC.js";import"./index-Bl6ORisp.js";import"./ClockRotateLeft-93izmczh.js";import"./Icon-hpKQIUPo.js";import"./TeliAddIcon-dji1bzlR.js";import"./TeliCloseIcon-jBYqW35Z.js";import"./TeliDeleteIcon-BXpeQMhI.js";import"./TeliEditIcon-CJe6ftRm.js";import"./TeliSearchIcon-Bq_C4fyB.js";import"./TeliSortIcons-9H7Gi-e2.js";import"./Chip-DRH53zd8.js";import"./createTheme-CxKjqECZ.js";import"./extends-CCbyfPlC.js";import"./styled-B4o22OB_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BBmpo-GE.js";import"./createSvgIcon-Ax4BTbPH.js";import"./useForkRef-ByGBP3wL.js";import"./ButtonBase-DceNHgrg.js";import"./assertThisInitialized-LnzLPM7_.js";import"./TeliSpinner-D-cDFW7-.js";import"./TeliAutocomplete-BI37ACUF.js";import"./Select-C8RJGQqm.js";import"./useFormControl-Bd6AoRoF.js";import"./isMuiElement-BxNAcTwJ.js";import"./Menu-79bHUSdP.js";import"./useSlotProps-PXix3Ffb.js";import"./mergeSlotProps-CRt2QW0J.js";import"./isHostComponent-DVu5iVWx.js";import"./Modal-CXP5e93J.js";import"./Grow-v3a2vyMz.js";import"./index-BtM5VmRH.js";import"./Paper-buxdT74x.js";import"./ownerWindow-C4NkdjO3.js";import"./debounce-Be36O1Ab.js";import"./MenuList-DFNhk0xs.js";import"./List-lrBDYNc7.js";import"./useControlled-BAdDSZ1i.js";import"./useId-D6gHonEB.js";import"./Popper-BKo43FI9.js";import"./TextField-pm-3t2h4.js";const C=(e,r=300)=>{const[t,o]=l.useState(e);return l.useEffect(()=>{const a=setTimeout(()=>{o(e)},r);return()=>{clearTimeout(a)}},[e,r]),t},w={headers:{"Content-Type":"application/json"}},E=async(e,r,t)=>{const o=new URLSearchParams({[r]:t}).toString(),a=await fetch(`${e}/typeahead?${o}`,w);if(!a.ok)throw new Error(`An error occured while retrieving search results for query ${t}`);return a.json()},j=(e,r,t,o)=>b(["typeahead"],()=>E(e,r,t));function s({errorMessage:e,helperText:r,queryParamKey:t,url:o,noOptionsText:a,onTransform:I,...c}){const[i,d]=l.useState(""),h=C(i),{isInitialLoading:y,isError:p,data:f,...u}=j(o,t,h),g=u.error instanceof Error?u.error.message:void 0,T=e??g,q=(N,S)=>{d(S)};return n.jsx(V,{error:p,options:f??[],noOptionsText:i===""?"Start typing ...":a,loading:y,inputValue:i,onInputChange:q,helperText:p?T:r,mode:"search",...c})}try{s.displayName="TeliTypeahead",s.__docgenInfo={description:"",displayName:"TeliTypeahead",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},queryParamKey:{defaultValue:null,description:"",name:"queryParamKey",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},onTransform:{defaultValue:null,description:"",name:"onTransform",required:!1,type:{name:"((data: any) => any)"}},error:{defaultValue:null,description:"If true, the component will be rendered in an error state",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"The label content.",name:"helperText",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the component.",name:"width",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},maxHeight:{defaultValue:null,description:"Maximum height of the menu component",name:"maxHeight",required:!1,type:{name:"number"}},mode:{defaultValue:null,description:"The autocomplete mode with predefined defaults",name:"mode",required:!1,type:{name:"enum",value:[{value:'"search"'}]}},startAdornment:{defaultValue:null,description:"Element placed before the input element",name:"startAdornment",required:!1,type:{name:"ReactNode"}},getChipIcon:{defaultValue:null,description:"Used to determine the icon elment of a given option",name:"getChipIcon",required:!1,type:{name:"((option: Value) => any)"}}}}}catch{}const m=e=>e.map(t=>({value:t.targetUri,label:t.displayName,type:t.primaryType})),_={render:()=>{const[e,r]=l.useState(""),t=(o,a)=>{r(a)};return n.jsx(s,{freeSolo:!0,fullWidth:!0,url:"http://localhost:5051",queryParamKey:"searchTerm",label:"Free solo typeahead",value:e,onChange:t,onTransform:m})},parameters:{docs:{source:{code:`
<TeliTypeaheadAutocomplete
  freeSolo
  fullWidth
  url="http://localhost:5051"
  queryParamKey="searchTerm"
  label="Free solo typeahead"
  onTransform={(targets: Target[]) => {
    const options = targets.map((target) => ({
      value: target.targetUri,
      label: target.displayName,
      type: target.primaryType,
    }));
    return options;
  }}
/>
        `}}}},Ee=_,M={render:()=>{const[e,r]=l.useState([]),t=(o,a)=>{r(a)};return n.jsx(s,{multiple:!0,fullWidth:!0,url:"http://localhost:5051",queryParamKey:"searchTerm",label:"Multi select typeahead",value:e,onChange:t,onTransform:m})},parameters:{docs:{source:{code:`
const [selected, setSelected] = useState<Target[]>([]);

const handleTargetChange = (
  event: React.SyntheticEvent<Element, Event>,
  targets: Target[]
): void => {
  setSelected(targets);
};

return (
  <TeliTypeaheadAutocomplete
    multiple
    fullWidth
    url="http://localhost:5051"
    queryParamKey="searchTerm"
    label="Typeahead"
    value={selected}
    onChange={handleTargetChange}
    onTransform={(targets: Target[]) => {
      const options = targets.map((target) => ({
        value: target.targetUri,
        label: target.displayName,
        type: target.primaryType,
      }));
      return options;
    }}
  />
);
      `}}}},je=M,P=new v,_e={component:s,parameters:{docs:{description:{component:`This component makes api calls to the desired api and 
        provides the user with the options specified. Use onTransform prop to 
        shape the options. This component uses react query and will require the 
        query client provider to be present.`}}},decorators:[e=>n.jsx(x,{client:P,children:n.jsx("div",{style:{height:"10em"},children:n.jsx(e,{})})})]},Me=["MultiSelect","FreeSolo"];export{Ee as FreeSolo,je as MultiSelect,Me as __namedExportsOrder,_e as default};
