(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(43)},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a);n(40);r.a.defineSimpleMode("tm-custom",{start:[{regex:/^(q[0-9]+])\s*([rl])/,token:["tag   ","atom  "]},{regex:/\(\s*(?:.\s*\/\s*.\s*|.\s*),\s*(q-?[0-9]+)\s*\)/,token:["attribute  "]},{regex:/#.*/,token:"comment"}],meta:{lineComment:"#"}})},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),c=n.n(o),l=(n(30),n(11)),i=n(12),s=n(15),u=n(13),m=n(16),p=n(44),d=n(45),h={height:"90px",background:"#90a4be",color:"#111",font:"10px"},f={font:"14px monospace",letterSpacing:"1px",height:"28px",border:"none"},E={font:"12px monospace"},g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0,style:h,className:"d-flex align-items-center"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h6",null,"Turing Machine Simulator"),r.a.createElement(d.a,{type:"text",name:"tmDisplay",spellCheck:"false",className:"w-100 mt-0",style:f,defaultValue:"#10101001#11#"}),r.a.createElement("span",{className:"container",style:E},"Output: 11101")))}}]),t}(a.Component),q=n(17),v=n.n(q),b=n(22),y=n(46),w=n(7),x=n(8),k=n(23);n(37),n(38),n(39),n(41);var N=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={code:"# Multiply TM program\n# Outputs the multiplication of two inputs on alphabet {1}*\n\n# For each multiplicand, copy input to end of tape\nq0]r (#, q1)\nq1]r (1/M, q2) (#, q8)    # Mark current multiplicand, and copy input\nq2]l (#, q3)\n\n# Copy first input at end of tape\nq3]l (1/X, q4) (#, q0)    # Mark current char being copied\nq4]r (#, q5)        \nq5]r (#, q6)\nq6]r (#/1, q7)\nq7]l (X/1, q3)            # Remove mark and recover\n\n# All multiplicands processed, finish \nq8]l (M/1, q8) (#, q9)\nq9]r (#, q-1)"},n.updateCode=function(){var e=Object(b.a)(v.a.mark(function e(t,a,r){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({code:r});case 1:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid EditorPanel"},r.a.createElement("span",null,"Editor"),r.a.createElement("div",{className:"float-right"},r.a.createElement(y.a,{color:"light",className:"EditorButton"},r.a.createElement(w.a,{icon:x.e})),"  ",r.a.createElement(y.a,{color:"light",className:"EditorButton"},r.a.createElement(w.a,{icon:x.a})),"  ",r.a.createElement(y.a,{color:"light",className:"EditorButton"},r.a.createElement(w.a,{icon:x.b})),"  ",r.a.createElement(y.a,{color:"light",className:"EditorButton",style:{paddingLeft:"8px"}},r.a.createElement(w.a,{icon:x.d,style:{height:"15px"}})),"  ",r.a.createElement(y.a,{color:"light",className:"EditorButton"},r.a.createElement(w.a,{icon:x.c})))),r.a.createElement("div",{style:{height:"calc(100% - 55px"}},r.a.createElement(k.Controlled,{value:this.state.code,onBeforeChange:this.updateCode,options:{mode:"tm-custom",theme:"xq-light",lineNumbers:!0}})))}}]),t}(a.Component);n(42);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.bd4431f0.chunk.js.map