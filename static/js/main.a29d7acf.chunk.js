(this["webpackJsonpswapi-game"]=this["webpackJsonpswapi-game"]||[]).push([[0],{48:function(e){e.exports=JSON.parse('{"CHARACTERS":"Characters","STARSHIPS":"Starships","CHOOSE_GAME_MODE":"Choose game mode","CHARACTERS_ARENA":"Characters arena","STARSHIPS_ARENA":"Starships arena","PLAY_AGAIN":"Play Again"}')},49:function(e){e.exports=JSON.parse('{"CHARACTERS":"Postacie","STARSHIPS":"Statki kosmiczne","CHOOSE_GAME_MODE":"Wybierz tryb gry","CHARACTERS_ARENA":"Arena postaci","STARSHIPS_ARENA":"Arena statk\xf3w kosmicznych","PLAY_AGAIN":"Zagraj Ponownie"}')},60:function(e,t,a){e.exports=a(79)},65:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(65),a(26)),s=a(51),i=a(14),m=a(47),u={en:{Common:a(48)},pl:{Common:a(49)}};s.a.use(i.a).use(m.a).init({whitelist:["en","pl"],ns:["Common"],defaultNS:"Common",resources:u,fallbackLng:"en",interpolation:{escapeValue:!1}});var E,b=a(25),f=a(107),p=a(99),A=a(100),h=a(80),O=a(7),S=a(109),v=a(110),w=a(98),d=a(108),R=function(){var e=Object(i.b)().i18n,t=Object(n.useState)(e.language),a=Object(O.a)(t,2),c=a[0],l=a[1];return r.a.createElement(S.a,{component:"fieldset"},r.a.createElement(v.a,{"aria-label":"position",name:"position",value:c,onChange:function(t){l(t.target.value),e.changeLanguage(t.target.value)},row:!0},r.a.createElement(w.a,{value:"en",control:r.a.createElement(d.a,null),label:"English",labelPlacement:"start"}),r.a.createElement(w.a,{value:"pl",control:r.a.createElement(d.a,null),label:"Polish",labelPlacement:"start"})))},g=function(){return r.a.createElement(p.a,{position:"static"},r.a.createElement(A.a,{variant:"dense"},r.a.createElement(f.a,{flexGrow:1},r.a.createElement(o.b,{to:"/"},r.a.createElement(h.a,{variant:"h6",color:"inherit"},"SWAPI Game"))),r.a.createElement(R,null)))},j=function(e){var t=e.children;return r.a.createElement(f.a,{height:"100vh"},r.a.createElement(g,null),t)},N=a(103),y=[{iconSrc:"/vader.svg",title:"CHARACTERS",iconAlt:"vader",redirect:"characters"},{iconSrc:"/falcon.svg",title:"STARSHIPS",iconAlt:"falcon",redirect:"starships"}],C=a(101),x=a(102),T=function(e){var t=e.resource,a=Object(i.b)().t;return r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement(N.a,{container:!0,alignItems:"center"},r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement("img",{width:"80%",src:t.iconSrc,alt:t.iconAlt})),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement(h.a,{variant:"h3"},a(t.title))))))},I=function(){var e=Object(i.b)().t;return r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{xs:12,item:!0},r.a.createElement(f.a,{pb:6,pt:6},r.a.createElement(h.a,{align:"center",variant:"h2"},e("CHOOSE_GAME_MODE")))),r.a.createElement(N.a,{xs:12,item:!0,container:!0,spacing:2,justify:"center"},y.map((function(e){return r.a.createElement(N.a,{key:e.iconAlt,item:!0,xs:4},r.a.createElement(o.b,{to:e.redirect},r.a.createElement(T,{resource:e})))}))))},H=a(104),P=a(52),_={draw:"#b3b300",looser:"#990000",winner:"#006400"},W=Object(P.a)(N.a)({width:"100%"}),k=Object(P.a)(h.a)((function(e){var t=e.status;return{textTransform:"uppercase",color:_[t]}})),L=Object(P.a)("img")({transform:"rotate(45deg)"}),M=function(e){var t=e.playerStatus;return r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement(N.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(k,{variant:"h5",status:t.status,"data-test":"status"},t.status)),r.a.createElement(W,{item:!0,xs:6},t.crew?r.a.createElement(L,{width:"100%",src:"falcon.svg",alt:"falcon"}):r.a.createElement("img",{width:"100%",src:"vader.svg",alt:"vader"})),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement(h.a,{"data-test":"details-name"},null===t||void 0===t?void 0:t.name)),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement(h.a,{"data-test":"details-".concat(t.crew?"crew":"mass")},t.crew?"Crew: ".concat(t.crew):"Mass: ".concat(t.mass))))))};!function(e){e.WINNER="winner",e.LOOSER="looser",e.DRAW="draw"}(E||(E={}));var D,G=function(e){return Math.floor(Math.random()*e)},z=function(e){var t=e.contestants,a=Object(i.b)().t,c=Object(n.useState)({playerOne:{name:null,status:null,mass:null,crew:null,score:0},playerTwo:{name:null,status:null,mass:null,crew:null,score:0}}),l=Object(O.a)(c,2),o=l[0],s=l[1],m=function(e,t){return e.crew?function(e,t){return Number(e.crew)===Number(t.crew)?[E.DRAW,E.DRAW]:Number(e.crew)>Number(t.crew)?[E.WINNER,E.LOOSER]:[E.LOOSER,E.WINNER]}(e,t):e.mass?function(e,t){return Number(e.mass)===Number(t.mass)?[E.DRAW,E.DRAW]:Number(e.mass)>Number(t.mass)?[E.WINNER,E.LOOSER]:[E.LOOSER,E.WINNER]}(e,t):void 0},u=function(){var e=function(){var e=G(t.length),a=G(t.length);return[t[e],t[a]]}(),a=Object(O.a)(e,2);!function(e,t){var a=m(e,t),n=Object(O.a)(a,2),r=n[0],c=n[1];s({playerOne:{name:e.name,status:r,mass:Number(e.mass),crew:Number(e.crew),score:r!==E.LOOSER?o.playerOne.score+1:o.playerOne.score},playerTwo:{name:t.name,status:c,mass:Number(t.mass),crew:Number(t.crew),score:c!==E.LOOSER?o.playerTwo.score+1:o.playerTwo.score}})}(a[0],a[1])};return Object(n.useEffect)((function(){u()}),[t]),r.a.createElement(N.a,{xs:12,item:!0,container:!0,spacing:2,justify:"center"},r.a.createElement(N.a,{container:!0,item:!0,xs:12,justify:"center"},r.a.createElement(h.a,{variant:"h3","data-test":"score"},o.playerOne.score," : ",o.playerTwo.score)),r.a.createElement(N.a,{item:!0,xs:4},r.a.createElement(M,{playerStatus:o.playerOne})),r.a.createElement(N.a,{item:!0,xs:4},r.a.createElement(M,{playerStatus:o.playerTwo})),r.a.createElement(N.a,{container:!0,item:!0,xs:12,justify:"center"},r.a.createElement(H.a,{variant:"contained",color:"primary",onClick:u,"data-test":"play-again"},a("PLAY_AGAIN"))))},J=a(11),Y=function(e){var t=Object(n.useState)([]),a=Object(O.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!0),o=Object(O.a)(l,2),s=o[0],i=o[1],m=new AbortController;return Object(n.useEffect)((function(){return function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return fetch(t,{signal:a.signal}).then((function(e){return e.json()})).then((function(t){return(null===t||void 0===t?void 0:t.next)?e(t.next,a,[].concat(Object(J.a)(n),Object(J.a)(null===t||void 0===t?void 0:t.results))):[].concat(Object(J.a)(n),Object(J.a)(null===t||void 0===t?void 0:t.results))}))}(e,m).then((function(e){return c(e)})).finally((function(){i(!1)})),function(){return m.abort()}}),[e]),[r,s]};!function(e){e.CHARACTERS="https://swapi.co/api/people/",e.STARSHIPS="https://swapi.co/api/starships/"}(D||(D={}));var B=a(105),V=function(){return r.a.createElement(f.a,{display:"flex",height:"calc(100vh - 48px)",alignItems:"center",justifyContent:"center"},r.a.createElement(B.a,{size:70}))},Z=function(){var e=Y(D.CHARACTERS),t=Object(O.a)(e,2),a=t[0],c=t[1],l=Object(i.b)().t,o=Object(n.useMemo)((function(){return a.filter((function(e){return"unknown"!==e.mass}))}),[a]);return c?r.a.createElement(V,null):r.a.createElement(N.a,{container:!0,direction:"column"},r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(f.a,{pt:6,pb:6},r.a.createElement(h.a,{align:"center",variant:"h2"},l("CHARACTERS_ARENA")))),r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(z,{contestants:o})))},$=function(){var e=Y(D.STARSHIPS),t=Object(O.a)(e,2),a=t[0],c=t[1],l=Object(i.b)().t,o=Object(n.useMemo)((function(){return a.filter((function(e){return"unknown"!==e.crew}))}),[a]);return c?r.a.createElement(V,null):r.a.createElement(N.a,{container:!0,direction:"column"},r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(f.a,{pt:6,pb:6},r.a.createElement(h.a,{align:"center",variant:"h2"},l("STARSHIPS_ARENA")))),r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(z,{contestants:o})))},q=function(){return r.a.createElement(j,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/characters"},r.a.createElement(Z,null)),r.a.createElement(b.b,{path:"/starships"},r.a.createElement($,null)),r.a.createElement(b.b,{path:"/",exact:!0},r.a.createElement(I,null)),r.a.createElement(b.b,{path:"*"},r.a.createElement(b.a,{to:"/"}))))},F=function(){return r.a.createElement(o.a,null,r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.a29d7acf.chunk.js.map