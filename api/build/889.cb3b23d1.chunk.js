(self.webpackChunkapi=self.webpackChunkapi||[]).push([[889],{1107:(y,P,t)=>{var n=t(84856),a=t(52593),c=a(n);y.exports=c},92403:(y,P,t)=>{var n=t(1107),a=t(47727);function c(g,p){var r=-1,d=a(g)?Array(g.length):[];return n(g,function(m,D,O){d[++r]=p(m,D,O)}),d}y.exports=c},16429:(y,P,t)=>{var n=t(36393),a=t(82393),c=t(90040),g=t(92403),p=t(63135),r=t(20435),d=t(9998),m=t(51339),D=t(26126);function O(v,x,M){x.length?x=n(x,function(L){return D(L)?function(T){return a(T,L.length===1?L[0]:L)}:L}):x=[m];var K=-1;x=n(x,r(c));var R=g(v,function(L,T,W){var Z=n(x,function(N){return N(L)});return{criteria:Z,index:++K,value:L}});return p(R,function(L,T){return d(L,T,M)})}y.exports=O},63135:y=>{function P(t,n){var a=t.length;for(t.sort(n);a--;)t[a]=t[a].value;return t}y.exports=P},17654:(y,P,t)=>{var n=t(85194);function a(c,g){if(c!==g){var p=c!==void 0,r=c===null,d=c===c,m=n(c),D=g!==void 0,O=g===null,v=g===g,x=n(g);if(!O&&!x&&!m&&c>g||m&&D&&v&&!O&&!x||r&&D&&v||!p&&v||!d)return 1;if(!r&&!m&&!x&&c<g||x&&p&&d&&!r&&!m||O&&p&&d||!D&&d||!v)return-1}return 0}y.exports=a},9998:(y,P,t)=>{var n=t(17654);function a(c,g,p){for(var r=-1,d=c.criteria,m=g.criteria,D=d.length,O=p.length;++r<D;){var v=n(d[r],m[r]);if(v){if(r>=O)return v;var x=p[r];return v*(x=="desc"?-1:1)}}return c.index-g.index}y.exports=a},52593:(y,P,t)=>{var n=t(47727);function a(c,g){return function(p,r){if(p==null)return p;if(!n(p))return c(p,r);for(var d=p.length,m=g?d:-1,D=Object(p);(g?m--:++m<d)&&r(D[m],m,D)!==!1;);return p}}y.exports=a},8243:(y,P,t)=>{var n=t(93367),a=t(16429),c=t(52431),g=t(65145),p=c(function(r,d){if(r==null)return[];var m=d.length;return m>1&&g(r,d[0],d[1])?d=[]:m>2&&g(d[0],d[1],d[2])&&(d=[d[0]]),a(r,n(d,1),[])});y.exports=p},50889:(y,P,t)=>{"use strict";t.r(P),t.d(P,{SettingsPage:()=>xn});var n=t(74081),a=t(27279),c=t(50703),g=t(5938),p=t(6918),r=t(32370),d=t(77804),m=t(93415),D=t(1821),O=t(10701),v=t(48102),x=t(55911),M=t(35250),K=t(12881),R=t(69878),L=t(94098),T=t(84366),W=t(61908),Z=t(98410),N=t(1597),X=t(77011),k=t(67909),ot=t(9902),Q=t(83375),et=t(94485),Y=t(78406),at=t(97767),it=t(4987),ut=t(93841),b=t(23298),H=t(74577),gt=t(27997),pt=t(73354),ht=t(77970),Et=t(27875),V=t(74758),Ct=t(68412),I=t(87006),Zt=t(364),_=t(61020),lt=t(51447),Ft=t(47533),J=t(30594),$t=t(8243),jt=t(59461),yt=t(12847),_t=t(71877),Nt=t(17912),Gt=t(96220),Ht=t(20534),Vt=t(49370),Qt=t(91561),Jt=t(80153),Xt=t(36938),Yt=t(84352),bt=t(59082),Rt=t(48157),e=t(70627),Tt=t(72450),At=t(40464),xt=t(61815),wt=t(87830),Mn=t(15816),fn=t(97442),On=t(13576),Pn=t(47184),vn=t(71563),Dn=t(49204),Ln=t(47853),Cn=t(75719),jn=t(74919),yn=t(29206),Rn=t(98934),Tn=t(43433),An=t(64797),Bn=t(85811),Un=t(8175);const kt=o=>o.map(s=>{const l=s.links.map(i=>({...i,isDisplayed:!1}));return{...s,links:l}}),qt=()=>{const[{isLoading:o,menu:s},l]=a.useState({isLoading:!0,menu:[]}),{allPermissions:i}=(0,I.vn)(),{shouldUpdateStrapi:h}=(0,I.L7)(),{settings:C}=(0,I.j1)(),A=(0,jt.v9)(yt.s),j=a.useMemo(()=>(0,J.Q)(),[]),{admin:E,global:u}=(0,J.p)(j,async()=>(await t.e(5146).then(t.bind(t,75146))).SETTINGS_LINKS_EE(),{combine(f,S){return{admin:[...S.admin,...f.admin],global:[...f.global,...S.global]}},defaultValue:{admin:[],global:[]}}),U=a.useCallback(f=>{if(!f.id)throw new Error("The settings menu item must have an id attribute.");return{...f,permissions:A.settings?.[f.id]?.main??[]}},[A.settings]);return a.useEffect(()=>{const f=async()=>{const G=await(tt=>Promise.all(tt.reduce((nt,dt,ct)=>{const B=dt.links.map(async(st,w)=>({hasPermission:await(0,I.qX)(i,st.permissions),sectionIndex:ct,linkIndex:w}));return[...nt,...B]},[])))($);l(tt=>({...tt,isLoading:!1,menu:$.map((nt,dt)=>({...nt,links:nt.links.map((ct,B)=>{const st=G.find(w=>w.sectionIndex===dt&&w.linkIndex===B);return{...ct,isDisplayed:Boolean(st?.hasPermission)}})}))}))},{global:S,...F}=C,$=kt([{...S,links:$t([...S.links,...u.map(U)],z=>z.id).map(z=>({...z,hasNotification:z.id==="000-application-infos"&&h}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:E.map(U)},...Object.values(F)]);f()},[E,u,i,C,h,U]),{isLoading:o,menu:s.map(f=>({...f,links:f.links.filter(S=>S.isDisplayed)}))}},tn=(0,Tt.ZP)(c.J)`
  right: 15px;
  position: absolute;
`,Bt=({menu:o})=>{const{formatMessage:s}=(0,_.Z)(),{trackUsage:l}=(0,I.rS)(),{pathname:i}=(0,lt.TH)(),C=o.filter(E=>!E.links.every(u=>u.isDisplayed===!1)).map(E=>({...E,title:E.intlLabel,links:E.links.map(u=>({...u,title:u.intlLabel,name:u.id}))})),A=s({id:"global.settings",defaultMessage:"Settings"}),j=(E=null)=>{l("willNavigate",{from:i,to:E})};return(0,n.jsxs)(_t.m,{ariaLabel:A,children:[(0,n.jsx)(Nt.p,{label:A}),(0,n.jsx)(Gt.Z,{children:C.map(E=>(0,n.jsx)(Ht.D,{label:s(E.intlLabel),children:E.links.map(u=>(0,n.jsxs)(Vt.E,{as:Ft.OL,withBullet:u.hasNotification,to:u.to,onClick:()=>j(u.to),children:[s(u.intlLabel),u?.lockIcon&&(0,n.jsx)(tn,{width:`${15/16}rem`,height:`${15/16}rem`,as:Qt.Z})]},u.id))},E.id))})]})};Bt.propTypes={menu:e.array.isRequired};const nn=[{async Component(){return await t.e(3420).then(t.bind(t,43420))},to:"/settings/roles",exact:!0},{async Component(){return await Promise.all([t.e(3599),t.e(8902),t.e(3352)]).then(t.bind(t,13352))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await Promise.all([t.e(3599),t.e(8902),t.e(3352)]).then(t.bind(t,13352))},to:"/settings/roles/new",exact:!0},{async Component(){return await Promise.all([t.e(8902),t.e(174)]).then(t.bind(t,45729))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(8075).then(t.bind(t,48075)).then(s=>s.i)},to:"/settings/users",exact:!0},{async Component(){return await t.e(9749).then(t.bind(t,69749))},to:"/settings/users/:id",exact:!0},{async Component(){return await Promise.all([t.e(1920),t.e(2345)]).then(t.bind(t,62345))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await Promise.all([t.e(1920),t.e(2822)]).then(t.bind(t,82822))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(5290).then(t.bind(t,5290))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(7519).then(t.bind(t,97519))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(3599),t.e(6094),t.e(5476),t.e(6975)]).then(t.bind(t,56975))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(3599),t.e(6094),t.e(5476),t.e(2940)]).then(t.bind(t,2940))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(3599),t.e(6094),t.e(1813)]).then(t.bind(t,81813))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(5574).then(t.bind(t,75574))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(3599),t.e(6094),t.e(5084)]).then(t.bind(t,15084))},to:"/settings/transfer-tokens/:id",exact:!0},{async Component(){return await t.e(816).then(t.bind(t,816))},to:"/settings/purchase-audit-logs",exact:!0},{async Component(){return await t.e(3674).then(t.bind(t,33674))},to:"/settings/purchase-review-workflows",exact:!0},{async Component(){return await t.e(4456).then(t.bind(t,84456))},to:"/settings/purchase-single-sign-on",exact:!0}],q=750,rt=100,Ut=["image/jpeg","image/png","image/svg+xml"],It={localImage:void 0},sn=(o=It,s)=>(0,xt.ZP)(o,l=>{switch(s.type){case"SET_LOCAL_IMAGE":{l.localImage=s.value;break}default:return l}}),Mt=({onChangeLogo:o,customLogo:s,goTo:l,Component:i,modalTitle:h,next:C,prev:A,currentStep:j})=>{const[{localImage:E},u]=(0,a.useReducer)(sn,It),{formatMessage:U}=(0,_.Z)(),f=F=>{u({type:"SET_LOCAL_IMAGE",value:F})},S=()=>{l(null)};return j?(0,n.jsxs)(g.P,{labelledBy:"modal",onClose:S,children:[(0,n.jsx)(p.x,{children:(0,n.jsx)(r.Z,{fontWeight:"bold",as:"h2",id:"modal",children:U(h)})}),(0,n.jsx)(i,{setLocalImage:f,goTo:l,next:C,prev:A,onClose:S,asset:E||s,onChangeLogo:o})]}):null};Mt.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},Mt.propTypes={Component:e.elementType,currentStep:e.string,customLogo:e.shape({name:e.string,url:e.string,width:e.number,height:e.number,ext:e.string}),goTo:e.func.isRequired,modalTitle:e.shape({id:e.string,defaultMessage:e.string}),next:e.string,onChangeLogo:e.func.isRequired,prev:e.string};const St={currentStep:void 0},on=(o=St,s)=>(0,xt.ZP)(o,l=>{switch(s.type){case"GO_TO":{l.currentStep=s.to;break}default:return l}}),en={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},Wt={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},an=o=>new Promise(s=>{const l=new FileReader;l.onload=()=>{const i=new Image;i.onload=function(){s({width:i.width,height:i.height})},i.src=l.result},l.readAsDataURL(o)}),ln=(o,s)=>({ext:o.name.split(".").pop(),size:o.size/1e3,name:o.name,url:URL.createObjectURL(o),rawFile:o,width:s.width,height:s.height}),Kt=async o=>{let s;if(!Ut.includes(o.type))throw s=new Error("File format"),s.displayMessage=en,s;const i=await an(o);if(!(i.width<=q&&i.height<=q))throw s=new Error("File sizing"),s.displayMessage=Wt,s;const C=ln(o,i);if(!(C.size<=rt))throw s=new Error("File sizing"),s.displayMessage=Wt,s;return C},rn=(0,Tt.ZP)(d._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,ft=({setLocalImage:o,goTo:s,next:l,onClose:i})=>{const{formatMessage:h}=(0,_.Z)(),[C,A]=(0,a.useState)(!1),[j,E]=(0,a.useState)(void 0),u=(0,a.useRef)(null),U=()=>A(!0),f=()=>A(!1),S=z=>{z.preventDefault(),u.current.click()},F=async()=>{f();const z=u.current.files[0];if(z)try{const G=await Kt(z);o(G),s(l)}catch(G){if(G.displayMessage)E(h(G.displayMessage,{size:rt,dimension:q})),u.current.focus();else throw G}},$=()=>C?"primary500":j?"danger600":"neutral300";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("form",{children:(0,n.jsx)(m.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,n.jsx)(D.g,{name:"logo-upload",error:j,children:(0,n.jsx)("label",{htmlFor:"logo-upload",children:(0,n.jsxs)(O.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsxs)(O.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:C?"primary100":"neutral100",borderColor:$(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:U,onDragLeave:f,children:[(0,n.jsx)(c.J,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:Jt.Z,"aria-hidden":!0}),(0,n.jsx)(m.x,{paddingTop:3,paddingBottom:5,children:(0,n.jsx)(r.Z,{variant:"delta",as:"span",children:h({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"})})}),(0,n.jsx)(rn,{accept:Ut,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:F,ref:u,id:"logo-upload"}),(0,n.jsx)(v.z,{type:"button",onClick:S,children:h({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})}),(0,n.jsx)(m.x,{paddingTop:6,children:(0,n.jsx)(r.Z,{variant:"pi",textColor:"neutral600",children:h({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:rt,dimension:q})})})]}),(0,n.jsx)(x.c,{})]})})})})}),(0,n.jsx)(M.m,{startActions:(0,n.jsx)(v.z,{onClick:i,variant:"tertiary",children:h({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})})})]})};ft.defaultProps={next:null},ft.propTypes={goTo:e.func.isRequired,next:e.string,onClose:e.func.isRequired,setLocalImage:e.func.isRequired};const dn=async o=>{try{const{get:s}=(0,I.tg)(),l=await s(o,{responseType:"blob",timeout:8e3});return new File([l.data],l.config.url,{type:l.headers["content-type"]})}catch(s){throw s.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},s}},Ot=({goTo:o,next:s,onClose:l,setLocalImage:i})=>{const{formatMessage:h}=(0,_.Z)(),[C,A]=(0,a.useState)(""),[j,E]=(0,a.useState)(null),u=f=>{A(f.target.value)},U=async()=>{try{const f=await dn(C),S=await Kt(f);i(S),o(s)}catch(f){if(f.displayMessage)E(h(f.displayMessage,{size:rt,dimension:q}));else throw f}};return(0,n.jsxs)("form",{onSubmit:f=>{f.preventDefault(),U()},children:[(0,n.jsx)(m.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,n.jsx)(K.o,{label:h({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:j,onChange:u,value:C,name:"logo-url"})}),(0,n.jsx)(M.m,{startActions:(0,n.jsx)(v.z,{onClick:l,variant:"tertiary",children:h({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,n.jsx)(v.z,{type:"submit",children:h({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"})})})]})};Ot.defaultProps={next:null},Ot.propTypes={goTo:e.func.isRequired,next:e.string,onClose:e.func.isRequired,setLocalImage:e.func.isRequired};const Pt=({setLocalImage:o,goTo:s,next:l,onClose:i})=>{const{formatMessage:h}=(0,_.Z)();return(0,n.jsxs)(R.v,{label:h({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple",children:[(0,n.jsxs)(m.x,{paddingLeft:8,paddingRight:8,children:[(0,n.jsxs)(L.m,{children:[(0,n.jsx)(L.O,{children:h({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})}),(0,n.jsx)(L.O,{children:h({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"})})]}),(0,n.jsx)(T.i,{})]}),(0,n.jsxs)(W.n,{children:[(0,n.jsx)(W.x,{children:(0,n.jsx)(ft,{onClose:i,setLocalImage:o,goTo:s,next:l})}),(0,n.jsx)(W.x,{children:(0,n.jsx)(Ot,{onClose:i,setLocalImage:o,goTo:s,next:l})})]})]})};Pt.defaultProps={next:null},Pt.propTypes={goTo:e.func.isRequired,next:e.string,onClose:e.func.isRequired,setLocalImage:e.func.isRequired};const zt=({asset:o})=>{const{formatMessage:s}=(0,_.Z)();return(0,n.jsxs)(Z.Z,{children:[(0,n.jsx)(N.O,{children:(0,n.jsx)(X.H,{size:"S",src:o.url})}),(0,n.jsxs)(k.e,{children:[(0,n.jsxs)(ot.a,{children:[(0,n.jsx)(Q.l,{children:o.name}),(0,n.jsx)(Q._,{children:`${o.ext.toUpperCase()} - ${o.width}\u2715${o.height}`})]}),(0,n.jsx)(et.E,{children:s({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"})})]})]})};zt.propTypes={asset:e.shape({name:e.string,url:e.string,width:e.number,height:e.number,ext:e.string}).isRequired};const vt=({onClose:o,asset:s,prev:l,next:i,goTo:h,setLocalImage:C,onChangeLogo:A})=>{const{formatMessage:j}=(0,_.Z)(),E=()=>{C(void 0),h(l)},u=()=>{A(s),h(i)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:[(0,n.jsxs)(O.k,{justifyContent:"space-between",paddingBottom:6,children:[(0,n.jsxs)(O.k,{direction:"column",alignItems:"flex-start",children:[(0,n.jsx)(r.Z,{variant:"pi",fontWeight:"bold",children:j({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})}),(0,n.jsx)(r.Z,{variant:"pi",textColor:"neutral500",children:j({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"})})]}),(0,n.jsx)(v.z,{onClick:E,variant:"secondary",children:j({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"})})]}),(0,n.jsx)(m.x,{maxWidth:(0,I.Q1)(180),children:s.url?(0,n.jsx)(zt,{asset:s}):null})]}),(0,n.jsx)(M.m,{startActions:(0,n.jsx)(v.z,{onClick:o,variant:"tertiary",children:j({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})}),endActions:(0,n.jsx)(v.z,{onClick:u,children:j({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"})})})]})};vt.defaultProps={next:null,prev:null},vt.propTypes={goTo:e.func.isRequired,asset:e.shape({name:e.string,url:e.string,width:e.number,height:e.number,ext:e.string}).isRequired,next:e.string,onClose:e.func.isRequired,onChangeLogo:e.func.isRequired,prev:e.string,setLocalImage:e.func.isRequired};const cn={upload:{Component:Pt,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:vt,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},mt=({canUpdate:o,customLogo:s,defaultLogo:l,hint:i,label:h,onChangeLogo:C,onResetLogo:A})=>{const[{currentStep:j},E]=(0,a.useReducer)(on,St),{Component:u,next:U,prev:f,modalTitle:S}=cn[j]||{},{formatMessage:F}=(0,_.Z)(),$=z=>{E({type:"GO_TO",to:z})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Y.F,{label:h,selectedSlide:0,hint:i,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:s?.name||"logo.png",actions:(0,n.jsxs)(at.b,{children:[(0,n.jsx)(it.h,{disabled:!o,onClick:()=>$(s?"pending":"upload"),label:F({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:(0,n.jsx)(Xt.Z,{})}),s&&(0,n.jsx)(it.h,{disabled:!o,onClick:A,label:F({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:(0,n.jsx)(Yt.Z,{})})]}),children:(0,n.jsx)(ut.q,{label:F({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"}),children:(0,n.jsx)(m.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:s?.url||l,alt:F({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})})})}),(0,n.jsx)(Mt,{Component:u,currentStep:j,onChangeLogo:C,customLogo:s,goTo:$,next:U,prev:f,modalTitle:S})]})};mt.defaultProps={canUpdate:!1,customLogo:null,hint:null},mt.propTypes={canUpdate:e.bool,customLogo:e.shape({url:e.string,name:e.string}),label:e.string.isRequired,hint:e.string,defaultLogo:e.string.isRequired,onChangeLogo:e.func.isRequired,onResetLogo:e.func.isRequired};const gn=(o,s)=>wt(o,{menuLogo:{display:s.menuLogo},authLogo:{display:s.authLogo}}),Dt={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},mn=(o=Dt,s)=>(0,xt.ZP)(o,l=>{switch(s.type){case"SET_CUSTOM_MENU_LOGO":{l.menuLogo.display=s.value,l.menuLogo.submit.rawFile=s.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{l.authLogo.display=s.value,l.authLogo.submit.rawFile=s.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{l.menuLogo.display=null,l.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{l.authLogo.display=null,l.authLogo.submit={rawFile:null,isReset:!0};break}default:return l}}),Lt=(0,a.forwardRef)(({canUpdate:o,projectSettingsStored:s},l)=>{const{formatMessage:i}=(0,_.Z)(),{trackUsage:h}=(0,I.rS)(),{logos:{menu:C,auth:A}}=(0,J.u)(),[{menuLogo:j,authLogo:E},u]=(0,a.useReducer)(mn,Dt,()=>gn(Dt,s)),U=$=>{u({type:"SET_CUSTOM_MENU_LOGO",value:$})},f=()=>{h("didClickResetLogo",{logo:"menu"}),u({type:"RESET_CUSTOM_MENU_LOGO"})},S=$=>{u({type:"SET_CUSTOM_AUTH_LOGO",value:$})},F=()=>{h("didClickResetLogo",{logo:"auth"}),u({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,a.useImperativeHandle)(l,()=>({getValues:()=>({menuLogo:j.submit,authLogo:E.submit})})),(0,n.jsxs)(m.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,n.jsx)(r.Z,{variant:"delta",as:"h3",children:i({id:"Settings.application.customization",defaultMessage:"Customization"})}),(0,n.jsx)(r.Z,{variant:"pi",textColor:"neutral600",children:i({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:q,size:rt})}),(0,n.jsxs)(b.r,{paddingTop:4,gap:4,children:[(0,n.jsx)(H.P,{col:6,s:12,children:(0,n.jsx)(mt,{canUpdate:o,customLogo:j.display,defaultLogo:C.default,hint:i({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:i({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:U,onResetLogo:f})}),(0,n.jsx)(H.P,{col:6,s:12,children:(0,n.jsx)(mt,{canUpdate:o,customLogo:E.display,defaultLogo:A.default,hint:i({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:i({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:S,onResetLogo:F})})]})]})});Lt.defaultProps={canUpdate:!1,projectSettingsStored:null},Lt.propTypes={canUpdate:e.bool,projectSettingsStored:e.shape({menuLogo:e.shape({url:e.string,name:e.string})})};const un=o=>{const s=new FormData;return Object.entries(o).forEach(([l,i])=>{i&&i.rawFile instanceof File&&s.append(l,i.rawFile),i&&i.isReset&&s.append(l,null)}),s},pn=()=>null,hn=()=>{const o=a.useRef(),s=(0,I.lm)(),{trackUsage:l}=(0,I.rS)(),{formatMessage:i}=(0,_.Z)(),{get:h,post:C}=(0,I.kY)(),{updateProjectSettings:A}=(0,J.u)(),j=(0,jt.v9)(yt.s),{formatAPIError:E}=(0,I.So)(),{communityEdition:u,latestStrapiReleaseTag:U,nodeVersion:f,shouldUpdateStrapi:S,strapiVersion:F}=(0,I.L7)(),$=(0,J.p)(pn,async()=>(await t.e(4060).then(t.bind(t,64060))).AdminSeatInfoEE),{allowedActions:{canRead:z,canUpdate:G}}=(0,I.ss)(j.settings["project-settings"]);(0,I.go)();const{data:tt,isLoading:nt}=(0,At.useQuery)(["project-settings"],async()=>{const{data:B}=await h("/admin/project-settings");return B},{cacheTime:0,enabled:z,select(B){return{...B,authLogo:B.authLogo?{...B.authLogo,url:(0,I.CR)(B.authLogo.url)}:B.authLogo,menuLogo:B.menuLogo?{...B.menuLogo,url:(0,I.CR)(B.menuLogo.url)}:B.menuLogo}}}),dt=(0,At.useMutation)(B=>C("/admin/project-settings",B,{headers:{"Content-Type":"multipart/form-data"}}),{onError(B){s({type:"warning",message:E(B)})},async onSuccess(B){const{menuLogo:st,authLogo:w}=B;A({menuLogo:st?.url,authLogo:w?.url}),st?.rawFile&&l("didChangeLogo",{logo:"menu"}),w?.rawFile&&l("didChangeLogo",{logo:"auth"}),s({type:"success",message:i({id:"app",defaultMessage:"Saved"})})}}),ct=B=>{B.preventDefault(),dt.mutate(un(o.current.getValues()))};return $?(0,n.jsxs)(gt.A,{children:[(0,n.jsx)(I.SL,{name:"Application"}),(0,n.jsx)(pt.o,{children:nt?(0,n.jsx)(ht.a,{children:i({id:"Settings.application.isLoading",defaultMessage:"Loading"})}):(0,n.jsxs)("form",{onSubmit:ct,children:[(0,n.jsx)(Et.T,{title:i({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:i({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:G&&(0,n.jsx)(v.z,{type:"submit",startIcon:(0,n.jsx)(bt.Z,{}),children:i({id:"global.save",defaultMessage:"Save"})})}),(0,n.jsx)(V.D,{children:(0,n.jsxs)(O.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,n.jsxs)(O.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,n.jsx)(r.Z,{variant:"delta",as:"h3",children:i({id:"global.details",defaultMessage:"Details"})}),(0,n.jsxs)(b.r,{gap:5,as:"dl",children:[(0,n.jsxs)(H.P,{col:6,s:12,children:[(0,n.jsx)(r.Z,{variant:"sigma",textColor:"neutral600",as:"dt",children:i({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})}),(0,n.jsxs)(O.k,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,n.jsxs)(r.Z,{children:["v",F]}),S&&(0,n.jsx)(Ct.r,{href:`https://github.com/strapi/strapi/releases/tag/${U}`,isExternal:!0,endIcon:(0,n.jsx)(Rt.Z,{}),children:i({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})})]})]}),(0,n.jsxs)(H.P,{col:6,s:12,children:[(0,n.jsx)(r.Z,{variant:"sigma",textColor:"neutral600",as:"dt",children:i({id:"Settings.application.edition-title",defaultMessage:"current plan"})}),(0,n.jsxs)(O.k,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,n.jsx)(r.Z,{children:i({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:u})}),(0,n.jsx)(Ct.r,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:(0,n.jsx)(Rt.Z,{}),children:i({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})})]})]}),(0,n.jsxs)(H.P,{col:6,s:12,children:[(0,n.jsx)(r.Z,{variant:"sigma",textColor:"neutral600",as:"dt",children:i({id:"Settings.application.node-version",defaultMessage:"node version"})}),(0,n.jsx)(r.Z,{as:"dd",children:f})]}),(0,n.jsx)($,{})]})]}),z&&tt&&(0,n.jsx)(Lt,{canUpdate:G,ref:o,projectSettingsStored:tt})]})})]})})]}):null};function En(o){return o.filter((s,l,i)=>i.findIndex(h=>h.key===s.key)===l)}function xn(){const{settingId:o}=(0,lt.UO)(),{settings:s}=(0,I.j1)(),{formatMessage:l}=(0,_.Z)(),{isLoading:i,menu:h}=qt(),C=(0,J.p)(nn,async()=>(await t.e(604).then(t.bind(t,90604))).ROUTES_EE,{combine(E,u){return[...E,...u]},defaultValue:[]}),A=a.useMemo(()=>En(C.map(({to:E,Component:u,exact:U})=>(0,J.d)(u,E,U))),[C]),j=Object.values(s).flatMap(E=>{const{links:u}=E;return u.map(U=>(0,J.d)(U.Component,U.to,U.exact||!1))});return i?(0,n.jsx)(I.dO,{}):o?(0,n.jsxs)(gt.A,{sideNav:(0,n.jsx)(Bt,{menu:h}),children:[(0,n.jsx)(Zt.q,{title:l({id:"global.settings",defaultMessage:"Settings"})}),(0,n.jsxs)(lt.rs,{children:[(0,n.jsx)(lt.AW,{path:"/settings/application-infos",component:hn,exact:!0}),A,j]})]}):(0,n.jsx)(lt.l_,{to:"/settings/application-infos"})}},27997:(y,P,t)=>{"use strict";t.d(P,{A:()=>r});var n=t(74081),a=t(72450),c=t(93415);const g=(0,a.ZP)(c.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:d})=>d?"auto 1fr":"1fr"};
`,p=(0,a.ZP)(c.x)`
  overflow-x: hidden;
`,r=({sideNav:d,children:m})=>(0,n.jsxs)(g,{hasSideNav:Boolean(d),children:[d,(0,n.jsx)(p,{paddingBottom:10,children:m})]})},68412:(y,P,t)=>{"use strict";t.d(P,{r:()=>v});var n=t(74081),a=t(27279),c=t(48157),g=t(47533),p=t(72450),r=t(61657),d=t(32370),m=t(93415);const D=p.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:x})=>x?"none":void 0};
  color: ${({disabled:x,theme:M})=>x?M.colors.neutral600:M.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${d.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:x})=>x.colors.primary500};
  }

  &:active {
    color: ${({theme:x})=>x.colors.primary700};
  }

  ${r.BF};
`,O=(0,p.ZP)(m.x)`
  display: flex;
`,v=a.forwardRef(({children:x,href:M,to:K,disabled:R=!1,startIcon:L,endIcon:T,...W},Z)=>{const N=M?"_blank":void 0,X=M?"noreferrer noopener":void 0;return(0,n.jsxs)(D,{as:K&&!R?g.OL:"a",target:N,rel:X,to:R?void 0:K,href:R?"#":M,disabled:R,ref:Z,...W,children:[L&&(0,n.jsx)(O,{as:"span","aria-hidden":!0,paddingRight:2,children:L}),(0,n.jsx)(d.Z,{children:x}),T&&!M&&(0,n.jsx)(O,{as:"span","aria-hidden":!0,paddingLeft:2,children:T}),M&&(0,n.jsx)(O,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,n.jsx)(c.Z,{})})]})})},71877:(y,P,t)=>{"use strict";t.d(P,{m:()=>r});var n=t(74081),a=t(72450),c=t(23298);const g=`${232/16}rem`,p=(0,a.ZP)(c.r)`
  width: ${g};
  background: ${({theme:d})=>d.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:d})=>d.colors.neutral200};
  z-index: 1;
`,r=({ariaLabel:d,...m})=>(0,n.jsx)(p,{"aria-label":d,as:"nav",...m})},17912:(y,P,t)=>{"use strict";t.d(P,{p:()=>L});var n=t(74081),a=t(27279),c=t(10382),g=t(72450),p=t(89166),r=t(74513);const d=T=>{const W=(0,a.useRef)();return(0,a.useEffect)(()=>{W.current=T}),W.current};var m=t(84366),D=t(93415),O=t(28479),v=t(31624),x=t(10701),M=t(32370),K=t(4987);const R=(0,g.ZP)(m.i)`
  width: ${24/16}rem;
  background-color: ${({theme:T})=>T.colors.neutral200};
`,L=({as:T="h2",label:W,searchLabel:Z="",searchable:N=!1,onChange:X=()=>{},value:k="",onClear:ot=()=>{},onSubmit:Q=()=>{},id:et})=>{const[Y,at]=(0,a.useState)(!1),it=d(Y),ut=(0,r.M)(et),b=(0,a.useRef)(void 0),H=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{Y&&b.current&&b.current.focus(),it&&!Y&&H.current&&H.current.focus()},[Y,it]);const gt=()=>{at(V=>!V)},pt=V=>{ot(V),b.current.focus()},ht=V=>{V.relatedTarget?.id!==ut&&at(!1)},Et=V=>{V.key===p.y.ESCAPE&&at(!1)};return Y?(0,n.jsxs)(D.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(O.U,{children:(0,n.jsx)(v.w,{name:"searchbar",value:k,onChange:X,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:Et,ref:b,onBlur:ht,onClear:pt,onSubmit:Q,clearLabel:"Clear",size:"S",children:Z})}),(0,n.jsx)(D.x,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(R,{})})]}):(0,n.jsxs)(D.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(x.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(M.Z,{variant:"beta",as:T,children:W}),N&&(0,n.jsx)(K.h,{ref:H,onClick:gt,label:Z,icon:(0,n.jsx)(c.Z,{})})]}),(0,n.jsx)(D.x,{paddingTop:4,children:(0,n.jsx)(R,{})})]})}},49370:(y,P,t)=>{"use strict";t.d(P,{E:()=>x});var n=t(74081),a=t(27279),c=t(79830),g=t(72450),p=t(93415),r=t(32370),d=t(10701),m=t(30413);const D=(0,g.ZP)(p.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:M})=>M.colors.neutral800};
  svg > * {
    fill: ${({theme:M})=>M.colors.neutral600};
  }

  &.active {
    ${({theme:M})=>`
      background-color: ${M.colors.primary100};
      border-right: 2px solid ${M.colors.primary600};
      svg > * {
        fill: ${M.colors.primary700};
      }
      ${r.Z} {
        color: ${M.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,O=(0,g.ZP)(c.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:M,$active:K})=>K?M.colors.primary600:M.colors.neutral600};
  }
`,v=g.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,x=a.forwardRef(({children:M,icon:K=null,withBullet:R=!1,as:L=m.f,isSubSectionChild:T=!1,...W},Z)=>(0,n.jsxs)(D,{as:L,icon:K,background:"neutral100",paddingLeft:T?9:7,paddingBottom:2,paddingTop:2,ref:Z,...W,children:[(0,n.jsxs)(d.k,{children:[K?(0,n.jsx)(v,{children:K}):(0,n.jsx)(O,{}),(0,n.jsx)(p.x,{paddingLeft:2,children:(0,n.jsx)(r.Z,{as:"span",children:M})})]}),R&&(0,n.jsx)(p.x,{as:d.k,paddingRight:4,children:(0,n.jsx)(O,{$active:!0})})]}))},20534:(y,P,t)=>{"use strict";t.d(P,{D:()=>K});var n=t(74081),a=t(27279),c=t(72450),g=t(10411),p=t(10701),r=t(93415),d=t(32370);const m=(0,c.ZP)(p.k)`
  border: none;
  padding: 0;
  background: transparent;
`,D=c.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:R})=>R?"0deg":"180deg"});
`,O=({collapsable:R=!1,label:L,onClick:T=()=>{},ariaExpanded:W,ariaControls:Z})=>R?(0,n.jsxs)(m,{as:"button",onClick:T,"aria-expanded":W,"aria-controls":Z,textAlign:"left",children:[(0,n.jsx)(r.x,{paddingRight:1,children:(0,n.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:L})}),R&&(0,n.jsx)(D,{rotated:W,children:(0,n.jsx)(g.Z,{"aria-hidden":!0})})]}):(0,n.jsx)(m,{children:(0,n.jsx)(r.x,{paddingRight:1,children:(0,n.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:L})})});var v=t(74513),x=t(4963);const M=(0,c.ZP)(r.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:R})=>R.colors.neutral500};
    }
  }
`,K=({collapsable:R=!1,label:L,badgeLabel:T,children:W,id:Z})=>{const[N,X]=(0,a.useState)(!0),k=(0,v.M)(Z),ot=()=>{X(Q=>!Q)};return(0,n.jsxs)(p.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(M,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(r.x,{position:"relative",paddingRight:T?6:0,children:[(0,n.jsx)(O,{onClick:ot,ariaExpanded:N,ariaControls:k,collapsable:R,label:L}),T&&(0,n.jsx)(x.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:T})]})}),(!R||N)&&(0,n.jsx)("ol",{id:k,children:a.Children.map(W,(Q,et)=>(0,n.jsx)("li",{children:Q},et))})]})}},96220:(y,P,t)=>{"use strict";t.d(P,{Z:()=>p});var n=t(74081),a=t(27279),c=t(93415),g=t(10701);const p=({children:r,spacing:d=2,horizontal:m=!1,...D})=>(0,n.jsx)(c.x,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(g.k,{as:"ol",gap:d,direction:m?"row":"column",alignItems:m?"center":"stretch",...D,children:a.Children.map(r,(O,v)=>(0,n.jsx)("li",{children:O},v))})})},79830:(y,P,t)=>{"use strict";t.d(P,{Z:()=>c});var n=t(74081);const a=g=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 4 4",...g,children:(0,n.jsx)("rect",{width:4,height:4,fill:"#A5A5BA",rx:2})}),c=a},91561:(y,P,t)=>{"use strict";t.d(P,{Z:()=>c});var n=t(74081);const a=g=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...g,children:(0,n.jsx)("path",{fill:"#8E8EA9",d:"M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"})}),c=a}}]);
