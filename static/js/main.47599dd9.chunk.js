(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(t,e,a){t.exports={list:"FeedbackOptions_list__2JZoa",listButton:"FeedbackOptions_listButton__13kyO"}},,function(t,e,a){t.exports={statisticsList:"Statistics_statisticsList__YcOtO",itemList:"Statistics_itemList__3Sg81"}},,,function(t,e,a){t.exports={title:"Section_title__33Rd9"}},function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){t.exports={container:"App_container__3azBb"}},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(10),s=a.n(i),r=a(1),o=a(2),l=a(3),u=a(5),p=a(4),m=a(6),b=a.n(m),d=function(t){var e=t.options,a=t.onLeaveFeedback,n=Object.keys(e);return c.a.createElement("ul",{className:b.a.list},n.map((function(t){return c.a.createElement("li",{key:t},c.a.createElement("button",{className:b.a.listButton,type:"button",onClick:a,name:t},t))})))},f=a(7),k=function(t){var e=t.message;return c.a.createElement("p",null,e)},v=a(8),h=a.n(v),O=function(t){Object(u.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).options=Object.keys(t.props.statistics),t.countTotalFeedback=function(){return t.options.reduce((function(e,a){return t.props.statistics[a]+e}),0)},t.countPositiveFeedbackPercentage=function(){return"".concat(Math.round(t.props.statistics.good/t.countTotalFeedback()*100),"%")},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props.statistics,e=Object(f.a)(Object(f.a)({},t),{},{total:this.countTotalFeedback(),"Positive feedback":this.countPositiveFeedbackPercentage()}),a=Object.keys(e);return c.a.createElement(c.a.Fragment,null,0!==e.total?c.a.createElement("ul",{className:h.a.statisticsList},a.map((function(t){return c.a.createElement("li",{className:h.a.itemList,key:t},t,": ",e[t])}))):c.a.createElement(k,{message:"No feedback given"}))}}]),a}(n.Component),E=a(11),_=a.n(E),g=function(t){var e=t.title,a=t.children;return c.a.createElement("section",null,c.a.createElement("h2",{className:_.a.title},e),a)},j=(a(17),function(t){Object(u.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.leaveFeedback=function(e){var a=e.currentTarget.name;t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,{title:"Please leave feedback"},c.a.createElement(d,{options:this.state,onLeaveFeedback:this.leaveFeedback})),c.a.createElement(g,{title:"Statistics"},c.a.createElement(O,{statistics:this.state})))}}]),a}(n.Component));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.47599dd9.chunk.js.map