(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{166:function(t,e,n){"use strict";n.r(e);var s=n(3),a=n.n(s),r=n(55),o=n.n(r),c=(n(68),n(19)),i=n.n(c),d=n(56),u=n(61),p=n(57),h=n(58),l=n(11),j=n(63),b=n(62),f=(n(70),n(59)),O=n.n(f),g=n(4),y=n.n(g),m=n(20),x=(n(146),n(147),n(60)),v=n.n(x),w=n(1);function k(t){var e=Object(m.b)((function(){return(new y.a).use(O.a,{endpoint:"/upload"}).on("upload-success",(function(e,n){console.log(n),t.historyAppend(Object(w.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"/uploads/"+n.body.data.name,children:n.body.data.name}))}))}));return Object(w.jsx)(m.a,{theme:"dark",uppy:e})}var I=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(p.a)(this,n),(s=e.call(this,t)).historyAppend=function(t){this.setState({history:[].concat(Object(u.a)(this.state.history),[t])})}.bind(Object(l.a)(s)),s.state={isLoggedIn:!1,history:[]},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,v.a.get("/isloggedin");case 3:if(t.t1=t.sent.data,t.t1){t.next=6;break}t.t1=!1;case 6:t.t2=t.t1,t.t3={isLoggedIn:t.t2},t.t0.setState.call(t.t0,t.t3);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isLoggedIn?Object(w.jsxs)("div",{className:"uppy",children:[Object(w.jsx)(k,{historyAppend:this.historyAppend}),Object(w.jsx)("div",{className:"history",children:this.state.history})]}):Object(w.jsx)("div",{className:"form",children:Object(w.jsxs)("form",{action:"/login",method:"post",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",{id:"password",name:"password",type:"password"}),Object(w.jsx)("input",{type:"submit",value:"Log In!"})]})})}}]),n}(a.a.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),s(t),a(t),r(t),o(t)}))};o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(I,{})}),document.getElementById("root")),L()},68:function(t,e,n){},70:function(t,e,n){}},[[166,1,2]]]);
//# sourceMappingURL=main.1c3f4117.chunk.js.map