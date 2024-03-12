import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as h}from"./index-CBqU2yxZ.js";import{q as B,T as G}from"./TeliTypeIcon-nuHq-AQP.js";import{T as g}from"./TeliButton-BHrGmTW6.js";import{S as P,c as m}from"./custom-options-BrjBLOFN.js";import{T as N,b as A,a as I}from"./TeliList-BGfGVlYi.js";import{C as H}from"./ClockRotateLeft-C6yht_pZ.js";import"./TeliThemeProvider-U2jhY-95.js";import{D as M}from"./index-DRTUEisB.js";import{D as U}from"./telidialog-Gwmy8Osb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OntologyStyles-Q_HM1H65.js";import"./useQuery-Cljj7LH1.js";import"./lodash-BYTxXjAY.js";import"./Avatar-MJsT8Irj.js";import"./createTheme-CxKjqECZ.js";import"./extends-CCbyfPlC.js";import"./styled-B4o22OB_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BBmpo-GE.js";import"./createSvgIcon-Ax4BTbPH.js";import"./mergeSlotProps-CRt2QW0J.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ByGBP3wL.js";import"./index-Bl6ORisp.js";import"./ButtonBase-DceNHgrg.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useSlotProps-PXix3Ffb.js";import"./Popper-BKo43FI9.js";import"./Grow-v3a2vyMz.js";import"./index-BtM5VmRH.js";import"./useControlled-BAdDSZ1i.js";import"./useId-D6gHonEB.js";import"./TeliSpinner-D-cDFW7-.js";import"./TeliAddIcon-DOZEh0gI.js";import"./index-DSy6vDdj.js";import"./index-D3ylJrlI.js";import"./Icon-DPzi7t-K.js";import"./TeliCloseIcon-D1IiTobh.js";import"./TeliDeleteIcon-DEYyW2SS.js";import"./TeliEditIcon-Bt5DYGfs.js";import"./TeliSearchIcon-DSQ35rhL.js";import"./TeliSortIcons-CPr6Raf0.js";import"./TeliAutocomplete-BI37ACUF.js";import"./Select-C8RJGQqm.js";import"./useFormControl-Bd6AoRoF.js";import"./isMuiElement-BxNAcTwJ.js";import"./Menu-79bHUSdP.js";import"./Modal-CXP5e93J.js";import"./Paper-buxdT74x.js";import"./ownerWindow-C4NkdjO3.js";import"./debounce-Be36O1Ab.js";import"./MenuList-DFNhk0xs.js";import"./List-lrBDYNc7.js";import"./Chip-DRH53zd8.js";import"./TextField-pm-3t2h4.js";import"./index-dIKOytT1.js";const a=({open:t,onClose:n,children:o,...i})=>e.jsxs(U,{open:t,onClose:n,PaperProps:{sx:{maxHeight:"100% - 64px",minHeight:340,padding:"12px",minWidth:"540px"},className:"space-y-5"},children:[e.jsx(P,{fullWidth:!0,listboxMaxHeight:220,...i}),o]});try{a.displayName="SearchAutocompleteDialog",a.__docgenInfo={description:"",displayName:"SearchAutocompleteDialog",props:{autoFocus:{defaultValue:null,description:"If true, the input element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, value: string | { label: string; } | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<...>) => void)"}},label:{defaultValue:null,description:"The label content",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"If true, the component will indicate an error.",name:"error",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"The width of the component",name:"width",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"ReactNode"}},autoHighlight:{defaultValue:null,description:"",name:"autoHighlight",required:!1,type:{name:"boolean"}},getOptionKey:{defaultValue:null,description:"",name:"getOptionKey",required:!1,type:{name:"((option: string | { label: string; }) => string | number)"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"((option: string | { label: string; }) => string)"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},isOptionEqualToValue:{defaultValue:null,description:"",name:"isOptionEqualToValue",required:!1,type:{name:"((option: { label: string; }, value: { label: string; }) => boolean)"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void)"}},openOnFocus:{defaultValue:null,description:"",name:"openOnFocus",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of options.",name:"options",required:!0,type:{name:"readonly { label: string; }[]"}},helperText:{defaultValue:null,description:`Can be used to give context. If ' ' is provided, the component reserves one
line height for displaying a future message.`,name:"helperText",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"The short hint displayed in the input before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:'((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)'}}}}}catch{}const w=({children:t})=>e.jsxs("div",{children:[e.jsx("h2",{className:"uppercase text-sm",children:"recent searches"}),t]}),u=({nothingFoundText:t="Nothing found",children:n=null})=>n?e.jsx(w,{children:n}):e.jsx(w,{children:e.jsx("p",{className:"grid place-content-center mt-24 text-whiteSmoke-300",children:t})});try{u.displayName="RecentSearches",u.__docgenInfo={description:"",displayName:"RecentSearches",props:{nothingFoundText:{defaultValue:{value:"Nothing found"},description:"",name:"nothingFoundText",required:!1,type:{name:"string"}}}}}catch{}const c=({totalResults:t,nothingFoundText:n="Nothing found",children:o=null})=>o?e.jsxs("div",{children:[e.jsxs("h2",{className:"uppercase text-sm",children:[t," search results"]}),o]}):e.jsx("div",{children:e.jsx("p",{className:"grid place-content-center mt-28 text-whiteSmoke-300",children:n})});try{c.displayName="SearchResults",c.__docgenInfo={description:"",displayName:"SearchResults",props:{totalResults:{defaultValue:null,description:"",name:"totalResults",required:!1,type:{name:"number"}},nothingFoundText:{defaultValue:{value:"Nothing found"},description:"",name:"nothingFoundText",required:!1,type:{name:"string"}}}}}catch{}const y=[{id:"http://environment.data.gov.uk/flood-monitoring/id/floodAreas/065FWC8101",types:["http://ies.data.gov.uk/ontology/ies4#FloodArea"],label:"Cowes, East Cowes, and Newport"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov059",types:["http://ies.data.gov.uk/ontology/ies4#Library"],label:"Cowes Library"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov072",types:["http://ies.data.gov.uk/ontology/ies4#Bandstand"],label:"Cowes Bandstand"},{id:"https://www.iow.gov.uk/DigitalTwin#C009",types:["http://ies.data.gov.uk/ontology/ies4#TelecommunicationsComplex"],label:"Cowes Communications Mast"},{id:"https://www.iow.gov.uk/DigitalTwin#C024",types:["http://ies.data.gov.uk/ontology/ies4#TelecommunicationsExchange"],label:"Cowes Telephone exchange"},{id:"https://www.iow.gov.uk/DigitalTwin#Ed003",types:["http://ies.data.gov.uk/ontology/ies4#FurtherEducationalCollege"],label:"Cowes Enterprise College"},{id:"https://www.iow.gov.uk/DigitalTwin#F001",types:["http://ies.data.gov.uk/ontology/ies4#LiquidFuelStorageComplex"],label:"Cowes Harbour Fuels"},{id:"https://www.iow.gov.uk/DigitalTwin#W018",types:["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],label:"Esplanade Cowes Wps"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov060",types:["http://ies.data.gov.uk/ontology/ies4#PrimarySchool"],label:"Cowes Primary School"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov064",types:["http://ies.data.gov.uk/ontology/ies4#CommunityCentre"],label:"Cowes Youth Centre"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov079",types:["http://ies.data.gov.uk/ontology/ies4#Facility"],label:"Cowes Sea Cadets"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov106",types:["http://ies.data.gov.uk/ontology/ies4#CommunityCentre"],label:"Cowes Childrens Centre"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov116",types:["http://ies.data.gov.uk/ontology/ies4#PrimarySchool"],label:"East Cowes Primary"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov121",types:["http://ies.data.gov.uk/ontology/ies4#Cemetery"],label:"East Cowes Cemetery"},{id:"https://www.iow.gov.uk/DigitalTwin#E001",types:["http://ies.data.gov.uk/ontology/ies4#OilFiredPowerGenerationComplex"],label:"East Cowes Power Station"},{id:"https://www.iow.gov.uk/DigitalTwin#T024",types:["http://ies.data.gov.uk/ontology/ies4#FerryPort"],label:"East Cowes Ferry Terminal"},{id:"https://www.iow.gov.uk/DigitalTwin#T025",types:["http://ies.data.gov.uk/ontology/ies4#FerryPort"],label:"Cowes Ferry Terminal (foot)"},{id:"https://www.iow.gov.uk/DigitalTwin#W017",types:["http://ies.data.gov.uk/ontology/ies4#WastewaterDisposalComplex"],label:"Egypt Point Cowes CSO"},{id:"https://www.iow.gov.uk/DigitalTwin#W039",types:["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],label:"Market Hill Cowes Wps"},{id:"https://www.iow.gov.uk/DigitalTwin#W041",types:["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],label:"Medina Road Cowes Wps"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov077",types:["http://ies.data.gov.uk/ontology/ies4#Office"],label:"Cowes Floating Bridge Office"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov096",types:["http://ies.data.gov.uk/ontology/ies4#CycleTrack"],label:"Land off Cowes Cycletrack"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov102",types:["http://ies.data.gov.uk/ontology/ies4#Facility"],label:"Cowes Week Temporary Supply"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov135",types:["http://ies.data.gov.uk/ontology/ies4#CommunityCentre"],label:"East Cowes Childrens Centre"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov138",types:["http://ies.data.gov.uk/ontology/ies4#Facility"],label:"East Cowes Beach Huts"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov141",types:["http://ies.data.gov.uk/ontology/ies4#Facility"],label:"East Cowes MUGA Queensgate"},{id:"https://www.iow.gov.uk/DigitalTwin#Gov151",types:["http://ies.data.gov.uk/ontology/ies4#Facility"],label:"East Cowes Group Home"},{id:"https://www.iow.gov.uk/DigitalTwin#E002",types:["http://ies.data.gov.uk/ontology/ies4#LowVoltageElectricitySubstationComplex"],label:"East Cowes 33kv /11kV Substation"},{id:"https://www.iow.gov.uk/DigitalTwin#E003",types:["http://ies.data.gov.uk/ontology/ies4#HighVoltageElectricitySubstationComplex"],label:"East Cowes 132/33kV Substation"},{id:"https://www.iow.gov.uk/DigitalTwin#T044",types:["http://ies.data.gov.uk/ontology/ies4#Road"],label:"Road - A3020 Newport to Cowes"},{id:"https://www.iow.gov.uk/DigitalTwin#W008",types:["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],label:"Albany Road East Cowes Wps"},{id:"https://www.iow.gov.uk/DigitalTwin#W059",types:["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],label:"St Marys Road Cowes Wps"},{id:"https://www.iow.gov.uk/DigitalTwin#T043",types:["http://ies.data.gov.uk/ontology/ies4#HighwayRoundabout"],label:"Road - A3021 Palmers Brook Farm Roundabout to East Cowes"}],z=new B("http://localhost:3030/","ontology"),Je={component:a,parameters:{docs:{description:{component:`This component utilises the Dialog and SearchAutocomplete 
        components. It should be used in situations where the searching 
        functionality is not the main feature of the application.`}}},decorators:[t=>e.jsx(M,{ontologyService:z,children:e.jsx(t,{})})]},l={args:{open:!1,options:m,children:e.jsx(c,{totalResults:y.length,children:e.jsx(N,{children:y.map(t=>e.jsx(A,{disablePadding:!0,divider:!0,children:e.jsxs(I,{children:[e.jsx(G,{size:"sm",type:t.types[0]}),t.label]})}))})}),getOptionKey:t=>t.id},render:t=>{const[n,o]=h.useState(t.open),i=()=>{o(!0)},s=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex gap-x-3",children:e.jsx(g,{variant:"primary",onClick:i,children:"Open model with results"})}),e.jsx(a,{open:n,onClose:s,options:t.options,getOptionKey:t.getOptionKey,children:t.children})]})}},r={args:{open:!1,options:m,children:e.jsx(c,{}),getOptionKey:t=>t.id},render:t=>{const[n,o]=h.useState(t.open),i=()=>{o(!0)},s=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"primary",onClick:i,children:"Open model without results"}),e.jsx(a,{options:t.options,open:n,onClose:s,getOptionKey:t.getOptionKey,children:t.children})]})}},p={args:{open:!1,options:m,children:e.jsx(u,{children:e.jsx(N,{children:e.jsx(A,{disablePadding:!0,divider:!0,children:e.jsxs(I,{children:[e.jsx(H,{}),"Cowes"]})})})})},render:t=>{const[n,o]=h.useState(t.open),i=()=>{o(!0)},s=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"primary",onClick:i,children:"Open model"}),e.jsx(a,{options:t.options,open:n,onClose:s,getOptionKey:t.getOptionKey,children:t.children})]})}},d={args:{open:!1,options:m,children:e.jsx(u,{}),getOptionKey:t=>t.id},render:t=>{const[n,o]=h.useState(t.open),i=()=>{o(!0)},s=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"primary",onClick:i,children:"Open model"}),e.jsx(a,{options:t.options,open:n,onClose:s,getOptionKey:t.getOptionKey,children:t.children})]})}};var v,f,C,k,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: false,
    options: customOptions,
    children: <SearchResults totalResults={RESULTS.length}>
        <TeliList>
          {RESULTS.map(result => <TeliListItem disablePadding divider>
              <TeliListItemButton>
                <TeliTypeIcon size="sm" type={result.types[0]} />
                {result.label}
              </TeliListItemButton>
            </TeliListItem>)}
        </TeliList>
      </SearchResults>,
    getOptionKey: option => (option as CustomOption).id
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <div className="flex gap-x-3">
          <TeliButton variant="primary" onClick={handleOpen}>
            Open model with results
          </TeliButton>
        </div>
        <SearchAutocompleteDialog open={open} onClose={handleClose} options={args.options} getOptionKey={args.getOptionKey}>
          {args.children}
        </SearchAutocompleteDialog>
      </>;
  }
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source},description:{story:"This is an example of how the component can be rendered with search results",...(T=(k=l.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var b,O,x,S,D;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: false,
    options: customOptions,
    children: <SearchResults />,
    getOptionKey: option => (option as CustomOption).id
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <TeliButton variant="primary" onClick={handleOpen}>
          Open model without results
        </TeliButton>
        <SearchAutocompleteDialog options={args.options} open={open} onClose={handleClose} getOptionKey={args.getOptionKey}>
          {args.children}
        </SearchAutocompleteDialog>
      </>;
  }
}`,...(x=(O=r.parameters)==null?void 0:O.docs)==null?void 0:x.source},description:{story:`When the search results component has the no children. A message will be
displayed to inform the user that nothing was found.`,...(D=(S=r.parameters)==null?void 0:S.docs)==null?void 0:D.description}}};var R,j,E,L,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    open: false,
    options: customOptions,
    children: <RecentSearches>
        <TeliList>
          <TeliListItem disablePadding divider>
            <TeliListItemButton>
              <ClockRotateLeft />
              Cowes
            </TeliListItemButton>
          </TeliListItem>
        </TeliList>
      </RecentSearches>
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <TeliButton variant="primary" onClick={handleOpen}>
          Open model
        </TeliButton>
        <SearchAutocompleteDialog options={args.options} open={open} onClose={handleClose} getOptionKey={args.getOptionKey}>
          {args.children}
        </SearchAutocompleteDialog>
      </>;
  }
}`,...(E=(j=p.parameters)==null?void 0:j.docs)==null?void 0:E.source},description:{story:`It's useful to allow the user to continue where they left off by providing
them with their most recent searches.`,...(V=(L=p.parameters)==null?void 0:L.docs)==null?void 0:V.description}}};var F,q,W,_,K;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    open: false,
    options: customOptions,
    children: <RecentSearches />,
    getOptionKey: option => (option as CustomOption).id
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <TeliButton variant="primary" onClick={handleOpen}>
          Open model
        </TeliButton>
        <SearchAutocompleteDialog options={args.options} open={open} onClose={handleClose} getOptionKey={args.getOptionKey}>
          {args.children}
        </SearchAutocompleteDialog>
      </>;
  }
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source},description:{story:`Similar to the search results component, when the recent search component
doesn't have any children it will display a message informing the user no
recent searches were found.`,...(K=(_=d.parameters)==null?void 0:_.docs)==null?void 0:K.description}}};const Xe=["SearchResultsWithResults","SearchResultsWithoutResults","RecentSearchList","RecentSearchesEmptyList"];export{p as RecentSearchList,d as RecentSearchesEmptyList,l as SearchResultsWithResults,r as SearchResultsWithoutResults,Xe as __namedExportsOrder,Je as default};
