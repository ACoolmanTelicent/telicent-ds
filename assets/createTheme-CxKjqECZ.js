import{r as se}from"./index-CBqU2yxZ.js";import{j as Ot}from"./jsx-runtime-CKrituN3.js";import{_}from"./extends-CCbyfPlC.js";import{a as nt}from"./_commonjsHelpers-BosuxZz1.js";const St={black:"#000",white:"#fff"},oe=St,Tt={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},N=Tt,_t={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},U=_t,Rt={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},q=Rt,Pt={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Y=Pt,Et={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},X=Et,Bt={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ne=Bt,jt={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Mt=jt;function ce(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const It=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),ni="$$material";function ee(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Kt(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function zt(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Wt=function(){function e(r){var n=this;this._insertTag=function(i){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,a),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(zt(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Kt(i);try{a.insertRule(n,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),R="-ms-",be="-moz-",g="-webkit-",it="comm",je="rule",Me="decl",Lt="@import",at="@keyframes",Dt="@layer",Ht=Math.abs,we=String.fromCharCode,Gt=Object.assign;function Ft(e,t){return T(e,0)^45?(((t<<2^T(e,0))<<2^T(e,1))<<2^T(e,2))<<2^T(e,3):0}function st(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function m(e,t,r){return e.replace(t,r)}function Pe(e,t){return e.indexOf(t)}function T(e,t){return e.charCodeAt(t)|0}function ue(e,t,r){return e.slice(t,r)}function W(e){return e.length}function Ie(e){return e.length}function pe(e,t){return t.push(e),e}function Ut(e,t){return e.map(t).join("")}var $e=1,V=1,ot=0,E=0,S=0,te="";function ke(e,t,r,n,i,a,s){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:$e,column:V,length:s,return:""}}function ie(e,t){return Gt(ke("",null,null,"",null,null,0),e,{length:-e.length},t)}function qt(){return S}function Yt(){return S=E>0?T(te,--E):0,V--,S===10&&(V=1,$e--),S}function j(){return S=E<ot?T(te,E++):0,V++,S===10&&(V=1,$e++),S}function L(){return T(te,E)}function ge(){return E}function le(e,t){return ue(te,e,t)}function fe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ct(e){return $e=V=1,ot=W(te=e),E=0,[]}function ut(e){return te="",e}function me(e){return st(le(E-1,Ee(e===91?e+2:e===40?e+1:e)))}function Xt(e){for(;(S=L())&&S<33;)j();return fe(e)>2||fe(S)>3?"":" "}function Jt(e,t){for(;--t&&j()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return le(e,ge()+(t<6&&L()==32&&j()==32))}function Ee(e){for(;j();)switch(S){case e:return E;case 34:case 39:e!==34&&e!==39&&Ee(S);break;case 40:e===41&&Ee(e);break;case 92:j();break}return E}function Zt(e,t){for(;j()&&e+S!==57;)if(e+S===84&&L()===47)break;return"/*"+le(t,E-1)+"*"+we(e===47?e:j())}function Qt(e){for(;!fe(L());)j();return le(e,E)}function Vt(e){return ut(ye("",null,null,null,[""],e=ct(e),0,[0],e))}function ye(e,t,r,n,i,a,s,o,u){for(var l=0,h=0,d=s,f=0,y=0,p=0,c=1,v=1,b=1,A=0,P="",F=i,H=a,z=n,x=P;v;)switch(p=A,A=j()){case 40:if(p!=108&&T(x,d-1)==58){Pe(x+=m(me(A),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:x+=me(A);break;case 9:case 10:case 13:case 32:x+=Xt(p);break;case 92:x+=Jt(ge()-1,7);continue;case 47:switch(L()){case 42:case 47:pe(er(Zt(j(),ge()),t,r),u);break;default:x+="/"}break;case 123*c:o[l++]=W(x)*b;case 125*c:case 59:case 0:switch(A){case 0:case 125:v=0;case 59+h:b==-1&&(x=m(x,/\f/g,"")),y>0&&W(x)-d&&pe(y>32?qe(x+";",n,r,d-1):qe(m(x," ","")+";",n,r,d-2),u);break;case 59:x+=";";default:if(pe(z=Ue(x,t,r,l,h,i,o,P,F=[],H=[],d),a),A===123)if(h===0)ye(x,t,z,z,F,a,d,o,H);else switch(f===99&&T(x,3)===110?100:f){case 100:case 108:case 109:case 115:ye(e,z,z,n&&pe(Ue(e,z,z,0,0,i,o,P,i,F=[],d),H),i,H,d,o,n?F:H);break;default:ye(x,z,z,z,[""],H,0,o,H)}}l=h=y=0,c=b=1,P=x="",d=s;break;case 58:d=1+W(x),y=p;default:if(c<1){if(A==123)--c;else if(A==125&&c++==0&&Yt()==125)continue}switch(x+=we(A),A*c){case 38:b=h>0?1:(x+="\f",-1);break;case 44:o[l++]=(W(x)-1)*b,b=1;break;case 64:L()===45&&(x+=me(j())),f=L(),h=d=W(P=x+=Qt(ge())),A++;break;case 45:p===45&&W(x)==2&&(c=0)}}return a}function Ue(e,t,r,n,i,a,s,o,u,l,h){for(var d=i-1,f=i===0?a:[""],y=Ie(f),p=0,c=0,v=0;p<n;++p)for(var b=0,A=ue(e,d+1,d=Ht(c=s[p])),P=e;b<y;++b)(P=st(c>0?f[b]+" "+A:m(A,/&\f/g,f[b])))&&(u[v++]=P);return ke(e,t,r,i===0?je:o,u,l,h)}function er(e,t,r){return ke(e,t,r,it,we(qt()),ue(e,2,-2),0)}function qe(e,t,r,n){return ke(e,t,r,Me,ue(e,0,n),ue(e,n+1,-1),n)}function Z(e,t){for(var r="",n=Ie(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function tr(e,t,r,n){switch(e.type){case Dt:if(e.children.length)break;case Lt:case Me:return e.return=e.return||e.value;case it:return"";case at:return e.return=e.value+"{"+Z(e.children,n)+"}";case je:e.value=e.props.join(",")}return W(r=Z(e.children,n))?e.return=e.value+"{"+r+"}":""}function rr(e){var t=Ie(e);return function(r,n,i,a){for(var s="",o=0;o<t;o++)s+=e[o](r,n,i,a)||"";return s}}function nr(e){return function(t){t.root||(t=t.return)&&e(t)}}var ir=function(t,r,n){for(var i=0,a=0;i=a,a=L(),i===38&&a===12&&(r[n]=1),!fe(a);)j();return le(t,E)},ar=function(t,r){var n=-1,i=44;do switch(fe(i)){case 0:i===38&&L()===12&&(r[n]=1),t[n]+=ir(E-1,r,n);break;case 2:t[n]+=me(i);break;case 4:if(i===44){t[++n]=L()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=we(i)}while(i=j());return t},sr=function(t,r){return ut(ar(ct(t),r))},Ye=new WeakMap,or=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Ye.get(n))&&!i){Ye.set(t,!0);for(var a=[],s=sr(r,a),o=n.props,u=0,l=0;u<s.length;u++)for(var h=0;h<o.length;h++,l++)t.props[l]=a[u]?s[u].replace(/&\f/g,o[h]):o[h]+" "+s[u]}}},cr=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function ft(e,t){switch(Ft(e,t)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+be+e+R+e+e;case 6828:case 4268:return g+e+R+e+e;case 6165:return g+e+R+"flex-"+e+e;case 5187:return g+e+m(e,/(\w+).+(:[^]+)/,g+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return g+e+R+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return g+e+R+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return g+e+R+m(e,"shrink","negative")+e;case 5292:return g+e+R+m(e,"basis","preferred-size")+e;case 6060:return g+"box-"+m(e,"-grow","")+g+e+R+m(e,"grow","positive")+e;case 4554:return g+m(e,/([^-])(transform)/g,"$1"+g+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(W(e)-1-t>6)switch(T(e,t+1)){case 109:if(T(e,t+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+be+(T(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pe(e,"stretch")?ft(m(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(T(e,t+1)!==115)break;case 6444:switch(T(e,W(e)-3-(~Pe(e,"!important")&&10))){case 107:return m(e,":",":"+g)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+g+(T(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(T(e,t+11)){case 114:return g+e+R+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+R+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+R+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return g+e+R+e+e}return e}var ur=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case Me:t.return=ft(t.value,t.length);break;case at:return Z([ie(t,{value:m(t.value,"@","@"+g)})],i);case je:if(t.length)return Ut(t.props,function(a){switch(Nt(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Z([ie(t,{props:[m(a,/:(read-\w+)/,":"+be+"$1")]})],i);case"::placeholder":return Z([ie(t,{props:[m(a,/:(plac\w+)/,":"+g+"input-$1")]}),ie(t,{props:[m(a,/:(plac\w+)/,":"+be+"$1")]}),ie(t,{props:[m(a,/:(plac\w+)/,R+"input-$1")]})],i)}return""})}},fr=[ur],lt=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(c){var v=c.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(c),c.setAttribute("data-s",""))})}var i=t.stylisPlugins||fr,a={},s,o=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(c){for(var v=c.getAttribute("data-emotion").split(" "),b=1;b<v.length;b++)a[v[b]]=!0;o.push(c)});var u,l=[or,cr];{var h,d=[tr,nr(function(c){h.insert(c)})],f=rr(l.concat(i,d)),y=function(v){return Z(Vt(v),f)};u=function(v,b,A,P){h=A,y(v?v+"{"+b.styles+"}":b.styles),P&&(p.inserted[b.name]=!0)}}var p={key:r,sheet:new Wt({key:r,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:u};return p.sheet.hydrate(o),p},dt=se.createContext(typeof HTMLElement<"u"?lt({key:"css"}):null),lr=dt.Provider,ii=function(t){return se.forwardRef(function(r,n){var i=se.useContext(dt);return t(r,i,n)})},dr=se.createContext({});let Be;typeof document=="object"&&(Be=lt({key:"css",prepend:!0}));function ai(e){const{injectFirst:t,children:r}=e;return t&&Be?Ot.jsx(lr,{value:Be,children:r}):r}function J(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ht(e){if(!J(e))return e;const t={};return Object.keys(e).forEach(r=>{t[r]=ht(e[r])}),t}function D(e,t,r={clone:!0}){const n=r.clone?_({},e):e;return J(e)&&J(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(J(t[i])&&i in e&&J(e[i])?n[i]=D(e[i],t[i],r):r.clone?n[i]=J(t[i])?ht(t[i]):t[i]:n[i]=t[i])}),n}const hr=["values","unit","step"],pr=e=>{const t=Object.keys(e).map(r=>({key:r,val:e[r]}))||[];return t.sort((r,n)=>r.val-n.val),t.reduce((r,n)=>_({},r,{[n.key]:n.val}),{})};function gr(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,i=ee(e,hr),a=pr(t),s=Object.keys(a);function o(f){return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${r})`}function u(f){return`@media (max-width:${(typeof t[f]=="number"?t[f]:f)-n/100}${r})`}function l(f,y){const p=s.indexOf(y);return`@media (min-width:${typeof t[f]=="number"?t[f]:f}${r}) and (max-width:${(p!==-1&&typeof t[s[p]]=="number"?t[s[p]]:y)-n/100}${r})`}function h(f){return s.indexOf(f)+1<s.length?l(f,s[s.indexOf(f)+1]):o(f)}function d(f){const y=s.indexOf(f);return y===0?o(s[1]):y===s.length-1?u(s[y]):l(f,s[s.indexOf(f)+1]).replace("@media","@media not all and")}return _({keys:s,values:a,up:o,down:u,between:l,only:h,not:d,unit:r},i)}const mr={borderRadius:4},yr=mr;function ae(e,t){return t?D(e,t,{clone:!1}):e}const Ke={xs:0,sm:600,md:900,lg:1200,xl:1536},Xe={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Ke[e]}px)`};function G(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const a=n.breakpoints||Xe;return t.reduce((s,o,u)=>(s[a.up(a.keys[u])]=r(t[u]),s),{})}if(typeof t=="object"){const a=n.breakpoints||Xe;return Object.keys(t).reduce((s,o)=>{if(Object.keys(a.values||Ke).indexOf(o)!==-1){const u=a.up(o);s[u]=r(t[o],o)}else{const u=o;s[u]=t[u]}return s},{})}return r(t)}function pt(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((n,i)=>{const a=e.up(i);return n[a]={},n},{}))||{}}function gt(e,t){return e.reduce((r,n)=>{const i=r[n];return(!i||Object.keys(i).length===0)&&delete r[n],r},t)}function si(e,...t){const r=pt(e),n=[r,...t].reduce((i,a)=>D(i,a),{});return gt(Object.keys(r),n)}function br(e,t){if(typeof e!="object")return{};const r={},n=Object.keys(t);return Array.isArray(e)?n.forEach((i,a)=>{a<e.length&&(r[i]=!0)}):n.forEach(i=>{e[i]!=null&&(r[i]=!0)}),r}function oi({values:e,breakpoints:t,base:r}){const n=r||br(e,t),i=Object.keys(n);if(i.length===0)return e;let a;return i.reduce((s,o,u)=>(Array.isArray(e)?(s[o]=e[u]!=null?e[u]:e[a],a=u):typeof e=="object"?(s[o]=e[o]!=null?e[o]:e[a],a=o):s[o]=e,s),{})}function mt(e){if(typeof e!="string")throw new Error(ce(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Ae(e,t,r=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&r){const n=`vars.${t}`.split(".").reduce((i,a)=>i&&i[a]?i[a]:null,e);if(n!=null)return n}return t.split(".").reduce((n,i)=>n&&n[i]!=null?n[i]:null,e)}function xe(e,t,r,n=r){let i;return typeof e=="function"?i=e(r):Array.isArray(e)?i=e[r]||n:i=Ae(e,r)||n,t&&(i=t(i,n,e)),i}function C(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:i}=e,a=s=>{if(s[t]==null)return null;const o=s[t],u=s.theme,l=Ae(u,n)||{};return G(s,o,d=>{let f=xe(l,i,d);return d===f&&typeof d=="string"&&(f=xe(l,i,`${t}${d==="default"?"":mt(d)}`,d)),r===!1?f:{[r]:f}})};return a.propTypes={},a.filterProps=[t],a}function xr(e){const t={};return r=>(t[r]===void 0&&(t[r]=e(r)),t[r])}const vr={m:"margin",p:"padding"},wr={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Je={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},$r=xr(e=>{if(e.length>2)if(Je[e])e=Je[e];else return[e];const[t,r]=e.split(""),n=vr[t],i=wr[r]||"";return Array.isArray(i)?i.map(a=>n+a):[n+i]}),ze=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],We=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...ze,...We];function de(e,t,r,n){var i;const a=(i=Ae(e,t,!1))!=null?i:r;return typeof a=="number"?s=>typeof s=="string"?s:a*s:Array.isArray(a)?s=>typeof s=="string"?s:a[s]:typeof a=="function"?a:()=>{}}function yt(e){return de(e,"spacing",8)}function he(e,t){if(typeof t=="string"||t==null)return t;const r=Math.abs(t),n=e(r);return t>=0?n:typeof n=="number"?-n:`-${n}`}function kr(e,t){return r=>e.reduce((n,i)=>(n[i]=he(t,r),n),{})}function Ar(e,t,r,n){if(t.indexOf(r)===-1)return null;const i=$r(r),a=kr(i,n),s=e[r];return G(e,s,a)}function bt(e,t){const r=yt(e.theme);return Object.keys(e).map(n=>Ar(e,t,n,r)).reduce(ae,{})}function $(e){return bt(e,ze)}$.propTypes={};$.filterProps=ze;function k(e){return bt(e,We)}k.propTypes={};k.filterProps=We;function Cr(e=8){if(e.mui)return e;const t=yt({spacing:e}),r=(...n)=>(n.length===0?[1]:n).map(a=>{const s=t(a);return typeof s=="number"?`${s}px`:s}).join(" ");return r.mui=!0,r}function Ce(...e){const t=e.reduce((n,i)=>(i.filterProps.forEach(a=>{n[a]=i}),n),{}),r=n=>Object.keys(n).reduce((i,a)=>t[a]?ae(i,t[a](n)):i,{});return r.propTypes={},r.filterProps=e.reduce((n,i)=>n.concat(i.filterProps),[]),r}function M(e){return typeof e!="number"?e:`${e}px solid`}function K(e,t){return C({prop:e,themeKey:"borders",transform:t})}const Or=K("border",M),Sr=K("borderTop",M),Tr=K("borderRight",M),_r=K("borderBottom",M),Rr=K("borderLeft",M),Pr=K("borderColor"),Er=K("borderTopColor"),Br=K("borderRightColor"),jr=K("borderBottomColor"),Mr=K("borderLeftColor"),Ir=K("outline",M),Kr=K("outlineColor"),Oe=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=de(e.theme,"shape.borderRadius",4),r=n=>({borderRadius:he(t,n)});return G(e,e.borderRadius,r)}return null};Oe.propTypes={};Oe.filterProps=["borderRadius"];Ce(Or,Sr,Tr,_r,Rr,Pr,Er,Br,jr,Mr,Oe,Ir,Kr);const Se=e=>{if(e.gap!==void 0&&e.gap!==null){const t=de(e.theme,"spacing",8),r=n=>({gap:he(t,n)});return G(e,e.gap,r)}return null};Se.propTypes={};Se.filterProps=["gap"];const Te=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=de(e.theme,"spacing",8),r=n=>({columnGap:he(t,n)});return G(e,e.columnGap,r)}return null};Te.propTypes={};Te.filterProps=["columnGap"];const _e=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=de(e.theme,"spacing",8),r=n=>({rowGap:he(t,n)});return G(e,e.rowGap,r)}return null};_e.propTypes={};_e.filterProps=["rowGap"];const zr=C({prop:"gridColumn"}),Wr=C({prop:"gridRow"}),Lr=C({prop:"gridAutoFlow"}),Dr=C({prop:"gridAutoColumns"}),Hr=C({prop:"gridAutoRows"}),Gr=C({prop:"gridTemplateColumns"}),Fr=C({prop:"gridTemplateRows"}),Nr=C({prop:"gridTemplateAreas"}),Ur=C({prop:"gridArea"});Ce(Se,Te,_e,zr,Wr,Lr,Dr,Hr,Gr,Fr,Nr,Ur);function Q(e,t){return t==="grey"?t:e}const qr=C({prop:"color",themeKey:"palette",transform:Q}),Yr=C({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Q}),Xr=C({prop:"backgroundColor",themeKey:"palette",transform:Q});Ce(qr,Yr,Xr);function B(e){return e<=1&&e!==0?`${e*100}%`:e}const Jr=C({prop:"width",transform:B}),Le=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=r=>{var n,i;const a=((n=e.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[r])||Ke[r];return a?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${a}${e.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:B(r)}};return G(e,e.maxWidth,t)}return null};Le.filterProps=["maxWidth"];const Zr=C({prop:"minWidth",transform:B}),Qr=C({prop:"height",transform:B}),Vr=C({prop:"maxHeight",transform:B}),en=C({prop:"minHeight",transform:B});C({prop:"size",cssProperty:"width",transform:B});C({prop:"size",cssProperty:"height",transform:B});const tn=C({prop:"boxSizing"});Ce(Jr,Le,Zr,Qr,Vr,en,tn);const rn={border:{themeKey:"borders",transform:M},borderTop:{themeKey:"borders",transform:M},borderRight:{themeKey:"borders",transform:M},borderBottom:{themeKey:"borders",transform:M},borderLeft:{themeKey:"borders",transform:M},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:M},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Oe},color:{themeKey:"palette",transform:Q},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Q},backgroundColor:{themeKey:"palette",transform:Q},p:{style:k},pt:{style:k},pr:{style:k},pb:{style:k},pl:{style:k},px:{style:k},py:{style:k},padding:{style:k},paddingTop:{style:k},paddingRight:{style:k},paddingBottom:{style:k},paddingLeft:{style:k},paddingX:{style:k},paddingY:{style:k},paddingInline:{style:k},paddingInlineStart:{style:k},paddingInlineEnd:{style:k},paddingBlock:{style:k},paddingBlockStart:{style:k},paddingBlockEnd:{style:k},m:{style:$},mt:{style:$},mr:{style:$},mb:{style:$},ml:{style:$},mx:{style:$},my:{style:$},margin:{style:$},marginTop:{style:$},marginRight:{style:$},marginBottom:{style:$},marginLeft:{style:$},marginX:{style:$},marginY:{style:$},marginInline:{style:$},marginInlineStart:{style:$},marginInlineEnd:{style:$},marginBlock:{style:$},marginBlockStart:{style:$},marginBlockEnd:{style:$},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Se},rowGap:{style:_e},columnGap:{style:Te},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:B},maxWidth:{style:Le},minWidth:{transform:B},height:{transform:B},maxHeight:{transform:B},minHeight:{transform:B},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},De=rn;function nn(...e){const t=e.reduce((n,i)=>n.concat(Object.keys(i)),[]),r=new Set(t);return e.every(n=>r.size===Object.keys(n).length)}function an(e,t){return typeof e=="function"?e(t):e}function sn(){function e(r,n,i,a){const s={[r]:n,theme:i},o=a[r];if(!o)return{[r]:n};const{cssProperty:u=r,themeKey:l,transform:h,style:d}=o;if(n==null)return null;if(l==="typography"&&n==="inherit")return{[r]:n};const f=Ae(i,l)||{};return d?d(s):G(s,n,p=>{let c=xe(f,h,p);return p===c&&typeof p=="string"&&(c=xe(f,h,`${r}${p==="default"?"":mt(p)}`,p)),u===!1?c:{[u]:c}})}function t(r){var n;const{sx:i,theme:a={}}=r||{};if(!i)return null;const s=(n=a.unstable_sxConfig)!=null?n:De;function o(u){let l=u;if(typeof u=="function")l=u(a);else if(typeof u!="object")return u;if(!l)return null;const h=pt(a.breakpoints),d=Object.keys(h);let f=h;return Object.keys(l).forEach(y=>{const p=an(l[y],a);if(p!=null)if(typeof p=="object")if(s[y])f=ae(f,e(y,p,a,s));else{const c=G({theme:a},p,v=>({[y]:v}));nn(c,p)?f[y]=t({sx:p,theme:a}):f=ae(f,c)}else f=ae(f,e(y,p,a,s))}),gt(d,f)}return Array.isArray(i)?i.map(o):o(i)}return t}const He=sn();He.filterProps=["sx"];function on(e,t){const r=this;return r.vars&&typeof r.getColorSchemeSelector=="function"?{[r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:r.palette.mode===e?t:{}}const cn=["breakpoints","palette","spacing","shape"];function un(e={},...t){const{breakpoints:r={},palette:n={},spacing:i,shape:a={}}=e,s=ee(e,cn),o=gr(r),u=Cr(i);let l=D({breakpoints:o,direction:"ltr",components:{},palette:_({mode:"light"},n),spacing:u,shape:_({},yr,a)},s);return l.applyStyles=on,l=t.reduce((h,d)=>D(h,d),l),l.unstable_sxConfig=_({},De,s==null?void 0:s.unstable_sxConfig),l.unstable_sx=function(d){return He({sx:d,theme:this})},l}function fn(e){return Object.keys(e).length===0}function ci(e=null){const t=se.useContext(dr);return!t||fn(t)?e:t}function ln(e,t=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,r))}const dn=Object.freeze(Object.defineProperty({__proto__:null,default:ln},Symbol.toStringTag,{value:"Module"}));function hn(e,t){return _({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var O={},xt={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(xt);var pn=xt.exports;const gn=nt(It),mn=nt(dn);var vt=pn;Object.defineProperty(O,"__esModule",{value:!0});var ui=O.alpha=At;O.blend=_n;O.colorChannel=void 0;var yn=O.darken=Fe;O.decomposeColor=I;O.emphasize=Tn;var bn=O.getContrastRatio=An;O.getLuminance=ve;O.hexToRgb=wt;O.hslToRgb=kt;var xn=O.lighten=Ne;O.private_safeAlpha=Cn;O.private_safeColorChannel=void 0;O.private_safeDarken=On;O.private_safeEmphasize=Ct;O.private_safeLighten=Sn;O.recomposeColor=re;O.rgbToHex=kn;var Ze=vt(gn),vn=vt(mn);function Ge(e,t=0,r=1){return(0,vn.default)(e,t,r)}function wt(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,i)=>i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function wn(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function I(e){if(e.type)return e;if(e.charAt(0)==="#")return I(wt(e));const t=e.indexOf("("),r=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error((0,Ze.default)(9,e));let n=e.substring(t+1,e.length-1),i;if(r==="color"){if(n=n.split(" "),i=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,Ze.default)(10,i))}else n=n.split(",");return n=n.map(a=>parseFloat(a)),{type:r,values:n,colorSpace:i}}const $t=e=>{const t=I(e);return t.values.slice(0,3).map((r,n)=>t.type.indexOf("hsl")!==-1&&n!==0?`${r}%`:r).join(" ")};O.colorChannel=$t;const $n=(e,t)=>{try{return $t(e)}catch{return e}};O.private_safeColorChannel=$n;function re(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return t.indexOf("rgb")!==-1?n=n.map((i,a)=>a<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),t.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${t}(${n})`}function kn(e){if(e.indexOf("#")===0)return e;const{values:t}=I(e);return`#${t.map((r,n)=>wn(n===3?Math.round(255*r):r)).join("")}`}function kt(e){e=I(e);const{values:t}=e,r=t[0],n=t[1]/100,i=t[2]/100,a=n*Math.min(i,1-i),s=(l,h=(l+r/30)%12)=>i-a*Math.max(Math.min(h-3,9-h,1),-1);let o="rgb";const u=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(o+="a",u.push(t[3])),re({type:o,values:u})}function ve(e){e=I(e);let t=e.type==="hsl"||e.type==="hsla"?I(kt(e)).values:e.values;return t=t.map(r=>(e.type!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function An(e,t){const r=ve(e),n=ve(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function At(e,t){return e=I(e),t=Ge(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,re(e)}function Cn(e,t,r){try{return At(e,t)}catch{return e}}function Fe(e,t){if(e=I(e),t=Ge(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]*=1-t;return re(e)}function On(e,t,r){try{return Fe(e,t)}catch{return e}}function Ne(e,t){if(e=I(e),t=Ge(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(e.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return re(e)}function Sn(e,t,r){try{return Ne(e,t)}catch{return e}}function Tn(e,t=.15){return ve(e)>.5?Fe(e,t):Ne(e,t)}function Ct(e,t,r){try{return Ct(e,t)}catch{return e}}function _n(e,t,r,n=1){const i=(u,l)=>Math.round((u**(1/n)*(1-r)+l**(1/n)*r)**n),a=I(e),s=I(t),o=[i(a.values[0],s.values[0]),i(a.values[1],s.values[1]),i(a.values[2],s.values[2])];return re({type:"rgb",values:o})}const Rn=["mode","contrastThreshold","tonalOffset"],Qe={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:oe.white,default:oe.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Re={text:{primary:oe.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:oe.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ve(e,t,r,n){const i=n.light||n,a=n.dark||n*1.5;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:t==="light"?e.light=xn(e.main,i):t==="dark"&&(e.dark=yn(e.main,a)))}function Pn(e="light"){return e==="dark"?{main:q[200],light:q[50],dark:q[400]}:{main:q[700],light:q[400],dark:q[800]}}function En(e="light"){return e==="dark"?{main:U[200],light:U[50],dark:U[400]}:{main:U[500],light:U[300],dark:U[700]}}function Bn(e="light"){return e==="dark"?{main:N[500],light:N[300],dark:N[700]}:{main:N[700],light:N[400],dark:N[800]}}function jn(e="light"){return e==="dark"?{main:Y[400],light:Y[300],dark:Y[700]}:{main:Y[700],light:Y[500],dark:Y[900]}}function Mn(e="light"){return e==="dark"?{main:X[400],light:X[300],dark:X[700]}:{main:X[800],light:X[500],dark:X[900]}}function In(e="light"){return e==="dark"?{main:ne[400],light:ne[300],dark:ne[700]}:{main:"#ed6c02",light:ne[500],dark:ne[900]}}function Kn(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,i=ee(e,Rn),a=e.primary||Pn(t),s=e.secondary||En(t),o=e.error||Bn(t),u=e.info||jn(t),l=e.success||Mn(t),h=e.warning||In(t);function d(c){return bn(c,Re.text.primary)>=r?Re.text.primary:Qe.text.primary}const f=({color:c,name:v,mainShade:b=500,lightShade:A=300,darkShade:P=700})=>{if(c=_({},c),!c.main&&c[b]&&(c.main=c[b]),!c.hasOwnProperty("main"))throw new Error(ce(11,v?` (${v})`:"",b));if(typeof c.main!="string")throw new Error(ce(12,v?` (${v})`:"",JSON.stringify(c.main)));return Ve(c,"light",A,n),Ve(c,"dark",P,n),c.contrastText||(c.contrastText=d(c.main)),c},y={dark:Re,light:Qe};return D(_({common:_({},oe),mode:t,primary:f({color:a,name:"primary"}),secondary:f({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:o,name:"error"}),warning:f({color:h,name:"warning"}),info:f({color:u,name:"info"}),success:f({color:l,name:"success"}),grey:Mt,contrastThreshold:r,getContrastText:d,augmentColor:f,tonalOffset:n},y[t]),i)}const zn=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Wn(e){return Math.round(e*1e5)/1e5}const et={textTransform:"uppercase"},tt='"Roboto", "Helvetica", "Arial", sans-serif';function Ln(e,t){const r=typeof t=="function"?t(e):t,{fontFamily:n=tt,fontSize:i=14,fontWeightLight:a=300,fontWeightRegular:s=400,fontWeightMedium:o=500,fontWeightBold:u=700,htmlFontSize:l=16,allVariants:h,pxToRem:d}=r,f=ee(r,zn),y=i/14,p=d||(b=>`${b/l*y}rem`),c=(b,A,P,F,H)=>_({fontFamily:n,fontWeight:b,fontSize:p(A),lineHeight:P},n===tt?{letterSpacing:`${Wn(F/A)}em`}:{},H,h),v={h1:c(a,96,1.167,-1.5),h2:c(a,60,1.2,-.5),h3:c(s,48,1.167,0),h4:c(s,34,1.235,.25),h5:c(s,24,1.334,0),h6:c(o,20,1.6,.15),subtitle1:c(s,16,1.75,.15),subtitle2:c(o,14,1.57,.1),body1:c(s,16,1.5,.15),body2:c(s,14,1.43,.15),button:c(o,14,1.75,.4,et),caption:c(s,12,1.66,.4),overline:c(s,12,2.66,1,et),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return D(_({htmlFontSize:l,pxToRem:p,fontFamily:n,fontSize:i,fontWeightLight:a,fontWeightRegular:s,fontWeightMedium:o,fontWeightBold:u},v),f,{clone:!1})}const Dn=.2,Hn=.14,Gn=.12;function w(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Dn})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Hn})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Gn})`].join(",")}const Fn=["none",w(0,2,1,-1,0,1,1,0,0,1,3,0),w(0,3,1,-2,0,2,2,0,0,1,5,0),w(0,3,3,-2,0,3,4,0,0,1,8,0),w(0,2,4,-1,0,4,5,0,0,1,10,0),w(0,3,5,-1,0,5,8,0,0,1,14,0),w(0,3,5,-1,0,6,10,0,0,1,18,0),w(0,4,5,-2,0,7,10,1,0,2,16,1),w(0,5,5,-3,0,8,10,1,0,3,14,2),w(0,5,6,-3,0,9,12,1,0,3,16,2),w(0,6,6,-3,0,10,14,1,0,4,18,3),w(0,6,7,-4,0,11,15,1,0,4,20,3),w(0,7,8,-4,0,12,17,2,0,5,22,4),w(0,7,8,-4,0,13,19,2,0,5,24,4),w(0,7,9,-4,0,14,21,2,0,5,26,4),w(0,8,9,-5,0,15,22,2,0,6,28,5),w(0,8,10,-5,0,16,24,2,0,6,30,5),w(0,8,11,-5,0,17,26,2,0,6,32,5),w(0,9,11,-5,0,18,28,2,0,7,34,6),w(0,9,12,-6,0,19,29,2,0,7,36,6),w(0,10,13,-6,0,20,31,3,0,8,38,7),w(0,10,13,-6,0,21,33,3,0,8,40,7),w(0,10,14,-6,0,22,35,3,0,8,42,7),w(0,11,14,-7,0,23,36,3,0,9,44,8),w(0,11,15,-7,0,24,38,3,0,9,46,8)],Nn=["duration","easing","delay"],Un={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},qn={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function rt(e){return`${Math.round(e)}ms`}function Yn(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Xn(e){const t=_({},Un,e.easing),r=_({},qn,e.duration);return _({getAutoHeightDuration:Yn,create:(i=["all"],a={})=>{const{duration:s=r.standard,easing:o=t.easeInOut,delay:u=0}=a;return ee(a,Nn),(Array.isArray(i)?i:[i]).map(l=>`${l} ${typeof s=="string"?s:rt(s)} ${o} ${typeof u=="string"?u:rt(u)}`).join(",")}},e,{easing:t,duration:r})}const Jn={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Zn=Jn,Qn=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function fi(e={},...t){const{mixins:r={},palette:n={},transitions:i={},typography:a={}}=e,s=ee(e,Qn);if(e.vars)throw new Error(ce(18));const o=Kn(n),u=un(e);let l=D(u,{mixins:hn(u.breakpoints,r),palette:o,shadows:Fn.slice(),typography:Ln(o,a),transitions:Xn(i),zIndex:_({},Zn)});return l=D(l,s),l=t.reduce((h,d)=>D(h,d),l),l.unstable_sxConfig=_({},De,s==null?void 0:s.unstable_sxConfig),l.unstable_sx=function(d){return He({sx:d,theme:this})},l}export{ai as S,ni as T,ee as _,ui as a,fi as b,mt as c,yn as d,un as e,yt as f,D as g,G as h,J as i,he as j,ce as k,xn as l,si as m,dr as n,gr as o,on as p,De as q,oi as r,He as s,sn as t,ci as u,pn as v,ii as w};
