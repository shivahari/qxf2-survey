(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},131:function(e,t){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(80),o=a.n(r),c=(a(99),a(19)),m=a(2),u=(a(100),function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},"Survey")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/dashboard"},"Dashboard")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/admin"},"Admin"))))}),s=function(){return l.a.createElement("div",{style:{backgroundColor:"white",position:"absolute",top:0,bottom:0,left:0,right:0}},l.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",height:"150px",width:"500px",margin:"-75px 0 0 -250px",padding:"20px",fontFamily:"Arial",fontSize:"75px",textAlign:"center",textTransform:"uppercase",textShadow:"0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed",color:"red"}},l.a.createElement("p",{style:{color:"#fff",textShadow:"0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff"}},"error"),l.a.createElement("p",{id:"code"},"404")))},i=a(33),d=a(8),p=a(89),E=a(51),f=(a(105),a(88)),h=(a(106),a(32)),v=a(3),b=a.n(v),y="http://3.239.35.79";b.a.defaults.headers.common.User="qxf2";var g=[];b.a.get("".concat(y,"/survey/admin/employees")).then((function(e){for(var t in e.data)"y"===e.data[t].status.toLowerCase()&&g.push({label:e.data[t].fullName,value:e.data[t].email})})).catch((function(e){console.log(e.response)}));var x=g;var N=function(e){var t=e.setState,a=Object(p.a)(e,["setState"]),r=l.a.useState([]),o=Object(d.a)(r,2),c=o[0],m=o[1],u=l.a.useState([]),s=Object(d.a)(u,2),i=s[0],v=s[1],b=l.a.useState([]),y=Object(d.a)(b,2),g=y[0],N=y[1];return Object(n.useEffect)((function(){t("selectedHelp",c)}),[c,t]),Object(n.useEffect)((function(){t("tags",i)}),[i,t]),Object(n.useEffect)((function(){t("selectedHelped",g)}),[g,t]),l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("h3",null,"Enter Email ID"),l.a.createElement("input",{name:"email",type:"email",onChange:a.handleChange,className:"form-control"})),l.a.createElement("div",{className:"new-tech"},l.a.createElement("h3",null,"What new technologies did you learn this week?"),l.a.createElement(f.a,{tags:i,onChange:function(e){return v(e)}}),l.a.createElement("br",null)),l.a.createElement("div",{className:"who-helped"},l.a.createElement("h3",null,"Who helped you this week?"),l.a.createElement(E.a,{options:x,value:c,onChange:m,labelledBy:"Select"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"whom-did-you-help"},l.a.createElement("h3",null,"Whom did you help this week?"),l.a.createElement(E.a,{options:x,value:g,onChange:N,labelledBy:"Select"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-md-4 offset-md-4"},l.a.createElement(h.a,{variant:"primary",size:"lg",block:!0,button:"true",disabled:a.step.isLast(),onClick:a.next},"Submit")))};b.a.defaults.headers.common.User="qxf2";var S=function(e){var t=e.state.email,a=e.state.tags.toString(),r=JSON.parse(JSON.stringify(e.state.selectedHelp)),o=JSON.parse(JSON.stringify(e.state.selectedHelped)),c=Object(n.useState)([]),m=Object(d.a)(c,2),u=m[0],s=m[1],i=Object(n.useState)(!0),p=Object(d.a)(i,2),E=p[0],f=p[1];return Object(n.useEffect)((function(){b.a.get("".concat(y,"/survey/admin/employees")).then((function(e){s(e.data),f(!1)}))}),[]),function(){if(!1===E){if(!0===function(){var e=!1,a=0;for(a=0;a<=u.length-1;a++)if(u[a].email===t){e=!0;break}return e}()){var e={userMail:t,listHelp:r,listHelped:o,listTags:a};return""!==e?b.a.post("".concat(y,"/survey/response"),{data:e}).then((function(e){console.log("Post request: Success")})).catch((function(e){console.log("Post request: Failed"),console.log(e.response)})):alert("Could not pass empty data"),l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",{className:"display-3"},"Thank You!"),l.a.createElement("p",{className:"lead"},l.a.createElement("strong",null,"Here is what we recorded!")),l.a.createElement("p",null,l.a.createElement("b",null,"E-mail:")," ",t),l.a.createElement("p",null,l.a.createElement("b",null,"Who helped you?:")," ",r.map((function(e){return e.label})).join(", ")),l.a.createElement("p",null,l.a.createElement("b",null,"Whom did you help?:")," ",o.map((function(e){return e.label})).join(", ")," "),l.a.createElement("p",null,l.a.createElement("b",null,"Tags:")," ",a," "))}return l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("p",{className:"lead"},l.a.createElement("strong",null,"Please enter valid email")))}return l.a.createElement("span",null,"Loading.....")}()};var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.b,null,l.a.createElement(i.a,{component:N}),l.a.createElement(i.a,{component:S})))},j=a(15),O=a.n(j),w=a(48),C=a(31),D=a(49);b.a.defaults.headers.common.User="qxf2";var A=function(){var e=l.a.useState([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=l.a.useState([]),c=Object(d.a)(o,2),m=c[0],u=c[1];Object(n.useEffect)((function(){b.a.get("".concat(y,"/survey/admin/employees")).then((function(e){u(e.data)}))}),[]);var s=function(e){r(Object(D.a)(Object(D.a)({},a),{},Object(C.a)({},e.target.name,e.target.value.trim())))},i={firstName:a["employee-first-name-input"],lastName:a["employee-last-name-input"],email:a["email-input"],fullName:a["employee-first-name-input"]+" "+a["employee-last-name-input"],status:a["status-input"]};return l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},l.a.createElement("strong",null,"Add Employee"))),l.a.createElement("div",{className:"panel-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"employee-first-name-input"},"First Name"),l.a.createElement("input",{className:"form-control",name:"employee-first-name-input",type:"text",onChange:s})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"employee-last-name-input"},"Last Name"),l.a.createElement("input",{className:"form-control",name:"employee-last-name-input",type:"text",onChange:s})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email-input"},"E-Mail"),l.a.createElement("input",{className:"form-control",name:"email-input",type:"text",onChange:s})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"status-input"},"Employee Status (Y/N)"),l.a.createElement("input",{className:"form-control",name:"status-input",type:"text",onChange:s})),l.a.createElement("div",{className:"col-md-4 offset-md-4"},l.a.createElement(h.a,{variant:"primary",size:"lg",block:!0,onClick:function(e){if(e.preventDefault(),""!==a){var t=!1,n=0;for(n=0;n<=m.length-1;n++)if(m[n].email===i.email){t=!0;break}!1===t?b.a.post("".concat(y,"/survey/admin/new_employee"),{data:i}).then((function(e){console.log("Post request: Success")})).catch((function(e){console.log("Post request: Failed"),console.log(e.response)})):alert("Email already exists")}}},"Submit")))))},B=function(){var e="".concat(y,"/survey/admin/employees"),t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],o=a[1],c=function(){var t=Object(w.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(e);case 2:a=t.sent,o(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){c()}),[]);return l.a.createElement("div",null,l.a.createElement("h1",{id:"title"},"Employee Table"),l.a.createElement("table",{id:"employees"},l.a.createElement("tbody",null,l.a.createElement("tr",null,["ID","first_name","last_name","active_flag","email","operation"].map((function(e,t){return l.a.createElement("th",{key:t},e.toUpperCase())}))),r&&r.map((function(t){var a=t.ID,n=t.firstName,c=t.lastName,m=t.status,u=t.email;return l.a.createElement("tr",{key:a},l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,c),l.a.createElement("td",null,m),l.a.createElement("td",null,u),l.a.createElement("td",{className:"operation"},l.a.createElement("button",{className:"button",onClick:function(){return t=a,void b.a.delete("".concat(e,"/").concat(t)).then((function(e){var a=r.filter((function(e){return t!==e.ID}));o(a)}));var t}},"Delete")))})))),l.a.createElement("br",null))},F=function(){var e="".concat(y,"/survey/admin/not_responded_users"),t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],o=a[1],c=function(){var t=Object(w.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(e);case 2:a=t.sent,o(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){c()}),[]);return l.a.createElement("div",null,l.a.createElement("h1",{id:"title"},"Employees yet to Respond"),l.a.createElement("table",{id:"employees"},l.a.createElement("tbody",null,l.a.createElement("tr",null,["ID","Name"].map((function(e,t){return l.a.createElement("th",{key:t},e.toUpperCase())}))),r&&r.map((function(e){var t=e.ID,a=e.firstName,n=e.lastName;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t),l.a.createElement("td",null,a," ",n))})))),l.a.createElement("br",null))},W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(B,null),l.a.createElement(A,null),l.a.createElement(F,null))},H=a(87),L=(a(132),a(133),a(50)),P={labels:["Shivahari","Arunkumar","Rahul","Raji","Avinash","Smitha","Rohit"],datasets:[{label:"Symmetry Score",backgroundColor:"LightBlue",borderColor:"black",borderWidth:1,hoverBackgroundColor:"blue",hoverBorderColor:"black",data:[234,212,110,107,67,55,16]}]},R={labels:["Rohan Joshi","Mohan Kumar","Kiran CV","Akkul DN","Rajkumar","Smitha","Rohan Dudam"],datasets:[{label:"Symmetry Score",backgroundColor:"LightBlue",borderColor:"black",borderWidth:1,hoverBackgroundColor:"blue",hoverBorderColor:"black",data:[91,100,72,91,67,66,54]}]},I=[{text:"Python",value:75},{text:"Git",value:55},{text:"AWS",value:64},{text:"API",value:33},{text:"DynamoDB",value:43},{text:"Elastic Beanstalk",value:26},{text:"Github Actions",value:87},{text:"AWS Lambda",value:50},{text:"Neo4j",value:23},{text:"MySQL",value:35},{text:"Py2Neo",value:23},{text:"SOAP",value:31},{text:"Flask",value:12},{text:"Django-REST",value:15},{text:"GraphQL",value:30},{text:"Selenium",value:18}],q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Survey Analysis Dashboard"),l.a.createElement("div",{style:{backgroundColor:"#efefef",height:"300px",width:"100%"}},l.a.createElement(H.a,{words:I})),l.a.createElement("div",null,l.a.createElement("h2",null,"Symmetry Score"),l.a.createElement(L.HorizontalBar,{data:P})),l.a.createElement("div",null,l.a.createElement("h2",null,"Overall Data"),l.a.createElement(L.HorizontalBar,{data:R})))};var J=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement("div",{id:"page-body"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",component:k,exact:!0}),l.a.createElement(m.a,{path:"/survey",component:k}),l.a.createElement(m.a,{path:"/admin",component:W}),l.a.createElement(m.a,{path:"/dashboard",component:q}),l.a.createElement(m.a,{component:s})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(228)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.24875117.chunk.js.map