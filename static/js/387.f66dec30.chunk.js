"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r,a,s=n(5861),c=n(9439),i=n(7757),o=n.n(i),l=n(340),p=n(2791),u=n(7689),h=n(168),d=n(2978),f=d.ZP.ul(r||(r=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n  justify-content: space-evenly;\n  align-items: baseline;\n"]))),m=d.ZP.li(a||(a=(0,h.Z)(["\n  list-style: none;\n  justify-content: center;\n"]))),v=n(184);l.Z.defaults.baseURL="https://api.themoviedb.org/3";var g=function(){var e=(0,u.UO)().movieId,t=(0,p.useState)([]),n=(0,c.Z)(t,2),r=n[0],a=n[1],i=(0,p.useState)(!1),h=(0,c.Z)(i,2),d=h[0],g=h[1],x=(0,p.useState)(null),j=(0,c.Z)(x,2),w=j[0],y=j[1];return(0,p.useEffect)((function(){g(!0);var t=function(){var t=(0,s.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.get("/movie/".concat(e,"/credits?api_key=").concat("7e90108684ed83affdbe867f15ef1121"));case 3:n=t.sent,a(n.data.cast),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),y(!0),console.error("Error fetching cast:",t.t0);case 11:return t.prev=11,g(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,v.jsxs)("div",{children:[w&&(0,v.jsxs)("p",{children:["Whoops, something went wrong: ",w.message]}),d?(0,v.jsx)("h2",{children:"Loading..."}):(0,v.jsx)(f,{children:r.length>0?r.map((function(e){var t=e.name,n=e.id,r=e.character,a=e.profile_path;return(0,v.jsx)(m,{children:(0,v.jsxs)("div",{children:[a?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),width:"200px",alt:"actor"}):(0,v.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg",width:"200px",height:"300px",alt:""}),(0,v.jsx)("p",{children:t}),(0,v.jsxs)("p",{children:["Character: ",r]})]})},n)})):(0,v.jsx)("b",{children:"We don't have any casts for this movie."})})]})}}}]);
//# sourceMappingURL=387.f66dec30.chunk.js.map