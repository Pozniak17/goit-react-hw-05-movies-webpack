"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[780],{5780:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t,a,i,s=r(5861),o=r(9439),c=r(7757),u=r.n(c),h=r(340),l=r(2791),d=r(7689),f=r(168),p=r(2978),v=p.ZP.div(t||(t=(0,f.Z)([""]))),g=p.ZP.li(a||(a=(0,f.Z)(["\n  background-color: #b9b4ff8a;\n  list-style: none;\n  border: "," white;\n  padding: 15px;\n  border-radius: ","; //12px\n"])),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.radii.big})),m=p.ZP.h2(i||(i=(0,f.Z)(["\n  margin-right: 10px;\n  text-align: center;\n"]))),x=r(184);h.Z.defaults.baseURL="https://api.themoviedb.org/3";var b=function(){var e=(0,d.UO)().movieId,n=(0,l.useState)([]),r=(0,o.Z)(n,2),t=r[0],a=r[1],i=(0,l.useState)(!1),c=(0,o.Z)(i,2),f=c[0],p=c[1],b=(0,l.useState)(null),w=(0,o.Z)(b,2),Z=w[0],k=w[1];return(0,l.useEffect)((function(){p(!0);var n=function(){var n=(0,s.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.Z.get("/movie/".concat(e,"/reviews?api_key=").concat("7e90108684ed83affdbe867f15ef1121"));case 3:r=n.sent,a(r.data.results),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),k(!0),console.error("Error fetching cast:",n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,7,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),console.log(t),(0,x.jsxs)(v,{children:[Z&&(0,x.jsxs)("p",{children:["Whoops, something went wrong: ",Z.message]}),f?(0,x.jsx)("h2",{children:"Loading..."}):t.length>0?t.map((function(e){var n=e.id,r=e.author,t=e.author_details.rating,a=e.content;return(0,x.jsxs)(g,{children:[(0,x.jsx)(m,{children:r}),(0,x.jsx)("p",{children:a}),t&&(0,x.jsxs)("h3",{children:["rating: ",t]})]},n)})):(0,x.jsx)("b",{children:"We don't have any rewiews for this movie."})]})}}}]);
//# sourceMappingURL=780.e8ae97c9.chunk.js.map