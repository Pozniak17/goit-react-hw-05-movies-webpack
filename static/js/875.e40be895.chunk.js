"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{77:function(e,n,t){t.d(n,{aV:function(){return l},ck:function(){return p},pl:function(){return u}});var r,i,a,o=t(168),c=t(202),s=t(978),l=s.ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 25px;\n  justify-items: center;\n"]))),u=(0,s.ZP)(c.VF9)(i||(i=(0,o.Z)(["\n  position: absolute;\n  visibility: hidden;\n  color: #dac2c2;\n  right: 20px;\n  top: 15px;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n\n  :hover {\n    color: #bd0808fc;\n  }\n"]))),p=s.ZP.li(a||(a=(0,o.Z)(["\n  position: relative;\n  padding: 10px;\n  background-color: #cccccc;\n  text-align: center;\n  border-radius: 12px;\n  /* overflow: hidden; \u0414\u043e\u0434\u0430\u043d\u043e, \u0449\u043e\u0431 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0435 \u0432\u0438\u0445\u043e\u0434\u0438\u0432 \u0437\u0430 \u043c\u0435\u0436\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0443 */\n\n  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 8px 2px;\n\n  &:hover {\n    transform: scale(1.1); /* \u0417\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u043d\u044f \u0440\u043e\u0437\u043c\u0456\u0440\u0443 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n    transition: transform 0.3s ease; /* \u041f\u043b\u0430\u0432\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u0456\u0434 */\n  }\n\n  &:hover > "," {\n    visibility: visible;\n  }\n"])),u)},875:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(861),i=t(439),a=t(757),o=t.n(a),c=t(340),s=t(791),l=t(689),u=t(87),p=t(77),h=t(184),d=function(e){var n=e.onSubmit,t=e.value,r=e.onChange;return(0,h.jsxs)("form",{onSubmit:n,children:[(0,h.jsx)("input",{type:"text",placeholder:"Enter film",value:t,onChange:r}),(0,h.jsx)("button",{type:"submit",children:"search"})]})};c.Z.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var e,n=(0,l.TH)();console.log(n);var t=(0,s.useState)([]),a=(0,i.Z)(t,2),f=a[0],x=a[1],g=(0,u.lr)(),v=(0,i.Z)(g,2),m=v[0],b=v[1],j=(0,s.useState)(!1),w=(0,i.Z)(j,2),k=w[0],Z=w[1],y=(0,s.useState)(null),S=(0,i.Z)(y,2),_=S[0],C=S[1],P=null!==(e=m.get("query"))&&void 0!==e?e:"";console.log(P),(0,s.useEffect)((function(){if(""!==P){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,c.Z.get("/search/movie?query=".concat(P,"&include_adult=false&language=en-US&page=1&api_key=").concat("7e90108684ed83affdbe867f15ef1121"));case 4:n=e.sent,x(n.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),C(e.t0);case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[P]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{onSubmit:function(e){e.preventDefault()},value:P,onChange:function(e){if(""===e.target.value)return b({});b({query:e.target.value})}}),_&&(0,h.jsxs)("p",{children:["Whoops, something went wrong: ",_.message]}),k?(0,h.jsx)("h2",{children:"Loading..."}):(0,h.jsx)("div",{children:(0,h.jsx)(p.aV,{children:f.map((function(e){var t=e.title,r=e.poster_path,i=e.id;return(0,h.jsxs)(p.ck,{children:[(0,h.jsx)(p.pl,{}),(0,h.jsxs)(u.rU,{state:{from:n},to:"/movies/".concat(i),children:[r?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:"film",width:"200px",height:"300px"}):(0,h.jsx)("img",{src:"https://media.istockphoto.com/id/1452662817/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=KaRW6O_DcZXEFbMPS-3DrDP5z28TIdBoBzcCliubxyY=",alt:"film",width:"200px",height:"300px"}),(0,h.jsx)("p",{children:t})]})]},i)}))})})]})}}}]);
//# sourceMappingURL=875.e40be895.chunk.js.map