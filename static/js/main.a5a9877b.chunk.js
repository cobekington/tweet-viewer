(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,n){t.exports=n(32)},28:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(10),c=n.n(i),s=n(4),a=n(12),u=n(3),l="REQUEST_TWEET_IDS",d="RECEIVE_TWEET_IDS";var h=function(){return function(t){return t({type:l}),fetch("".concat("/tweet-viewer","/data/ids.csv")).then(function(t){if(!t.ok)throw Error(t.statusText);return t.text()}).then(function(e){return t(function(t){return{type:d,text:t,receivedAt:Date.now()}}(e))})}};var w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tweets:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:var n=[],o=!0,r=!1,i=void 0;try{for(var c,s=e.text.split(/[\r\n]+/)[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var a=c.value;""!==a&&n.push(a)}}catch(u){r=!0,i=u}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return{tweets:n};default:return t}},f=(n(28),n(13)),p=n(14),v=n(17),m=n(15),E=n(18),y=(n(30),n(16)),S=function(t){function e(){var t;Object(f.a)(this,e),(t=Object(v.a)(this,Object(m.a)(e).call(this))).handleScroll=function(){t.ticking||(t.ticking=!0,requestAnimationFrame(function(){return t.update()}))};return t.state={postsToShow:12},t}return Object(E.a)(e,t),Object(p.a)(e,[{key:"update",value:function(){document.documentElement.offsetHeight-(window.scrollY+window.innerHeight)<150&&this.setState({postsToShow:this.state.postsToShow+12}),this.ticking=!1}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),this.props.fetchTweetIds()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.postsToShow=this.state.postsToShow}},{key:"render",value:function(){var t=this.props.tweetIds;return r.a.createElement("div",{id:"docnow__scv"},t.slice(0,this.state.postsToShow).map(function(t,e){return r.a.createElement(y.a,{key:"t".concat(e),id:t,options:{cards:"hidden"}})}))}}]),e}(o.Component),T=Object(s.b)(function(t){return{tweetIds:t.tweets}},function(t){return{fetchTweetIds:function(){t(h())}}})(S),b=Object(u.c)(w,Object(u.a)(a.a));c.a.render(r.a.createElement(s.a,{store:b},r.a.createElement(T,null)),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.a5a9877b.chunk.js.map