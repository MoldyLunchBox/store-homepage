"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[2391],{11745:(v,n,_)=>{_.d(n,{a:()=>M,g:()=>D});var O=_(97003),l=_(47706);function D(E){if(!E)return null;const t=Object.entries(O.W.colors).filter(([,o])=>o.toUpperCase()===E.toUpperCase()).reduce((o,[s])=>(l.S?.[s]&&(o=s),o),null);return t?{themeColorName:t,name:l.S[t]}:null}function M(){return Object.entries(l.S).map(([E,P])=>({hex:O.W.colors[E].toUpperCase(),name:P}))}},62391:(v,n,_)=>{_.r(n),_.d(n,{REVIEW_WORKFLOW_FILTERS:()=>u});var O=_(8175),l=_(98934),D=_(74919),M=_(92249),E=_(55377),P=_(87830),t=_(43433),o=_(87006),s=_(74081),a=_(8295),W=_(61121),r=_(63738),T=_(10701),A=_(32370),i=_(77970),e=_(70627),R=_(61020),I=_(96387),m=_(11266),K=_(88181),c=_(11745),j=_(27279),G=_(30594),x=_(15816),w=_(97442),Y=_(13576),p=_(47184),$=_(364),H=_(59461),Q=_(71563),V=_(49204),Z=_(40464),z=_(47853),X=_(75719),J=_(29206),k=_(86961),b=_(10124),q=_(51527),__=_(8243),s_=_(76368),E_=_(12847),t_=_(64797),a_=_(85811),o_=_(3243),n_=_(6078),O_=_(51943),l_=_(84921),P_=_(41942),e_=_(4828),D_=_(22919),M_=_(53915),r_=_(75041),T_=_(30200),d_=_(91379),W_=_(33299),A_=_(33409),i_=_(63645),R_=_(7988),L_=_(7055),C_=_(26757),v_=_(58311),I_=_(29510),m_=_(79146),K_=_(16946),U_=_(69530),B_=_(19764),g_=_(42982),f_=_(26126),S_=_(80481),h_=_(81465),y_=_(37997),c_=_(63799),u_=_(47706);const U=({value:L,onChange:g})=>{const{formatMessage:C}=(0,R.Z)(),{users:f,isLoading:S}=(0,m.u)();return(0,s.jsx)(a.hQ,{value:L,"aria-label":C({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select an user to filter"}),onChange:g,loading:S,children:f.map(d=>(0,s.jsx)(W.O,{value:d.id.toString(),children:(0,I.g)(d,C)},d.id))})};U.propTypes={onChange:e.func.isRequired,value:e.string},U.defaultProps={value:""};const B=({value:L,onChange:g,uid:C})=>{const{formatMessage:f}=(0,R.Z)(),{workflows:[S],isLoading:d}=(0,K.u)({filters:{contentTypes:C}});return(0,s.jsx)(r.q4,{"aria-label":f({id:"content-manager.components.Filters.reviewWorkflows.label",defaultMessage:"Search and select an workflow stage to filter"}),value:L,onChange:g,loading:d,customizeContent:()=>(0,s.jsxs)(T.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,s.jsx)(A.Z,{textColor:"neutral800",ellipsis:!0,children:L}),d?(0,s.jsx)(i.a,{small:!0,style:{display:"flex"}}):null]}),children:(S?.stages??[]).map(({id:N,color:h,name:y})=>{const{themeColorName:F}=(0,c.g)(h);return(0,s.jsx)(r.ag,{startIcon:(0,s.jsx)(T.k,{height:2,background:h,borderColor:F==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:y,children:y},N)})})};B.defaultProps={value:""},B.propTypes={onChange:e.func.isRequired,uid:e.string.isRequired,value:e.string};const u=[{fieldSchema:{type:"relation",mainField:{name:"name",schema:{type:"string"}}},metadatas:{customInput:B,label:{id:(0,E.g)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}},name:"strapi_stage"},{fieldSchema:{type:"relation",mainField:{name:"id",schema:{type:"int"}}},metadatas:{customInput:U,customOperators:[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],label:{id:(0,E.g)("containers.ListPage.table-headers.reviewWorkflows.assignee.label"),defaultMessage:"Assignee"}},name:"strapi_assignee"}]},47706:(v,n,_)=>{_.d(n,{A:()=>t,C:()=>m,D:()=>I,R:()=>l,S:()=>e,a:()=>K,b:()=>R,c:()=>o,d:()=>a,e:()=>D,f:()=>M,g:()=>P,h:()=>E,i:()=>i,j:()=>W,k:()=>s,l:()=>r,m:()=>T,n:()=>A});var O=_(97003);const l="settings_review-workflows",D="Settings/Review_Workflows/RESET_WORKFLOW",M="Settings/Review_Workflows/SET_CONTENT_TYPES",E="Settings/Review_Workflows/SET_IS_LOADING",P="Settings/Review_Workflows/SET_ROLES",t="Settings/Review_Workflows/SET_WORKFLOW",o="Settings/Review_Workflows/SET_WORKFLOWS",s="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",a="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",W="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",r="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",T="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",A="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",i="Settings/Review_Workflows/WORKFLOW_UPDATE",e={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},R=O.W.colors.primary600,I={STAGE:"stage"},m="numberOfWorkflows",K="stagesPerWorkflow"},88181:(v,n,_)=>{_.d(n,{u:()=>M});var O=_(27279),l=_(87006),D=_(40464);function M(E={}){const{get:P}=(0,l.kY)(),{id:t="",...o}=E,s={populate:"stages"},{data:a,isLoading:W,status:r,refetch:T}=(0,D.useQuery)(["review-workflows","workflows",t],async()=>(await P(`/admin/review-workflows/workflows/${t}`,{params:{...s,...o}})).data),A=O.useMemo(()=>t&&a?.data?[a.data]:Array.isArray(a?.data)?a.data:[],[a?.data,t]);return{meta:O.useMemo(()=>a?.meta??{},[a?.meta]),workflows:A,isLoading:W,status:r,refetch:T}}}}]);
