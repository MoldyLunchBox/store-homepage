(self.webpackChunkapi=self.webpackChunkapi||[]).push([[386],{67083:(m,h,s)=>{var e=s(62878);function t(o,r){var i=o==null?0:o.length;return!!i&&e(o,r,0)>-1}m.exports=t},65286:m=>{function h(s,e,t){for(var o=-1,r=s==null?0:s.length;++o<r;)if(t(e,s[o]))return!0;return!1}m.exports=h},19975:(m,h,s)=>{var e=s(44936),t=s(67083),o=s(65286),r=s(36393),i=s(20435),d=s(42435),l=200;function c(v,j,D,f){var M=-1,E=t,C=!0,O=v.length,R=[],N=j.length;if(!O)return R;D&&(j=r(j,i(D))),f?(E=o,C=!1):j.length>=l&&(E=d,C=!1,j=new e(j));e:for(;++M<O;){var T=v[M],I=D==null?T:D(T);if(T=f||T!==0?T:0,C&&I===I){for(var $=N;$--;)if(j[$]===I)continue e;R.push(T)}else E(j,I,f)||R.push(T)}return R}m.exports=c},1107:(m,h,s)=>{var e=s(84856),t=s(52593),o=t(e);m.exports=o},32652:m=>{function h(s,e,t,o){for(var r=s.length,i=t+(o?1:-1);o?i--:++i<r;)if(e(s[i],i,s))return i;return-1}m.exports=h},62878:(m,h,s)=>{var e=s(32652),t=s(2784),o=s(51425);function r(i,d,l){return d===d?o(i,d,l):e(i,t,l)}m.exports=r},2784:m=>{function h(s){return s!==s}m.exports=h},92403:(m,h,s)=>{var e=s(1107),t=s(47727);function o(r,i){var d=-1,l=t(r)?Array(r.length):[];return e(r,function(c,v,j){l[++d]=i(c,v,j)}),l}m.exports=o},16429:(m,h,s)=>{var e=s(36393),t=s(82393),o=s(90040),r=s(92403),i=s(63135),d=s(20435),l=s(9998),c=s(51339),v=s(26126);function j(D,f,M){f.length?f=e(f,function(O){return v(O)?function(R){return t(R,O.length===1?O[0]:O)}:O}):f=[c];var E=-1;f=e(f,d(o));var C=r(D,function(O,R,N){var T=e(f,function(I){return I(O)});return{criteria:T,index:++E,value:O}});return i(C,function(O,R){return l(O,R,M)})}m.exports=j},63135:m=>{function h(s,e){var t=s.length;for(s.sort(e);t--;)s[t]=s[t].value;return s}m.exports=h},17654:(m,h,s)=>{var e=s(85194);function t(o,r){if(o!==r){var i=o!==void 0,d=o===null,l=o===o,c=e(o),v=r!==void 0,j=r===null,D=r===r,f=e(r);if(!j&&!f&&!c&&o>r||c&&v&&D&&!j&&!f||d&&v&&D||!i&&D||!l)return 1;if(!d&&!c&&!f&&o<r||f&&i&&l&&!d&&!c||j&&i&&l||!v&&l||!D)return-1}return 0}m.exports=t},9998:(m,h,s)=>{var e=s(17654);function t(o,r,i){for(var d=-1,l=o.criteria,c=r.criteria,v=l.length,j=i.length;++d<v;){var D=e(l[d],c[d]);if(D){if(d>=j)return D;var f=i[d];return D*(f=="desc"?-1:1)}}return o.index-r.index}m.exports=t},52593:(m,h,s)=>{var e=s(47727);function t(o,r){return function(i,d){if(i==null)return i;if(!e(i))return o(i,d);for(var l=i.length,c=r?l:-1,v=Object(i);(r?c--:++c<l)&&d(v[c],c,v)!==!1;);return i}}m.exports=t},51425:m=>{function h(s,e,t){for(var o=t-1,r=s.length;++o<r;)if(s[o]===e)return o;return-1}m.exports=h},58422:(m,h,s)=>{var e=s(36393),t=s(90040),o=s(92403),r=s(26126);function i(d,l){var c=r(d)?e:o;return c(d,t(l,3))}m.exports=i},8243:(m,h,s)=>{var e=s(93367),t=s(16429),o=s(52431),r=s(65145),i=o(function(d,l){if(d==null)return[];var c=l.length;return c>1&&r(d,l[0],l[1])?l=[]:c>2&&r(l[0],l[1],l[2])&&(l=[l[0]]),t(d,e(l,1),[])});m.exports=i},34049:(m,h,s)=>{var e=s(20454);function t(o){var r=o==null?0:o.length;return r?e(o,1,r):[]}m.exports=t},41942:(m,h,s)=>{var e=s(20454),t=s(69740);function o(r,i,d){return r&&r.length?(i=d||i===void 0?1:t(i),e(r,0,i<0?0:i)):[]}m.exports=o},87366:(m,h,s)=>{var e=s(19975),t=s(52431),o=s(99662),r=t(function(i,d){return o(i)?e(i,d):[]});m.exports=r},45322:(m,h,s)=>{"use strict";s.d(h,{U:()=>f,y:()=>j});var e=s(74081),t=s(27279),o=s(72450),r=s(39267),i=s(74513),d=s(32370),l=s(10701),c=s(93415);const v=({theme:M,expanded:E,variant:C,disabled:O,error:R})=>R?`1px solid ${M.colors.danger600} !important`:O?`1px solid ${M.colors.neutral150}`:E?`1px solid ${M.colors.primary600}`:C==="primary"?`1px solid ${M.colors.neutral0}`:`1px solid ${M.colors.neutral100}`,j=(0,o.ZP)(d.Z)``,D=(0,o.ZP)(c.x)`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:M})=>M.colors.primary600};

    ${j} {
      color: ${({theme:M,expanded:E})=>E?void 0:M.colors.primary700};
    }

    ${d.Z} {
      color: ${({theme:M,expanded:E})=>E?void 0:M.colors.primary600};
    }

    & > ${l.k} {
      background: ${({theme:M})=>M.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:M})=>M.colors.primary200};
    }
  }
`,f=({children:M,disabled:E=!1,error:C,expanded:O=!1,hasErrorMessage:R=!0,id:N,onToggle:T,toggle:I,size:$="M",variant:S="primary",shadow:G})=>{const Z=(0,i.M)(N),w=t.useMemo(()=>({expanded:O,onToggle:T,toggle:I,id:Z,size:$,variant:S,disabled:E}),[E,O,Z,T,$,I,S]);return(0,e.jsxs)(r.S.Provider,{value:w,children:[(0,e.jsx)(D,{"data-strapi-expanded":O,disabled:E,"aria-disabled":E,expanded:O,hasRadius:!0,variant:S,error:C,shadow:G,children:M}),C&&R&&(0,e.jsx)(c.x,{paddingTop:1,children:(0,e.jsx)(d.Z,{variant:"pi",textColor:"danger600",children:C})})]})}},34642:(m,h,s)=>{"use strict";s.d(h,{v:()=>r});var e=s(74081),t=s(39267),o=s(93415);const r=({children:i,...d})=>{const{expanded:l,id:c}=(0,t.A)();if(!l)return null;const v=`accordion-content-${c}`,j=`accordion-label-${c}`,D=`accordion-desc-${c}`;return(0,e.jsx)(o.x,{role:"region",id:v,"aria-labelledby":j,"aria-describedby":D,...d,children:i})}},39267:(m,h,s)=>{"use strict";s.d(h,{A:()=>o,S:()=>t});var e=s(27279);const t=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),o=()=>(0,e.useContext)(t)},24920:(m,h,s)=>{"use strict";s.d(h,{B:()=>M});var e=s(74081),t=s(10411),o=s(72450),r=s(45322),i=s(39267);const d=({expanded:E,disabled:C,variant:O})=>{let R="neutral100";return E?R="primary100":C?R="neutral150":O==="primary"&&(R="neutral0"),R};var l=s(1782),c=s(50703),v=s(10701),j=s(32370);const D=(0,o.ZP)(l.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:E,expanded:C})=>C?E.colors.primary600:E.colors.neutral500};
    }
  }
