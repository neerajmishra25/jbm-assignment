(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(25),c=a.n(n),s=(a(86),a(8)),o=a(34),i=a(72),d=a(73),l=a(81),u="PRODUCT_LIST_REQUEST",j="PRODUCT_LIST_SUCCESS",p="PRODUCT_LIST_FAILED",b="PRODUCT_DETAIL_REQUEST",h="PRODUCT_DETAIL_SUCCESS",O="PRODUCT_DETAIL_FAILED",x="PRODUCT_DELETE_REQUEST",f="PRODUCT_DELETE_SUCCESS",g="PRODUCT_DELETE_FAILED",m="PRODUCT_CREATE_REQUEST",v="PRODUCT_CREATE_SUCCESS",y="PRODUCT_CREATE_FAILED",E="PRODUCT_CREATE_RESET",C="PRODUCT_UPDATE_REQUEST",S="PRODUCT_UPDATE_SUCCESS",I="PRODUCT_UPDATE_FAILED",L="PRODUCT_UPDATE_RESET",w="USER_LOGIN_REQUEST",T="USER_LOGIN_SUCCESS",_="USER_LOGIN_FAILED",k="USER_LOGOUT",R="USER_REGISTER_REQUEST",U="USER_REGISTER_SUCCESS",D="USER_REGISTER_FAILED",N=Object(o.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loading:!0,products:[]};case j:return{loading:!1,products:t.payload.products,pages:t.payload.pages,page:t.payload.page};case p:return{loading:!1,error:t.payload};default:return e}},productCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0};case v:return{loading:!1,success:!0,product:t.payload};case y:return{loading:!1,error:t.payload};case E:return{};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{review:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)({loading:!0},e);case h:return{loading:!1,product:t.payload};case O:return{loading:!1,error:t.payload};default:return e}},productDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case f:return{loading:!1,success:!0};case g:return{loading:!1,error:t.payload};default:return e}},productUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case S:return{loading:!1,success:!0,product:t.payload};case I:return{loading:!1,error:t.payload};case L:return{};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case T:return{loading:!1,userInfo:t.payload};case _:return{loading:!1,error:t.payload};case k:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return{loading:!0};case U:return{loading:!1,userInfo:t.payload};case D:return{loading:!1,error:t.payload};default:return e}}}),P={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},A=[i.a],G=Object(o.createStore)(N,P,Object(d.composeWithDevTools)(o.applyMiddleware.apply(void 0,A))),F=(a(93),a(17)),B=a(11),Q=a(125),J=a(30),M=a(132),z=a(134),H=a(130),$=a(10),W=a.n($),q=a(18),K=a(24),V=a.n(K),X=a(1),Y=function(){var e=Object(s.c)((function(e){return e.userLogin})),t=Object(s.b)(),a=e.userInfo;return Object(X.jsx)("header",{children:Object(X.jsx)(M.a,{style:{background:"#324d7e"},variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(X.jsxs)(Q.a,{children:[Object(X.jsx)(J.LinkContainer,{to:"/",children:Object(X.jsx)(M.a.Brand,{children:"JBM Assignment"})}),Object(X.jsx)(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(X.jsx)(M.a.Collapse,{id:"basic-navbar-nav",children:Object(X.jsxs)(z.a,{className:"ml-auto",children:[a?Object(X.jsx)(J.LinkContainer,{to:"#",onClick:function(){t(function(){var e=Object(q.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:k}),t({type:"USER_DETAILS_RESET"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:Object(X.jsx)(z.a.Link,{children:"Logout"})}):Object(X.jsx)(J.LinkContainer,{to:"/login",children:Object(X.jsxs)(z.a.Link,{children:[Object(X.jsx)("i",{className:"fas fa-user"}),"Sign In"]})}),a&&a.isAdmin&&Object(X.jsx)(H.a,{title:"Admin",id:"adminMenu",children:Object(X.jsx)(J.LinkContainer,{to:"/admin/productlist",children:Object(X.jsx)(H.a.Item,{children:"Products"})})})]})})]})})})},Z=a(127),ee=a(78),te=a(135),ae=function(e){var t=e.value,a=e.text,r=e.color;return Object(X.jsxs)("div",{className:"rating",children:[Object(X.jsx)("span",{children:Object(X.jsx)("i",{style:{color:r},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(X.jsx)("span",{children:Object(X.jsx)("i",{style:{color:r},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(X.jsx)("span",{children:Object(X.jsx)("i",{style:{color:r},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(X.jsx)("span",{children:Object(X.jsx)("i",{style:{color:r},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(X.jsx)("span",{children:Object(X.jsx)("i",{style:{color:r},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(X.jsx)("span",{children:a&&a+" reviews"})]})};ae.defaultProps={color:"#f8e825"};var re=ae,ne=function(e){var t=e.product;return Object(X.jsxs)(te.a,{className:"my-3 p-3 rounded",children:[Object(X.jsx)(F.Link,{to:"/product/".concat(t._id),children:Object(X.jsx)(te.a.Img,{src:t.image,variant:"top"})}),Object(X.jsxs)(te.a.Body,{children:[Object(X.jsx)(F.Link,{to:"/product/".concat(t._id),children:Object(X.jsx)(te.a.Title,{as:"div",children:Object(X.jsx)("strong",{children:t.name})})}),Object(X.jsx)(te.a.Text,{as:"div",children:Object(X.jsx)(re,{value:t.rating,text:"".concat(t.numReviews)})}),Object(X.jsxs)(te.a.Text,{as:"h3",children:["$",t.price]})]})]})},ce=a(133),se=function(e){var t=e.variant,a=e.children;return Object(X.jsx)(ce.a,{variant:t,children:a})},oe=a(126),ie=function(){return Object(X.jsx)(oe.a,{animation:"border",role:"status",style:{width:"50px",height:"50px",margin:"auto",display:"block"},children:Object(X.jsx)("span",{className:"sr-only",children:"Loading..."})})},de=a(80),le=a(136),ue=function(e){var t=e.pages,a=e.page,r=e.isAdmin,n=void 0!==r&&r,c=e.keyword,s=void 0===c?"":c;return t>1&&Object(X.jsx)(le.a,{children:Object(de.a)(Array(t).keys()).map((function(e){return Object(X.jsx)(J.LinkContainer,{to:n?"/admin/productlist/".concat(e+1):s?"/search/".concat(s,"/page/").concat(e+1):"/page/".concat(e+1),children:Object(X.jsx)(le.a.Item,{active:e+1===a,children:e+1})},e+1)}))})},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var a=Object(q.a)(W.a.mark((function a(r){var n,c;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:u}),a.next=4,V.a.get("/api/products?keyword=".concat(e,"&pageNumber=").concat(t));case 4:n=a.sent,c=n.data,r({type:j,payload:c}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),r({type:p,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},pe=function(e){return function(){var t=Object(q.a)(W.a.mark((function t(a){var r,n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:b}),t.next=4,V.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,a({type:h,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:O,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},be=function(e){return function(){var t=Object(q.a)(W.a.mark((function t(a,r){var n,c,s;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:x}),n=r(),c=n.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,V.a.delete("/api/products/".concat(e),s);case 6:a({type:f}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:g,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}()},he=function(e){var t=e.match,a=t.params.keyword,n=t.params.pageNumber||1,c=Object(s.b)(),o=Object(s.c)((function(e){return e.productList})),i=o.loading,d=o.error,l=o.products,u=o.page,j=o.pages;return Object(r.useEffect)((function(){c(je(a,n))}),[c,a,n]),Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)("h1",{children:"Latest Products"}),i?Object(X.jsx)(ie,{}):d?Object(X.jsx)(se,{variant:"danger",children:d}):Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Z.a,{children:l.map((function(e){return Object(X.jsx)(ee.a,{sm:12,md:6,lg:4,xl:3,children:Object(X.jsx)(ne,{product:e})},e._id)}))}),Object(X.jsx)(ue,{pages:j,page:u,keyword:a||""})]})]})},Oe=a(128),xe=a(137),fe=function(e){e.history;var t=e.match,a=Object(s.b)(),n=Object(s.c)((function(e){return e.productDetails})),c=n.product,o=n.loading,i=n.error;return Object(r.useEffect)((function(){c._id&&c._id===t.params.id||a(pe(t.params.id))}),[a,t,c._id]),Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(F.Link,{className:"btn btn-light my-3",to:"/",children:"Go Back"}),o?Object(X.jsx)(ie,{}):i?Object(X.jsx)(se,{variant:"danger",children:i}):Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(Z.a,{children:[Object(X.jsx)(ee.a,{md:6,children:Object(X.jsx)(Oe.a,{src:c.image,alt:c.name,fluid:!0})}),Object(X.jsx)(ee.a,{md:6,children:Object(X.jsxs)("div",{children:[Object(X.jsx)(xe.a.Item,{children:Object(X.jsx)("h3",{children:c.name})}),Object(X.jsx)(xe.a.Item,{children:Object(X.jsx)(re,{value:c.rating,text:c.numReviews})}),Object(X.jsxs)(xe.a.Item,{children:["Price:$",c.price]}),Object(X.jsxs)(xe.a.Item,{children:["Description:",c.description]})]})})]})})]})},ge=a(15),me=a(131),ve=a(77),ye=function(e){var t=e.children;return Object(X.jsx)(Q.a,{children:Object(X.jsx)(Z.a,{className:"justify-content-md-center",children:Object(X.jsx)(ee.a,{xs:12,md:6,children:t})})})},Ee=function(e){var t=e.location,a=e.history,n=Object(r.useState)(""),c=Object(ge.a)(n,2),o=c[0],i=c[1],d=Object(r.useState)(""),l=Object(ge.a)(d,2),u=l[0],j=l[1],p=Object(s.b)(),b=Object(s.c)((function(e){return e.userLogin})),h=b.loading,O=b.error,x=b.userInfo,f=t.search?t.search.split("=")[1]:"/";Object(r.useEffect)((function(){x&&a.push(f)}),[a,f,x]);return Object(X.jsxs)(ye,{children:[Object(X.jsx)("h1",{children:"Sign In"}),O&&Object(X.jsx)(se,{variant:"danger",children:O}),h&&Object(X.jsx)(ie,{}),Object(X.jsxs)(me.a,{onSubmit:function(e){e.preventDefault(),p(function(e,t){return function(){var a=Object(q.a)(W.a.mark((function a(r){var n,c,s;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:w}),n={headers:{"Content-Type":"application/json"}},a.next=5,V.a.post("api/users/login",{email:e,password:t},n);case 5:c=a.sent,s=c.data,r({type:T,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),r({type:_,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(o,u))},children:[Object(X.jsxs)(me.a.Group,{controlId:"email",children:[Object(X.jsx)(me.a.Label,{children:"Email Address"}),Object(X.jsx)(me.a.Control,{type:"email",placeholder:"Enter Email Address",onChange:function(e){return i(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"password",children:[Object(X.jsx)(me.a.Label,{children:"Password"}),Object(X.jsx)(me.a.Control,{type:"password",placeholder:"Enter password",onChange:function(e){return j(e.target.value)}})]}),Object(X.jsx)(ve.a,{type:"submit",variant:"primary",children:"Sign In"})]}),Object(X.jsx)(Z.a,{className:"py-3",children:Object(X.jsxs)(ee.a,{children:["New Customer?"," ",Object(X.jsx)(F.Link,{to:f?"/register?redirect=".concat(f):"/register",children:"Register Here"})]})})]})},Ce=function(e){var t=e.location,a=e.history,n=Object(r.useState)(""),c=Object(ge.a)(n,2),o=c[0],i=c[1],d=Object(r.useState)(""),l=Object(ge.a)(d,2),u=l[0],j=l[1],p=Object(r.useState)(""),b=Object(ge.a)(p,2),h=b[0],O=b[1],x=Object(r.useState)(""),f=Object(ge.a)(x,2),g=f[0],m=f[1],v=Object(r.useState)(""),y=Object(ge.a)(v,2),E=y[0],C=y[1],S=Object(s.b)(),I=Object(s.c)((function(e){return e.userRegister})),L=I.loading,w=I.error,_=I.userInfo,k=t.search?t.search.split("=")[1]:"/";Object(r.useEffect)((function(){_&&a.push(k)}),[a,k,_]);return Object(X.jsxs)(ye,{children:[Object(X.jsx)("h1",{children:"Sign Up"}),g&&Object(X.jsx)(se,{variant:"danger",children:g}),w&&Object(X.jsx)(se,{variant:"danger",children:w}),L&&Object(X.jsx)(ie,{}),Object(X.jsxs)(me.a,{onSubmit:function(e){if(e.preventDefault(),h!==u)return m("Password and confirm password should be same"),!1;S(function(e,t,a){return function(){var r=Object(q.a)(W.a.mark((function r(n){var c,s,o;return W.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:R}),c={headers:{"Content-Type":"application/json"}},r.next=5,V.a.post("/api/users",{name:e,email:t,password:a},c);case 5:s=r.sent,o=s.data,n({type:U,payload:o}),n({type:T,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),n({type:D,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(E,o,u))},children:[Object(X.jsxs)(me.a.Group,{controlId:"Name",children:[Object(X.jsx)(me.a.Label,{children:"Name "}),Object(X.jsx)(me.a.Control,{type:"text",placeholder:"Enter Name",onChange:function(e){return C(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"email",children:[Object(X.jsx)(me.a.Label,{children:"Email Address"}),Object(X.jsx)(me.a.Control,{type:"email",placeholder:"Enter Email Address",onChange:function(e){return i(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"password",children:[Object(X.jsx)(me.a.Label,{children:"Password"}),Object(X.jsx)(me.a.Control,{type:"password",placeholder:"Enter password",onChange:function(e){return j(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"cpassword",children:[Object(X.jsx)(me.a.Label,{children:"Confirm Password"}),Object(X.jsx)(me.a.Control,{type:"password",placeholder:"Confirm password",onChange:function(e){return O(e.target.value)}})]}),Object(X.jsx)(ve.a,{type:"submit",variant:"primary",children:"Register"})]}),Object(X.jsx)(Z.a,{className:"py-3",children:Object(X.jsxs)(ee.a,{children:["Have an account?"," ",Object(X.jsx)(F.Link,{to:k?"/login?redirect=".concat(k):"/login",children:"Login Here"})]})})]})},Se=a(129),Ie=a(79),Le=a.n(Ie),we=function(e){var t=e.history,a=e.match,n=Object(s.b)(),c=a.params.pageNumber||1,o=Object(s.c)((function(e){return e.userLogin})).userInfo,i=Object(s.c)((function(e){return e.productList})),d=i.loading,l=i.products,u=i.error,j=i.pages,p=i.page,b=Object(s.c)((function(e){return e.productDelete})),h=b.success,O=b.error,x=Object(s.c)((function(e){return e.productCreate})),f=x.loading,g=x.success,C=x.error,S=x.product;Object(r.useEffect)((function(){n({type:E}),g?t.push("/admin/product/".concat(S._id,"/edit")):o&&o.isAdmin?n(je("",c)):t.push("/login")}),[n,t,o,h,O,g,S,c]);var I=function(){var e=Object(q.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Le()({title:"Are you sure?",text:"Are you sure that you want to delete this product?",icon:"warning",dangerMode:!0,buttons:!0});case 2:if(!e.sent){e.next=6;break}return e.next=6,n(be(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(Z.a,{className:"align-items-center",children:[Object(X.jsx)(ee.a,{children:Object(X.jsx)("h1",{children:"Products"})}),Object(X.jsx)(ee.a,{className:"text-center",children:Object(X.jsxs)(ve.a,{className:"my-3",onClick:function(e){n(function(){var e=Object(q.a)(W.a.mark((function e(t,a){var r,n,c,s,o;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:m}),r=a(),n=r.userLogin.userInfo,c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}},e.next=6,V.a.post("/api/products",{},c);case 6:s=e.sent,o=s.data,t({type:v,payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:y,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}())},children:[Object(X.jsx)("i",{className:"fas fa-plus"})," Create Product"]})})]}),f&&Object(X.jsx)(ie,{}),C&&Object(X.jsx)(se,{variant:"danger",children:C}),d?Object(X.jsx)(ie,{}):u?Object(X.jsx)(se,{variant:"danger",children:u}):Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(Se.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",children:[Object(X.jsx)("thead",{children:Object(X.jsxs)("tr",{children:[Object(X.jsx)("th",{children:"Product Name"}),Object(X.jsx)("th",{children:"Price"}),Object(X.jsx)("th",{children:"Category"}),Object(X.jsx)("th",{children:"Brand"}),Object(X.jsx)("th",{})]})}),Object(X.jsx)("tbody",{children:l.map((function(e){return Object(X.jsxs)("tr",{children:[Object(X.jsx)("td",{children:e.name}),Object(X.jsx)("td",{children:e.price}),Object(X.jsx)("td",{children:e.brand}),Object(X.jsx)("td",{children:e.category}),Object(X.jsxs)("td",{children:[Object(X.jsx)(J.LinkContainer,{to:"/admin/product/".concat(e._id,"/edit"),children:Object(X.jsxs)(ve.a,{variant:"light",className:"btn-sm",children:[Object(X.jsx)("i",{className:"fas fa-edit"})," Edit"]})}),Object(X.jsxs)(ve.a,{variant:"danger",className:"btn-sm",onClick:function(){return I(e._id)},children:[Object(X.jsx)("i",{className:"fas fa-trash"})," Delete"]})]})]},e._id)}))})]}),Object(X.jsx)(ue,{pages:j,page:p,isAdmin:!0})]})]})},Te=function(e){var t=e.match,a=e.history,n=t.params.id,c=Object(r.useState)(""),o=Object(ge.a)(c,2),i=o[0],d=o[1],l=Object(r.useState)(0),u=Object(ge.a)(l,2),j=u[0],p=u[1],b=Object(r.useState)(""),h=Object(ge.a)(b,2),O=h[0],x=h[1],f=Object(r.useState)(""),g=Object(ge.a)(f,2),m=g[0],v=g[1],y=Object(r.useState)(""),E=Object(ge.a)(y,2),w=E[0],T=E[1],_=Object(r.useState)(0),k=Object(ge.a)(_,2),R=k[0],U=k[1],D=Object(r.useState)(""),N=Object(ge.a)(D,2),P=N[0],A=N[1],G=Object(r.useState)(!1),B=Object(ge.a)(G,2),Q=B[0],J=B[1],M=Object(s.b)(),z=Object(s.c)((function(e){return e.productDetails})),H=z.loading,$=z.error,K=z.product,Y=Object(s.c)((function(e){return e.productUpdate})),Z=Y.loading,ee=Y.error,te=Y.success;Object(r.useEffect)((function(){te?(M({type:L}),a.push("/admin/productlist")):K.name&&K._id===n?(d(K.name),p(K.price),x(K.image),v(K.category),U(K.countInStock),A(K.description),T(K.brand),A(K.description)):M(pe(n))}),[K,M,n,a,te]);var ae=function(){var e=Object(q.a)(W.a.mark((function e(t){var a,r,n,c,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],(r=new FormData).append("image",a),J(!0),e.prev=4,n={headers:{"Content-Type":"multipart/form-data"}},e.next=8,V.a.post("/api/uploads",r,n);case 8:c=e.sent,s=c.data,x(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:J(!1);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(F.Link,{to:"/admin/productlist",className:"btn btn-light",children:"Go Back"}),Object(X.jsxs)(ye,{children:[Object(X.jsx)("h1",{children:"Edit Product"}),Z&&Object(X.jsx)(ie,{}),ee&&Object(X.jsx)(se,{variant:"danger",children:ee}),H?Object(X.jsx)(ie,{}):$?Object(X.jsx)(se,{variant:"danger",children:$}):Object(X.jsxs)(me.a,{onSubmit:function(e){e.preventDefault(),M(function(e){return function(){var t=Object(q.a)(W.a.mark((function t(a,r){var n,c,s,o,i;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:C}),n=r(),c=n.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,V.a.put("/api/products/".concat(e._id),e,s);case 6:o=t.sent,i=o.data,a({type:S,payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:I,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()}({_id:n,name:i,price:j,image:O,category:m,countInStock:R,description:P,brand:w}))},children:[Object(X.jsxs)(me.a.Group,{controlId:"Name",children:[Object(X.jsx)(me.a.Label,{children:"Name "}),Object(X.jsx)(me.a.Control,{type:"text",placeholder:"Enter Name",value:i,onChange:function(e){return d(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"price",children:[Object(X.jsx)(me.a.Label,{children:"Price"}),Object(X.jsx)(me.a.Control,{type:"number",value:j,placeholder:"Enter Price",onChange:function(e){return p(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"image",children:[Object(X.jsx)(me.a.Label,{children:"Image"}),Object(X.jsx)(me.a.Control,{type:"text",value:O,placeholder:"Enter Image Url",onChange:function(e){return x(e.target.value)}}),Object(X.jsx)(me.a.File,{id:"image-file",label:"Choose file",custom:!0,onChange:ae}),Q&&Object(X.jsx)(ie,{})]}),Object(X.jsxs)(me.a.Group,{controlId:"brand",children:[Object(X.jsx)(me.a.Label,{children:"Brand"}),Object(X.jsx)(me.a.Control,{type:"text",value:w,placeholder:"Enter Brand",onChange:function(e){return T(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"category",children:[Object(X.jsx)(me.a.Label,{children:"Category"}),Object(X.jsx)(me.a.Control,{type:"text",value:m,placeholder:"Enter category",onChange:function(e){return v(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"countInStock",children:[Object(X.jsx)(me.a.Label,{children:"Count In Stock"}),Object(X.jsx)(me.a.Control,{type:"number",value:R,placeholder:"Stock",onChange:function(e){return U(e.target.value)}})]}),Object(X.jsxs)(me.a.Group,{controlId:"description",children:[Object(X.jsx)(me.a.Label,{children:"Description"}),Object(X.jsx)(me.a.Control,{type:"text",value:P,placeholder:"Enter Image Url",onChange:function(e){return A(e.target.value)}})]}),Object(X.jsx)(ve.a,{type:"submit",variant:"primary",children:"Update"})]})]})]})},_e=function(){return Object(X.jsxs)(F.BrowserRouter,{children:[Object(X.jsx)(Y,{}),Object(X.jsx)("main",{className:"py-3",children:Object(X.jsxs)(Q.a,{children:[Object(X.jsx)(B.d,{path:"/admin/productlist",exact:!0,component:we}),Object(X.jsx)(B.d,{path:"/admin/productlist/:pageNumber",exact:!0,component:we}),Object(X.jsx)(B.d,{path:"/admin/product/:id/edit",component:Te}),Object(X.jsx)(B.d,{path:"/register",component:Ce}),Object(X.jsx)(B.d,{path:"/login",component:Ee}),Object(X.jsx)(B.d,{path:"/product/:id",component:fe}),Object(X.jsx)(B.d,{path:"/search/:keyword",exact:!0,component:he}),Object(X.jsx)(B.d,{path:"/page/:pageNumber",component:he}),Object(X.jsx)(B.d,{path:"/search/:keyword/page/:pageNumber",component:he}),Object(X.jsx)(B.d,{path:"/",exact:!0,component:he})]})})]})},ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,138)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};c.a.render(Object(X.jsx)(s.a,{store:G,children:Object(X.jsx)(_e,{})}),document.getElementById("root")),ke()},86:function(e,t,a){},93:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.44f612dc.chunk.js.map