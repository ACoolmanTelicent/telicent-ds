import{_ as X}from"./extends-CCbyfPlC.js";import{_ as ie}from"./createTheme-CxKjqECZ.js";import{r as s,R as A}from"./index-CBqU2yxZ.js";import{c as x,a as Ee,k as oe,s as se,u as Te,g as ze,b as Ae}from"./styled-B4o22OB_.js";import{j as N}from"./jsx-runtime-CKrituN3.js";import{_ as Xe,a as Ye}from"./assertThisInitialized-LnzLPM7_.js";import{u as de}from"./useForkRef-ByGBP3wL.js";const We=typeof window<"u"?s.useLayoutEffect:s.useEffect;function H(e){const t=s.useRef(e);return We(()=>{t.current=e}),s.useRef((...n)=>(0,t.current)(...n)).current}const he={};function He(e,t){const n=s.useRef(he);return n.current===he&&(n.current=e(t)),n}const Ge=[];function qe(e){s.useEffect(e,Ge)}class G{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new G}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Ze(){const e=He(G.create).current;return qe(e.disposeEffect),e}let q=!0,ne=!1;const Je=new G,Qe={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function et(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&Qe[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function tt(e){e.metaKey||e.altKey||e.ctrlKey||(q=!0)}function te(){q=!1}function nt(){this.visibilityState==="hidden"&&ne&&(q=!0)}function rt(e){e.addEventListener("keydown",tt,!0),e.addEventListener("mousedown",te,!0),e.addEventListener("pointerdown",te,!0),e.addEventListener("touchstart",te,!0),e.addEventListener("visibilitychange",nt,!0)}function it(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return q||et(t)}function ot(){const e=s.useCallback(r=>{r!=null&&rt(r.ownerDocument)},[]),t=s.useRef(!1);function n(){return t.current?(ne=!0,Je.start(100,()=>{ne=!1}),t.current=!1,!0):!1}function u(r){return it(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}const me=A.createContext(null);function ae(e,t){var n=function(i){return t&&s.isValidElement(i)?t(i):i},u=Object.create(null);return e&&s.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function st(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var i in e)i in t?r.length&&(u[i]=r,r=[]):r.push(i);var o,c={};for(var l in t){if(u[l])for(o=0;o<u[l].length;o++){var p=u[l][o];c[u[l][o]]=n(p)}c[l]=n(l)}for(o=0;o<r.length;o++)c[r[o]]=n(r[o]);return c}function k(e,t,n){return n[t]!=null?n[t]:e.props[t]}function at(e,t){return ae(e.children,function(n){return s.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:k(n,"appear",e),enter:k(n,"enter",e),exit:k(n,"exit",e)})})}function ut(e,t,n){var u=ae(e.children),r=st(t,u);return Object.keys(r).forEach(function(i){var o=r[i];if(s.isValidElement(o)){var c=i in t,l=i in u,p=t[i],d=s.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[i]=s.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:k(o,"exit",e),enter:k(o,"enter",e)}):!l&&c&&!d?r[i]=s.cloneElement(o,{in:!1}):l&&c&&s.isValidElement(p)&&(r[i]=s.cloneElement(o,{onExited:n.bind(null,o),in:p.props.in,exit:k(o,"exit",e),enter:k(o,"enter",e)}))}}),r}var lt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ct={component:"div",childFactory:function(t){return t}},ue=function(e){Xe(t,e);function t(u,r){var i;i=e.call(this,u,r)||this;var o=i.handleExited.bind(Ye(i));return i.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var o=i.children,c=i.handleExited,l=i.firstRender;return{children:l?at(r,c):ut(r,o,c),firstRender:!1}},n.handleExited=function(r,i){var o=ae(this.props.children);r.key in o||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,i=r.component,o=r.childFactory,c=ie(r,["component","childFactory"]),l=this.state.contextValue,p=lt(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,i===null?A.createElement(me.Provider,{value:l},p):A.createElement(me.Provider,{value:l},A.createElement(i,c,p))},t}(A.Component);ue.propTypes={};ue.defaultProps=ct;const pt=ue;function ft(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:i,rippleSize:o,in:c,onExited:l,timeout:p}=e,[d,g]=s.useState(!1),b=x(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),C={width:o,height:o,top:-(o/2)+i,left:-(o/2)+r},h=x(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&g(!0),s.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),N.jsx("span",{className:b,style:C,children:N.jsx("span",{className:h})})}const m=Ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),dt=["center","classes","className"];let Z=e=>e,be,ge,Re,ye;const re=550,ht=80,mt=oe(be||(be=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),bt=oe(ge||(ge=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),gt=oe(Re||(Re=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Rt=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),yt=se(ft,{name:"MuiTouchRipple",slot:"Ripple"})(ye||(ye=Z`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,mt,re,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,bt,re,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,gt,({theme:e})=>e.transitions.easing.easeInOut),Et=s.forwardRef(function(t,n){const u=Te({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:o}=u,c=ie(u,dt),[l,p]=s.useState([]),d=s.useRef(0),g=s.useRef(null);s.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=s.useRef(!1),C=Ze(),h=s.useRef(null),R=s.useRef(null),j=s.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:D,rippleSize:U,cb:_}=f;p(T=>[...T,N.jsx(yt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:re,pulsate:y,rippleX:E,rippleY:D,rippleSize:U},d.current)]),d.current+=1,g.current=_},[i]),S=s.useCallback((f={},y={},E=()=>{})=>{const{pulsate:D=!1,center:U=r||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=_?null:R.current,P=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,B,L;if(U||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),B=Math.round(P.height/2);else{const{clientX:I,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(I-P.left),B=Math.round(V-P.top)}if(U)L=Math.sqrt((2*P.width**2+P.height**2)/3),L%2===0&&(L+=1);else{const I=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((T?T.clientHeight:0)-B),B)*2+2;L=Math.sqrt(I**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{j({pulsate:D,rippleX:v,rippleY:B,rippleSize:L,cb:E})},C.start(ht,()=>{h.current&&(h.current(),h.current=null)})):j({pulsate:D,rippleX:v,rippleY:B,rippleSize:L,cb:E})},[r,j,C]),K=s.useCallback(()=>{S({},{pulsate:!0})},[S]),$=s.useCallback((f,y)=>{if(C.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{$(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[C]);return s.useImperativeHandle(n,()=>({pulsate:K,start:S,stop:$}),[K,S,$]),N.jsx(Rt,X({className:x(m.root,i.root,o),ref:R},c,{children:N.jsx(pt,{component:null,exit:!0,children:l})}))}),Tt=Et;function Mt(e){return ze("MuiButtonBase",e)}const xt=Ee("MuiButtonBase",["root","disabled","focusVisible"]),Ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],vt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,o=Ae({root:["root",t&&"disabled",n&&"focusVisible"]},Mt,r);return n&&u&&(o.root+=` ${u}`),o},Vt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${xt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wt=s.forwardRef(function(t,n){const u=Te({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:o,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:j,onDragLeave:S,onFocus:K,onFocusVisible:$,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:D,onMouseUp:U,onTouchEnd:_,onTouchMove:T,onTouchStart:P,tabIndex:v=0,TouchRippleProps:B,touchRippleRef:L,type:I}=u,V=ie(u,Ct),O=s.useRef(null),M=s.useRef(null),Me=de(M,L),{isFocusVisibleRef:le,onFocus:xe,onBlur:Ce,ref:ve}=ot(),[F,Y]=s.useState(!1);p&&F&&Y(!1),s.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[J,Ve]=s.useState(!1);s.useEffect(()=>{Ve(!0)},[]);const we=J&&!d&&!p;s.useEffect(()=>{F&&b&&!d&&J&&M.current.pulsate()},[d,b,F,J]);function w(a,pe,Oe=g){return H(fe=>(pe&&pe(fe),!Oe&&M.current&&M.current[a](fe),!0))}const Pe=w("start",E),Be=w("stop",j),Le=w("stop",S),De=w("stop",U),Ie=w("stop",a=>{F&&a.preventDefault(),D&&D(a)}),Fe=w("start",P),ke=w("stop",_),Ne=w("stop",T),Se=w("stop",a=>{Ce(a),le.current===!1&&Y(!1),h&&h(a)},!1),$e=H(a=>{O.current||(O.current=a.currentTarget),xe(a),le.current===!0&&(Y(!0),$&&$(a)),K&&K(a)}),Q=()=>{const a=O.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},ee=s.useRef(!1),Ue=H(a=>{b&&!ee.current&&F&&M.current&&a.key===" "&&(ee.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),je=H(a=>{b&&a.key===" "&&M.current&&F&&!a.defaultPrevented&&(ee.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let W=l;W==="button"&&(V.href||V.to)&&(W=C);const z={};W==="button"?(z.type=I===void 0?"button":I,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ke=de(n,ve,O),ce=X({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:F}),_e=vt(ce);return N.jsxs(Vt,X({as:W,className:x(_e.root,c),ownerState:ce,onBlur:Se,onClick:R,onContextMenu:Be,onFocus:$e,onKeyDown:Ue,onKeyUp:je,onMouseDown:Pe,onMouseLeave:Ie,onMouseUp:De,onDragLeave:Le,onTouchEnd:ke,onTouchMove:Ne,onTouchStart:Fe,ref:Ke,tabIndex:p?-1:v,type:I},z,V,{children:[o,we?N.jsx(Tt,X({ref:Me,center:i},B)):null]}))}),St=wt;export{St as B,G as T,H as a,Ze as b,ot as c,me as d,We as u};