`,f=(0,o.ZP)(v.k)`
  min-height: ${({theme:E,size:C})=>E.sizes.accordions[C]};
  border-radius: ${({theme:E,expanded:C})=>C?`${E.borderRadius} ${E.borderRadius} 0 0`:E.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:E})=>E.colors.primary600};
      }
    }
  }
`,M=({title:E,description:C,as:O="span",togglePosition:R="right",action:N,...T})=>{const{onToggle:I,toggle:$,expanded:S,id:G,size:Z,variant:w,disabled:H}=(0,i.A)(),ae=`accordion-content-${G}`,se=`accordion-label-${G}`,le=`accordion-desc-${G}`,V=Z==="M"?6:4,te=Z==="M"?V:V-2,de=d({expanded:S,disabled:H,variant:w}),ue={as:O,fontWeight:Z==="S"?"bold":void 0,id:se,textColor:S?"primary600":"neutral700",ellipsis:!0,variant:Z==="M"?"delta":void 0},ge=S?"primary600":"neutral600",pe=S?"primary200":"neutral200",ne=Z==="M"?`${32/16}rem`:`${24/16}rem`,q=()=>{H||($&&!I?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),$()):I&&I())},F=(0,e.jsx)(v.k,{justifyContent:"center",borderRadius:"50%",height:ne,width:ne,transform:S?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:pe,cursor:H?"not-allowed":"pointer",onClick:q,shrink:0,children:(0,e.jsx)(c.J,{as:t.Z,width:Z==="M"?`${11/16}rem`:`${8/16}rem`,color:S?"primary600":"neutral600"})});return(0,e.jsx)(f,{paddingBottom:te,paddingLeft:V,paddingRight:V,paddingTop:te,background:de,expanded:S,size:Z,justifyContent:"space-between",cursor:H?"not-allowed":"",children:(0,e.jsxs)(v.k,{gap:3,flex:1,maxWidth:"100%",children:[R==="left"&&F,(0,e.jsx)(D,{onClick:q,"aria-disabled":H,"aria-expanded":S,"aria-controls":ae,"aria-labelledby":se,"data-strapi-accordion-toggle":!0,expanded:S,type:"button",flex:1,minWidth:0,...T,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.y,{...ue,children:E}),C&&(0,e.jsx)(j.Z,{as:"p",id:le,textColor:ge,children:C})]})}),R==="right"&&(0,e.jsxs)(v.k,{gap:3,children:[F,N]}),R==="left"&&N]})})}},37472:(m,h,s)=>{"use strict";s.d(h,{Z:()=>o});var e=s(74081),t=s(10701);const o=({startActions:r,endActions:i})=>!r&&!i?null:(0,e.jsxs)(t.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(t.k,{gap:2,wrap:"wrap",children:r}),(0,e.jsx)(t.k,{gap:2,shrink:0,wrap:"wrap",children:i})]})},27997:(m,h,s)=>{"use strict";s.d(h,{A:()=>d});var e=s(74081),t=s(72450),o=s(93415);const r=(0,t.ZP)(o.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,i=(0,t.ZP)(o.x)`
  overflow-x: hidden;
