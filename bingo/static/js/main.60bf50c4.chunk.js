(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),h=(c(9),c(3)),i=(c(10),function(){return function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[c],e[c]=n}return e}(new Array([{sentence:"Who's missing?",match:!1},{sentence:"Can you all hear me?",match:!1},{sentence:"What am I doing wrong?",match:!1},{sentence:"Can you see me now?",match:!1},{sentence:"~Three ehm's in one sentence~",match:!1},{sentence:"~Spilled drink~",match:!1},{sentence:"~Talks while muted~",match:!1},{sentence:"Sorry for the mess",match:!1},{sentence:"What's with the penguin?",match:!1},{sentence:"I couldn't get my camera to work",match:!1},{sentence:"Can you see my screen?",match:!1},{sentence:"Can you hear me",match:!1},{sentence:"~Construction at neighbours place",match:!1},{sentence:"~Doorbell rings~",match:!1},{sentence:"~Spilled drink~",match:!1},{sentence:"~Talks while muted~",match:!1},{sentence:"~Construction at neighbours place~",match:!1},{sentence:"~Doorbell rings~",match:!1},{sentence:"~Spilled drink~",match:!1},{sentence:"~Talks while muted~",match:!1},{sentence:"Sorry for the mess",match:!1},{sentence:"What's with the penguin?",match:!1},{sentence:"~awkward silence~",match:!1},{sentence:"~waiting in the zoom-lobby~",match:!1},{sentence:"~forgot to turn off screen sharing~",match:!1},{sentence:"~there's a cat~",match:!1},{sentence:"We should hire this dude Kevin",match:!1},{sentence:"example 30",match:!1},{sentence:"example 31",match:!1},{sentence:"example 32",match:!1},{sentence:"example 33",match:!1},{sentence:"example 34",match:!1},{sentence:"example 35",match:!1}])[0]).slice(0,25)}),m=(c(11),c.p+"static/media/cross.24dd975f.svg"),o=c.p+"static/media/cat.405da2c6.svg",l=c(0),d=function(e){var t=e.sentence,c=e.matchHandler,n=e.match,a=e.identifier,s="card";return s+=n?" match":" noMatch",12===a?Object(l.jsx)("div",{className:"square",children:Object(l.jsx)("div",{id:a,className:"joker match",children:Object(l.jsx)("img",{className:"cross",src:m,alt:"cross"})})}):Object(l.jsx)("div",{className:"square",children:Object(l.jsxs)("div",{onClick:c,id:a,className:s,children:[n&&Object(l.jsx)("img",{className:"cross",src:"~there's a cat~"===t?o:m,alt:"cross"}),Object(l.jsx)("div",{className:"card--text",children:t})]})})},u=(c(13),function(e){var t=e.userArray,c=e.setUserArray,n=function(e){e.preventDefault(),c(t.map((function(t,c){return 12===c&&(t.match=!0),c===+e.target.id&&(t.match=!t.match),t})))};return Object(l.jsx)("div",{className:"game",children:t.map((function(e,t){return Object(l.jsx)(d,{matchHandler:n,sentence:e.sentence,match:e.match,identifier:t},t)}))})});var j=function(){var e=Object(n.useState)(i()),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),r=Object(h.a)(s,2),m=r[0],o=r[1];return Object(n.useEffect)((function(){o(function(e){for(var t=0,c=0;c<5;c++)e[c].match&&e[c+5].match&&e[c+10].match&&e[c+15].match&&e[c+20].match&&t++;for(var n=0;n<=20;n+=5)e[n].match&&e[n+1].match&&e[n+2].match&&e[n+3].match&&e[n+4].match&&t++;return e[0].match&&e[6].match&&e[18].match&&e[24].match&&t++,e[4].match&&e[8].match&&e[16].match&&e[20].match&&t++,t}(c))}),[c]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{id:"header",children:Object(l.jsx)("h1",{children:"Bingo."})}),Object(l.jsx)("main",{children:Object(l.jsx)(u,{userArray:c,setUserArray:a})}),Object(l.jsxs)("div",{id:"footer",children:[Object(l.jsx)("button",{id:"resetButton",onClick:function(){var e=i();a(e)},children:"Reset"}),Object(l.jsxs)("div",{id:"winCounter",children:["Wins : ",m]})]})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.60bf50c4.chunk.js.map