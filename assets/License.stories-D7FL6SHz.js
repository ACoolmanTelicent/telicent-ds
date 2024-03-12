import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as w}from"./index-Bl6ORisp.js";import{T as S}from"./TeliBrand-BBwUq76g.js";import{T as L}from"./TeliButton-BHrGmTW6.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-dIKOytT1.js";import"./ButtonBase-DceNHgrg.js";import"./extends-CCbyfPlC.js";import"./createTheme-CxKjqECZ.js";import"./styled-B4o22OB_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BBmpo-GE.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useForkRef-ByGBP3wL.js";import"./useSlotProps-PXix3Ffb.js";import"./mergeSlotProps-CRt2QW0J.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-BKo43FI9.js";import"./Grow-v3a2vyMz.js";import"./index-BtM5VmRH.js";import"./useControlled-BAdDSZ1i.js";import"./useId-D6gHonEB.js";const D={"masked-overflow":"_masked-overflow_jaxa9_1"},a=({appName:i,appVersion:l,expiryDate:n,licenseCopy:d,onAcknowledge:R})=>{if(!i)throw new Error("Application name is not provided");if(!l)throw new Error("Application version is not provided");if(!d)throw new Error("Application license copy is not provided");const A=new Date,o=n?new Date(n):void 0,m=(o==null?void 0:o.toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"}))||void 0,u=n&&o?A>=o:!1;return e.jsx("div",{className:"bg-gradient-to-b from-app-color to-app-color-800 p-2 max-w-4xl rounded",children:e.jsxs("div",{className:"bg-black-100 dark:text-whiteSmoke p-5 flex flex-col gap-y-6 rounded",children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx(S,{appName:i,className:"justify-center"}),e.jsxs("p",{className:"text-sm text-center font-medium",children:["Version ",l]})]}),e.jsx("div",{id:"license-copy",className:w("flex flex-col gap-y-5 max-h-48 md:max-h-96 overflow-y-scroll",D["masked-overflow"]),children:d}),e.jsxs("div",{className:"flex flex-col gap-y-2 items-center",children:[u&&e.jsx("strong",{children:"License has expired!"}),!u&&m&&e.jsxs("strong",{children:["Expires on ",m]}),e.jsx(L,{variant:"primary",onClick:R,children:"Acknowledge"})]})]})})};try{a.displayName="License",a.__docgenInfo={description:"",displayName:"License",props:{appName:{defaultValue:null,description:"Telicent application name",name:"appName",required:!0,type:{name:"string"}},appVersion:{defaultValue:null,description:"Telicent application version (should be the same as the one found in package.json)",name:"appVersion",required:!0,type:{name:"string"}},expiryDate:{defaultValue:null,description:"License expiration date",name:"expiryDate",required:!1,type:{name:"string | Date"}},licenseCopy:{defaultValue:null,description:"License copyright text",name:"licenseCopy",required:!0,type:{name:"ReactNode"}},onAcknowledge:{defaultValue:null,description:"Handler for when acknowledge button is pressed",name:"onAcknowledge",required:!1,type:{name:"(() => void)"}}}}}catch{}const Z={component:a},O=new Date,p=new Date(O);p.setDate(p.getDate()+1);const c=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"MIT License "}),e.jsx("p",{children:"Copyright (c) 2023 Telicent "}),e.jsx("p",{children:"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."}),e.jsx("p",{children:"THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."})]}),s={args:{appName:"design system",appVersion:"1.3",expiryDate:p,licenseCopy:c}},t={args:{appName:"design system",appVersion:"1.3",expiryDate:O,licenseCopy:c}},r={args:{appName:"design system",appVersion:"1.3",licenseCopy:c}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: "design system",
    appVersion: "1.3",
    expiryDate: tomorrow,
    licenseCopy: MitLicense
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var E,N,g;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    appName: "design system",
    appVersion: "1.3",
    expiryDate: today,
    licenseCopy: MitLicense
  }
}`,...(g=(N=t.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var y,T,I;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    appName: "design system",
    appVersion: "1.3",
    licenseCopy: MitLicense
  }
}`,...(I=(T=r.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const $=["Example","ExpiredLicenseExample","NoDateExample"];export{s as Example,t as ExpiredLicenseExample,r as NoDateExample,$ as __namedExportsOrder,Z as default};