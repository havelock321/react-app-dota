(this["webpackJsonpmonsters-roladex"]=this["webpackJsonpmonsters-roladex"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(2),c=t.n(r),l=(t(13),t(3)),s=t(4),i=t(6),h=t(5),u=t(7),d=(t(14),t(15),t(16),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("div",{className:"card-image"},o.a.createElement("img",{alt:e.hero.localized_name,src:"https://api.opendota.com/apps/dota2/images/heroes/".concat(e.hero.localized_name.toLowerCase().replace("-","").replace(" ","_"),"_full.png")})),o.a.createElement("div",{className:"card-info"},o.a.createElement("h2",null,e.hero.localized_name)))}),m=function(e){return o.a.createElement("div",{className:"card-list"},e.heroes.map((function(e){return o.a.createElement(d,{key:e.id,hero:e})})))},p=(t(17),function(e){var a=e.placeholder,t=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:a,onChange:t})}),f=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(i.a)(this,Object(h.a)(a).call(this))).handleChange=function(a){e.setState({searchField:a.target.value})},e.state={heroes:[],searchField:""},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.opendota.com/api/heroes").then((function(e){return e.json()})).then((function(a){return e.setState({heroes:a.slice(0,9)})}))}},{key:"render",value:function(){var e=this.state,a=e.heroes,t=e.searchField,n=a.filter((function(e){return e.localized_name.toLowerCase().includes(t.toLocaleLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Dota 2 Heroes"),o.a.createElement(p,{placeholder:"search dota 2 heroes",handleChange:this.handleChange}),o.a.createElement(m,{heroes:n}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.44da4550.chunk.js.map