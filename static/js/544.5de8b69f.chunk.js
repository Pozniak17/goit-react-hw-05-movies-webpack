"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{544:function(e,n,t){t.r(n);var r=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=t(87),u=t(340),p=t(77),d=t(184);u.Z.defaults.baseURL="https://api.themoviedb.org/3";n.default=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],s=n[1],l=(0,i.useState)(!1),h=(0,a.Z)(l,2),f=h[0],x=h[1],g=(0,i.useState)(null),m=(0,a.Z)(g,2),v=m[0],b=m[1];return(0,i.useEffect)((function(){x(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/trending/movie/day?api_key=".concat("7e90108684ed83affdbe867f15ef1121"));case 3:n=e.sent,s(n.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(!0);case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(t),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"Trending today"}),v&&(0,d.jsxs)("p",{children:["Whoops, something went wrong: ",v.message]}),f?(0,d.jsx)("h2",{children:"Loading..."}):(0,d.jsx)(p.a,{children:t.map((function(e){var n=e.title,t=e.id,r=e.poster_path;return(0,d.jsx)(p.c,{children:(0,d.jsxs)(o.rU,{to:"/movies/".concat(t),children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:"film",width:"200px",height:"300px"}),n]})},t)}))})]})}},77:function(e,n,t){t.d(n,{a:function(){return i},c:function(){return o}});var r,a,s=t(168),c=t(978),i=c.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 25px;\n  justify-items: center;\n"]))),o=c.ZP.li(a||(a=(0,s.Z)(["\n  padding: 10px;\n  background-color: #cccccc;\n  text-align: center;\n  border-radius: 12px;\n\n  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 8px 2px;\n\n  &:hover {\n    transform: scale(1.1); /* \u0417\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u043d\u044f \u0440\u043e\u0437\u043c\u0456\u0440\u0443 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n    transition: transform 0.3s ease; /* \u041f\u043b\u0430\u0432\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u0456\u0434 */\n  }\n"])))}}]);
//# sourceMappingURL=544.5de8b69f.chunk.js.map