`,d=({sideNav:l,children:c})=>(0,e.jsxs)(r,{hasSideNav:Boolean(l),children:[l,(0,e.jsx)(i,{paddingBottom:10,children:c})]})},68412:(m,h,s)=>{"use strict";s.d(h,{r:()=>D});var e=s(74081),t=s(27279),o=s(48157),r=s(47533),i=s(72450),d=s(61657),l=s(32370),c=s(93415);const v=i.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:f})=>f?"none":void 0};
  color: ${({disabled:f,theme:M})=>f?M.colors.neutral600:M.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${l.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:f})=>f.colors.primary500};
  }

  &:active {
    color: ${({theme:f})=>f.colors.primary700};
  }

  ${d.BF};
`,j=(0,i.ZP)(c.x)`
  display: flex;
`,D=t.forwardRef(({children:f,href:M,to:E,disabled:C=!1,startIcon:O,endIcon:R,...N},T)=>{const I=M?"_blank":void 0,$=M?"noreferrer noopener":void 0;return(0,e.jsxs)(v,{as:E&&!C?r.OL:"a",target:I,rel:$,to:C?void 0:E,href:C?"#":M,disabled:C,ref:T,...N,children:[O&&(0,e.jsx)(j,{as:"span","aria-hidden":!0,paddingRight:2,children:O}),(0,e.jsx)(l.Z,{children:f}),R&&!M&&(0,e.jsx)(j,{as:"span","aria-hidden":!0,paddingLeft:2,children:R}),M&&(0,e.jsx)(j,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(o.Z,{})})]})})},76827:(m,h,s)=>{"use strict";s.d(h,{Z:()=>o});var e=s(74081);const t=r=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),o=t},35318:(m,h,s)=>{"use strict";s.d(h,{Z:()=>o});var e=s(74081);const t=r=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),o=t},386:(m,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>ds});var e=s(74081),t=s(87006),o=s(51447),r=s(63068),i=s(27279),d=s(93415),l=s(10701),c=s(32370),v=s(22572),j=s(23298),D=s(74577),f=s(10989),M=s(45322),E=s(24920),C=s(34642),O=s(73354),R=s(27875),N=s(48102),T=s(74758),I=s(12881),$=s(39708),S=s(68412),G=s(86967),Z=s(93153),w=s(50086),H=s(4987),ae=s(51926),se=s(27997),le=s(37472),V=s(70774),te=s(38101),de=s(35318),ce=s(59082),ue=s(76827),ge=s(26784),pe=s(78665),ne=s(36938),q=s(71563),F=s(61020),Y=s(40464),b=s(70627),We=s(51943),fe=s(8243),re=s(98934),ee=s(72450),Me=s(61815),me=s(10124),be=s(87366),Ke=s(58422),Se=s(34049),Pe=s(43433),$e=s(41942),he=s(47853);const je=(0,i.createContext)({}),De=({children:n,value:a})=>(0,e.jsx)(je.Provider,{value:a,children:n}),_e=()=>(0,i.useContext)(je);De.propTypes={children:b.node.isRequired,value:b.object.isRequired};function Ze(n){switch(n){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return We(n.replace("api::","").replace("plugin::",""))}}const ke=(n,a)=>{const u=Object.keys(a).sort().map(g=>({name:g,isOpen:!1}));return{...n,collapses:u}},Oe=(0,ee.iv)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ne=(0,ee.ZP)(d.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&Oe}
  &:hover {
    ${Oe}
  }
