(this["webpackJsonpexpense-tracker-ts"]=this["webpackJsonpexpense-tracker-ts"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),u=(n(12),n(13),n(6)),i=n(5),l=(n(14),n(0)),o=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{value:0,type:""}]),s=Object(i.a)(a,2),o=s[0],j=s[1],b=Object(c.useRef)(0);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Expense Tracker Basic"}),Object(l.jsxs)("div",{className:"expense",children:[Object(l.jsxs)("p",{children:["Balance : ",n]}),Object(l.jsx)("input",{type:"number",min:"0",ref:b}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"expense-operations",onClick:function(){+b.current.value>0?(r(n+ +b.current.value),j([].concat(Object(u.a)(o),[{value:+b.current.value,type:"Add"}]))):alert("Please enter a valid number other than zero"),b.current.value=""},children:"Add"}),Object(l.jsx)("button",{className:"expense-operations",onClick:function(){if(+b.current.value>0){var e=n-b.current.value;if(e<0)return void alert("Unable to make transaction Low fund!");r(e),j([].concat(Object(u.a)(o),[{value:+b.current.value,type:"Remove"}]))}else alert("Please enter a valid number other than zero");b.current.value=""},children:"Remove"})]}),Object(l.jsxs)("div",{className:"transactions",children:[Object(l.jsx)("p",{children:"Transactions :"}),Object(l.jsx)("ul",{children:o.map((function(e,t){return e.value?Object(l.jsxs)("li",{children:[(new Date).toISOString()," - ",e.value," - ",e.type]},t):null}))})]})]})};var j=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(o,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.5bacf98e.chunk.js.map