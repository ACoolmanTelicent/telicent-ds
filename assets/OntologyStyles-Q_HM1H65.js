import{j as m}from"./jsx-runtime-CKrituN3.js";import{u as h}from"./useQuery-Cljj7LH1.js";import{r as l}from"./index-CBqU2yxZ.js";import{l as S}from"./lodash-BYTxXjAY.js";const c=t=>t&&t.startsWith("http")&&t.includes("#"),i=t=>{if(c(t)){const e=t.split("#");return e.length>1?e[1]:t}return t},I=t=>{if(t){const e=/(\b[a-zA-Z0-9])?/g,o=t.match(e);if(o)return o.join("").slice(0,3)}return console.warn(`Telicent DS (getInitials): Unable to get initials from "${t}"`),""},u=t=>{if(c(t)){const e=t.split("#");if(e.length===2)return I(S.startCase(e[1]))}return t??""},O=t=>Object.entries(t).map(([e,o])=>({classUri:e,backgroundColor:o.defaultStyles.dark.backgroundColor,color:o.defaultStyles.dark.color,iconFallbackText:u(e),alt:i(e),shape:o.defaultStyles.shape,faUnicode:o.defaultIcons.faUnicode,faIcon:o.defaultIcons.faIcon})),d=l.createContext(null),a=({service:t,children:e})=>{const r=h({queryKey:["ontology-styles"],queryFn:()=>t.getStyles(),refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1,retry:!1,staleTime:864e5,enabled:!!t,select:O}).data??[],f=n=>{const s=r.find(p=>p.classUri===n);if(s)return s;const y=i(n),g=u(n);return{classUri:n,color:"#DDDDDD",backgroundColor:"#121212",iconFallbackText:g,alt:y}};return m.jsx(d.Provider,{value:{styles:r,findIcon:f},children:e})},T=()=>{const t=l.useContext(d);if(!t)throw new Error("useOntologyService has to be used within <OntologyStylesProvider />");return t};try{a.displayName="OntologyStylesProvider",a.__docgenInfo={description:"",displayName:"OntologyStylesProvider",props:{service:{defaultValue:null,description:"",name:"service",required:!0,type:{name:"OntologyService"}}}}}catch{}export{a as O,T as u};