`,we=ee.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,ye=({subCategory:n})=>{const{formatMessage:a}=(0,F.Z)(),{onChange:u,onChangeSelectAll:g,onSelectedAction:x,selectedAction:p,modifiedData:P}=_e(),A=(0,i.useMemo)(()=>re(P,n.name,{}),[P,n]),y=(0,i.useMemo)(()=>Object.values(A).every(_=>_.enabled===!0),[A]),L=(0,i.useMemo)(()=>Object.values(A).some(_=>_.enabled===!0)&&!y,[A,y]),B=(0,i.useCallback)(({target:{name:_}})=>{g({target:{name:_,value:!y}})},[y,g]),U=(0,i.useCallback)(_=>p===_,[p]);return(0,e.jsxs)(d.x,{children:[(0,e.jsxs)(l.k,{justifyContent:"space-between",alignItems:"center",children:[(0,e.jsx)(d.x,{paddingRight:4,children:(0,e.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:n.label})}),(0,e.jsx)(we,{}),(0,e.jsx)(d.x,{paddingLeft:4,children:(0,e.jsx)(v.X,{name:n.name,value:y,onValueChange:_=>B({target:{name:n.name,value:_}}),indeterminate:L,children:a({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,e.jsx)(l.k,{paddingTop:6,paddingBottom:6,children:(0,e.jsx)(j.r,{gap:2,style:{flex:1},children:n.actions.map(_=>{const W=`${_.name}.enabled`;return(0,e.jsx)(D.P,{col:6,children:(0,e.jsxs)(Ne,{isActive:U(_.name),padding:2,hasRadius:!0,children:[(0,e.jsx)(v.X,{value:re(P,W,!1),name:W,onValueChange:k=>u({target:{name:W,value:k}}),children:_.label}),(0,e.jsxs)("button",{type:"button",onClick:()=>x(_.name),style:{display:"inline-flex",alignItems:"center"},children:[(0,e.jsx)(f.T,{as:"span",children:a({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:_.name})}),(0,e.jsx)(de.Z,{})]})]})},_.name)})})})]})};ye.propTypes={subCategory:b.object.isRequired};const ve=({name:n,permissions:a})=>{const u=(0,i.useMemo)(()=>fe(Object.values(a.controllers).reduce((g,x,p)=>{const P=`${n}.controllers.${Object.keys(a.controllers)[p]}`,A=fe(Object.keys(x).reduce((y,L)=>[...y,{...x[L],label:L,name:`${P}.${L}`}],[]),"label");return[...g,{actions:A,label:Object.keys(a.controllers)[p],name:P}]},[]),"label"),[n,a]);return(0,e.jsx)(d.x,{padding:6,children:u.map(g=>(0,e.jsx)(ye,{subCategory:g},g.name))})};ve.propTypes={name:b.string.isRequired,permissions:b.object.isRequired};const Fe={collapses:[]},Ge=(n,a)=>(0,Me.ZP)(n,u=>{switch(a.type){case"TOGGLE_COLLAPSE":{u.collapses=n.collapses.map((g,x)=>x===a.index?{...g,isOpen:!g.isOpen}:{...g,isOpen:!1});break}default:return u}}),He=()=>{const{modifiedData:n}=_e(),{formatMessage:a}=(0,F.Z)(),[{collapses:u},g]=(0,i.useReducer)(Ge,Fe,p=>ke(p,n)),x=p=>g({type:"TOGGLE_COLLAPSE",index:p});return(0,e.jsx)(l.k,{direction:"column",alignItems:"stretch",gap:1,children:u.map((p,P)=>(0,e.jsxs)(M.U,{expanded:p.isOpen,onToggle:()=>x(P),variant:P%2===0?"secondary":void 0,children:[(0,e.jsx)(E.B,{title:Ze(p.name),description:a({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:p.name}),variant:P%2?"primary":"secondary"}),(0,e.jsx)(C.v,{children:(0,e.jsx)(ve,{permissions:n[p.name],name:p.name})})]},p.name))})},ze=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Qe=(0,ee.ZP)(d.x)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`;function xe({route:n}){const{formatMessage:a}=(0,F.Z)(),{method:u,handler:g,path:x}=n,p=x?Se(x.split("/")):[],[P="",A=""]=g?g.split("."):[],y=ze(n.method);return(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsxs)(c.Z,{variant:"delta",as:"h3",children:[a({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,e.jsx)("span",{children:P}),(0,e.jsxs)(c.Z,{variant:"delta",textColor:"primary600",children:[".",A]})]}),(0,e.jsxs)(l.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,e.jsx)(Qe,{background:y.background,borderColor:y.border,padding:2,children:(0,e.jsx)(c.Z,{fontWeight:"bold",textColor:y.text,children:u})}),(0,e.jsx)(d.x,{paddingLeft:2,paddingRight:2,children:Ke(p,L=>(0,e.jsxs)(c.Z,{textColor:L.includes(":")?"neutral600":"neutral900",children:["/",L]},L))})]})]})}xe.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},xe.propTypes={route:b.shape({handler:b.string,method:b.string,path:b.string})};const Ve=()=>{const{formatMessage:n}=(0,F.Z)(),{selectedAction:a,routes:u}=_e(),g=be(a.split("."),"controllers"),x=re(u,g[0]),p=g.slice(1).join("."),P=me(x)?[]:x.filter(A=>A.handler.endsWith(p));return(0,e.jsx)(D.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:a?(0,e.jsx)(l.k,{direction:"column",alignItems:"stretch",gap:2,children:P.map((A,y)=>(0,e.jsx)(xe,{route:A},y))}):(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(c.Z,{variant:"delta",as:"h3",children:n({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})}),(0,e.jsx)(c.Z,{as:"p",textColor:"neutral600",children:n({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Ye=(n,a,u)=>({...n,initialData:a,modifiedData:a,routes:u}),Xe={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},Je=(n,a)=>(0,Me.ZP)(n,u=>{switch(a.type){case"ON_CHANGE":{const g=a.keys.length,x=a.keys[g-1]==="enabled";if(a.value&&x){const p=$e(a.keys,g-1).join(".");u.selectedAction=p}Pe(u,["modifiedData",...a.keys],a.value);break}case"ON_CHANGE_SELECT_ALL":{const g=["modifiedData",...a.keys],x=re(n,g,{}),p=Object.keys(x).reduce((P,A)=>(P[A]={...x[A],enabled:a.value},P),{});Pe(u,g,p);break}case"ON_RESET":{u.modifiedData=n.initialData;break}case"ON_SUBMIT_SUCCEEDED":{u.initialData=n.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:g}=a;u.selectedAction=g===n.selectedAction?"":g;break}default:return u}}),Ce=(0,i.forwardRef)(({permissions:n,routes:a},u)=>{const{formatMessage:g}=(0,F.Z)(),[x,p]=(0,i.useReducer)(Je,Xe,B=>Ye(B,n,a));(0,i.useImperativeHandle)(u,()=>({getPermissions(){return{permissions:x.modifiedData}},resetForm(){p({type:"ON_RESET"})},setFormAfterSubmit(){p({type:"ON_SUBMIT_SUCCEEDED"})}}));const L={...x,onChange:({target:{name:B,value:U}})=>p({type:"ON_CHANGE",keys:B.split("."),value:U==="empty__string_value"?"":U}),onChangeSelectAll:({target:{name:B,value:U}})=>p({type:"ON_CHANGE_SELECT_ALL",keys:B.split("."),value:U}),onSelectedAction:B=>p({type:"SELECT_ACTION",actionToSelect:B})};return(0,e.jsx)(De,{value:L,children:(0,e.jsxs)(j.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,e.jsx)(D.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(c.Z,{variant:"delta",as:"h2",children:g({id:(0,r.g)("Plugins.header.title"),defaultMessage:"Permissions"})}),(0,e.jsx)(c.Z,{as:"p",textColor:"neutral600",children:g({id:(0,r.g)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."})})]}),(0,e.jsx)(He,{})]})}),(0,e.jsx)(Ve,{})]})})});Ce.propTypes={permissions:b.object.isRequired,routes:b.object.isRequired};const Re=(0,i.memo)(Ce),Ae=he.Ry().shape({name:he.Z_().required(t.I0.required),description:he.Z_().required(t.I0.required)}),qe=n=>Object.keys(n).reduce((a,u)=>{const g=n[u].controllers,x=Object.keys(g).reduce((p,P)=>(me(g[P])||(p[P]=g[P]),p),{});return me(x)||(a[u]={controllers:x}),a},{}),Le=()=>{const n=(0,t.lm)(),{get:a}=(0,t.kY)(),{formatAPIError:u}=(0,t.So)(r.g),[{data:g,isLoading:x,error:p,refetch:P},{data:A,isLoading:y,error:L,refetch:B}]=(0,Y.useQueries)([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:W}}=await a("/users-permissions/permissions");return W}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:W}}=await a("/users-permissions/routes");return W}}]),U=async()=>{await Promise.all([P(),B()])};(0,i.useEffect)(()=>{p&&n({type:"warning",message:u(p)})},[n,p,u]),(0,i.useEffect)(()=>{L&&n({type:"warning",message:u(L)})},[n,L,u]);const _=x||y;return{permissions:g?qe(g):{},routes:A??{},getData:U,isLoading:_}},es=()=>{const{formatMessage:n}=(0,F.Z)(),a=(0,t.lm)(),{goBack:u}=(0,o.k6)(),{lockApp:g,unlockApp:x}=(0,t.o1)(),{isLoading:p,permissions:P,routes:A}=Le(),{trackUsage:y}=(0,t.rS)(),L=i.useRef(),{post:B}=(0,t.kY)(),U=(0,Y.useMutation)(W=>B("/users-permissions/roles",W),{onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})},onSuccess(){y("didCreateRole"),a({type:"success",message:{id:(0,r.g)("Settings.roles.created"),defaultMessage:"Role created"}}),u()}}),_=async W=>{g();const k=L.current.getPermissions();await U.mutate({...W,...k,users:[]}),x()};return(0,e.jsxs)(O.o,{children:[(0,e.jsx)(t.SL,{name:"Roles"}),(0,e.jsx)(q.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:_,validationSchema:Ae,children:({handleSubmit:W,values:k,handleChange:X,errors:K})=>(0,e.jsxs)(t.l0,{noValidate:!0,onSubmit:W,children:[(0,e.jsx)(R.T,{primaryAction:!p&&(0,e.jsx)(N.z,{type:"submit",loading:U.isLoading,startIcon:(0,e.jsx)(ce.Z,{}),children:n({id:"global.save",defaultMessage:"Save"})}),title:n({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:n({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),(0,e.jsx)(T.D,{children:(0,e.jsxs)(l.k,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",children:[(0,e.jsx)(c.Z,{variant:"delta",as:"h2",children:n({id:(0,r.g)("EditPage.form.roles"),defaultMessage:"Role details"})}),(0,e.jsxs)(j.r,{gap:4,children:[(0,e.jsx)(D.P,{col:6,children:(0,e.jsx)(I.o,{name:"name",value:k.name||"",onChange:X,label:n({id:"global.name",defaultMessage:"Name"}),error:K?.name?n({id:K.name,defaultMessage:"Name is required"}):!1,required:!0})}),(0,e.jsx)(D.P,{col:6,children:(0,e.jsx)($.g,{id:"description",value:k.description||"",onChange:X,label:n({id:"global.description",defaultMessage:"Description"}),error:K?.description?n({id:K.description,defaultMessage:"Description is required"}):!1,required:!0})})]})]}),!p&&(0,e.jsx)(Re,{ref:L,permissions:P,routes:A})]})})]})})]})},ss=()=>(0,e.jsx)(t.O4,{permissions:r.P.createRole,children:(0,e.jsx)(es,{})}),ts=()=>{const{formatMessage:n}=(0,F.Z)(),a=(0,t.lm)(),{lockApp:u,unlockApp:g}=(0,t.o1)(),{params:{id:x}}=(0,o.$B)("/settings/users-permissions/roles/:id"),{get:p}=(0,t.kY)(),{isLoading:P,routes:A}=Le(),{data:y,isLoading:L,refetch:B}=(0,Y.useQuery)(["users-permissions","role",x],async()=>{const{data:{role:K}}=await p(`/users-permissions/roles/${x}`);return K}),U=i.useRef(),{put:_}=(0,t.kY)(),{formatAPIError:W}=(0,t.So)(),k=(0,Y.useMutation)(K=>_(`/users-permissions/roles/${x}`,K),{onError(K){a({type:"warning",message:W(K)})},async onSuccess(){a({type:"success",message:{id:(0,r.g)("Settings.roles.created"),defaultMessage:"Role edited"}}),await B()}}),X=async K=>{u();const z=U.current.getPermissions();await k.mutate({...K,...z,users:[]}),g()};return L?(0,e.jsx)(t.dO,{}):(0,e.jsxs)(O.o,{children:[(0,e.jsx)(t.SL,{name:"Roles"}),(0,e.jsx)(q.J9,{enableReinitialize:!0,initialValues:{name:y.name,description:y.description},onSubmit:X,validationSchema:Ae,children:({handleSubmit:K,values:z,handleChange:oe,errors:J})=>(0,e.jsxs)(t.l0,{noValidate:!0,onSubmit:K,children:[(0,e.jsx)(R.T,{primaryAction:!P&&(0,e.jsx)(N.z,{disabled:y.code==="strapi-super-admin",type:"submit",loading:k.isLoading,startIcon:(0,e.jsx)(ce.Z,{}),children:n({id:"global.save",defaultMessage:"Save"})}),title:y.name,subtitle:y.description,navigationAction:(0,e.jsx)(t.rU,{startIcon:(0,e.jsx)(ue.Z,{}),to:"/settings/users-permissions/roles",children:n({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(T.D,{children:(0,e.jsxs)(l.k,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(c.Z,{variant:"delta",as:"h2",children:n({id:(0,r.g)("EditPage.form.roles"),defaultMessage:"Role details"})}),(0,e.jsxs)(j.r,{gap:4,children:[(0,e.jsx)(D.P,{col:6,children:(0,e.jsx)(I.o,{name:"name",value:z.name||"",onChange:oe,label:n({id:"global.name",defaultMessage:"Name"}),error:J?.name?n({id:J.name,defaultMessage:"Name is required"}):!1,required:!0})}),(0,e.jsx)(D.P,{col:6,children:(0,e.jsx)($.g,{id:"description",value:z.description||"",onChange:oe,label:n({id:"global.description",defaultMessage:"Description"}),error:J?.description?n({id:J.description,defaultMessage:"Description is required"}):!1,required:!0})})]})]}),!P&&(0,e.jsx)(Re,{ref:U,permissions:y.permissions,routes:A})]})})]})})]})},ns=()=>(0,e.jsx)(t.O4,{permissions:r.P.updateRole,children:(0,e.jsx)(ts,{})}),rs=(0,ee.ZP)(S.r)`
  align-items: center;
  height: ${(0,t.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:n})=>`${n.spaces[2]}}`};
  width: ${(0,t.Q1)(32)};

  svg {
    height: ${(0,t.Q1)(12)};
    width: ${(0,t.Q1)(12)};

    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,Ee=({sortedRoles:n,canDelete:a,permissions:u,setRoleToDelete:g,onDelete:x})=>{const{formatMessage:p}=(0,F.Z)(),{push:P}=(0,o.k6)(),[A,y]=x,L=_=>a&&!["public","authenticated"].includes(_.type),B=_=>{g(_),y(!A)},U=_=>{P(`/settings/users-permissions/roles/${_}`)};return(0,e.jsx)(G.p,{children:n?.map(_=>(0,e.jsxs)(Z.Tr,{...(0,t.X7)({fn:()=>U(_.id)}),children:[(0,e.jsx)(w.Td,{width:"20%",children:(0,e.jsx)(c.Z,{children:_.name})}),(0,e.jsx)(w.Td,{width:"50%",children:(0,e.jsx)(c.Z,{children:_.description})}),(0,e.jsx)(w.Td,{width:"30%",children:(0,e.jsx)(c.Z,{children:p({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:_.nb_users})})}),(0,e.jsx)(w.Td,{children:(0,e.jsxs)(l.k,{justifyContent:"end",...t.UW,children:[(0,e.jsx)(t.jW,{permissions:u.updateRole,children:(0,e.jsx)(rs,{to:`/settings/users-permissions/roles/${_.id}`,"aria-label":p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${_.name}`}),children:(0,e.jsx)(ge.Z,{})})}),L(_)&&(0,e.jsx)(t.jW,{permissions:u.deleteRole,children:(0,e.jsx)(H.h,{onClick:()=>B(_.id),noBorder:!0,icon:(0,e.jsx)(pe.Z,{}),label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${_.name}`})})})]})})]},_.name))})};Ee.defaultProps={canDelete:!1},Ee.propTypes={onDelete:b.array.isRequired,permissions:b.object.isRequired,setRoleToDelete:b.func.isRequired,sortedRoles:b.array.isRequired,canDelete:b.bool};const os=async(n,a)=>{try{const{get:u}=(0,t.tg)(),{data:g}=await u("/users-permissions/roles");return a("The roles have loaded successfully"),g}catch(u){throw n({type:"warning",message:{id:"notification.error"}}),new Error(u)}},is=async(n,a)=>{try{const{del:u}=(0,t.tg)();await u(`/users-permissions/roles/${n}`)}catch{a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},as=()=>{const{trackUsage:n}=(0,t.rS)(),{formatMessage:a,locale:u}=(0,F.Z)(),g=(0,t.lm)(),{notifyStatus:x}=(0,ae.G)(),[{query:p}]=(0,t.Kx)(),P=p?._q||"",[A,y]=(0,i.useState)(!1),[L,B]=(0,i.useState)(!1),[U,_]=(0,i.useState)();(0,t.go)();const{isLoading:W,allowedActions:{canRead:k,canDelete:X}}=(0,t.ss)({create:r.P.createRole,read:r.P.readRoles,update:r.P.updateRole,delete:r.P.deleteRole}),{isLoading:K,data:{roles:z},isFetching:oe,refetch:J}=(0,Y.useQuery)("get-roles",()=>os(g,x),{initialData:{},enabled:k}),{includes:Te}=(0,t.L0)(u,{sensitivity:"base"}),Be=(0,t.Xe)(u,{sensitivity:"base"}),Ie=K||oe,cs=()=>{y(!A)},us={roles:{id:(0,r.g)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,r.g)("Roles.empty.search"),defaultMessage:"No roles match the search."}},gs=a({id:"global.roles",defaultMessage:"Roles"}),ps=(0,Y.useMutation)(Q=>is(Q,g),{async onSuccess(){await J()}}),ms=async()=>{B(!0),await ps.mutateAsync(U),y(!A),B(!1)},ie=(z||[]).filter(Q=>Te(Q.name,P)||Te(Q.description,P)).sort((Q,Ue)=>Be.compare(Q.name,Ue.name)||Be.compare(Q.description,Ue.description)),hs=P&&!ie.length?"search":"roles",_s=4,xs=(z?.length||0)+1;return(0,e.jsxs)(se.A,{children:[(0,e.jsx)(t.SL,{name:gs}),(0,e.jsxs)(O.o,{"aria-busy":Ie,children:[(0,e.jsx)(R.T,{title:a({id:"global.roles",defaultMessage:"Roles"}),subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:(0,e.jsx)(t.jW,{permissions:r.P.createRole,children:(0,e.jsx)(t.Qj,{to:"/settings/users-permissions/roles/new",onClick:()=>n("willCreateRole"),startIcon:(0,e.jsx)(ne.Z,{}),size:"S",children:a({id:(0,r.g)("List.button.roles"),defaultMessage:"Add new role"})})})}),(0,e.jsx)(le.Z,{startActions:(0,e.jsx)(t.m,{label:a({id:"app.component.search.label",defaultMessage:"Search"})})}),(0,e.jsxs)(T.D,{children:[!k&&(0,e.jsx)(t.ZF,{}),(Ie||W)&&(0,e.jsx)(t.dO,{}),k&&ie&&ie?.length?(0,e.jsxs)(V.i,{colCount:_s,rowCount:xs,children:[(0,e.jsx)(te.h,{children:(0,e.jsxs)(Z.Tr,{children:[(0,e.jsx)(w.Th,{children:(0,e.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(w.Th,{children:(0,e.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.description",defaultMessage:"Description"})})}),(0,e.jsx)(w.Th,{children:(0,e.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.users",defaultMessage:"Users"})})}),(0,e.jsx)(w.Th,{children:(0,e.jsx)(f.T,{children:a({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,e.jsx)(Ee,{sortedRoles:ie,canDelete:X,permissions:r.P,setRoleToDelete:_,onDelete:[A,y]})]}):(0,e.jsx)(t.x7,{content:us[hs]})]}),(0,e.jsx)(t.QH,{isConfirmButtonLoading:L,onConfirm:ms,onToggleDialog:cs,isOpen:A})]})]})},ls=()=>(0,e.jsx)(t.O4,{permissions:r.P.accessRoles,children:(0,e.jsx)(as,{})}),ds=()=>(0,e.jsx)(t.O4,{permissions:r.P.accessRoles,children:(0,e.jsxs)(o.rs,{children:[(0,e.jsx)(o.AW,{path:"/settings/users-permissions/roles/new",component:ss,exact:!0}),(0,e.jsx)(o.AW,{path:"/settings/users-permissions/roles/:id",component:ns,exact:!0}),(0,e.jsx)(o.AW,{path:"/settings/users-permissions/roles",component:ls,exact:!0}),(0,e.jsx)(o.AW,{path:"",component:t.Hn})]})})}}]);
