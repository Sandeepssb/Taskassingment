(this.webpackJsonpstub=this.webpackJsonpstub||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),i=a(5),l=a(6),s=a(1),m=a(2),u=a(4),d=a(3),_=function(e){return{type:"ITEM_SELECTED",payload:e}},v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={uniq:[]},e}return Object(m.a)(a,[{key:"renderList",value:function(){var e=this,t=this.props.itemsList.map((function(e){return e.Variant.map((function(e){return e.color}))})),a=Array.prototype.concat.apply([],t);return Array.from(new Set(a)).map((function(t){return n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"right floated content"},n.a.createElement("button",{className:"ui button primary",onClick:function(){return e.props.selectItem(t)}},"Select")),n.a.createElement("div",{className:"content filter"},n.a.createElement("span",{style:{backgroundColor:"".concat(t)}}),t))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"ui divided list"},this.renderList())}}]),a}(r.Component),p=Object(i.b)((function(e){return{itemsList:e.itemList}}),{selectItem:_})(v),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"image"},n.a.createElement("span",{style:{backgroundColor:this.props.colors}}))}}]),a}(n.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={cost:null,color:null},e.reset=function(){return e.props.selectItem(null)},e}return Object(m.a)(a,[{key:"renderList",value:function(){var e=this;return null==this.props.itemSelected?(console.log("true"),n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{colors:this.state.color||this.props.colors}),n.a.createElement("div",{className:"meta"},n.a.createElement("span",null,"Cost:",this.state.cost||this.props.cost)))):this.props.color.map((function(t){if(t.color==e.props.itemSelected)return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{colors:t.color||e.state.color}),n.a.createElement("div",{className:"meta"},n.a.createElement("span",null,"Cost:",t.cost||e.state.cost)))}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.color;t.colors;return n.a.createElement(n.a.Fragment,null,this.renderList(),n.a.createElement("div",{className:"description"},a.map((function(t){return n.a.createElement("span",{style:{backgroundColor:t.color},onClick:function(){e.setState({cost:t.cost,color:t.color}),e.reset()}})}))))}}]),a}(n.a.Component),I=Object(i.b)((function(e){return{itemSelected:e.selectedItem}}),{selectItem:_})(b),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.item;return n.a.createElement("div",{className:"ui link cards"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"header"},"Product Name: ",e.name),n.a.createElement("div",{className:"meta"},n.a.createElement("a",null,"By:",e.brand)),n.a.createElement(I,{color:e.Variant,cost:e.Variant[0].cost,colors:e.Variant[0].color})))}}]),a}(n.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={single:{}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){}},{key:"renderList",value:function(){return this.props.defaultItems.map((function(e){return n.a.createElement(y,{item:e})}))}},{key:"render",value:function(){return this.props.defaultItems?n.a.createElement("div",null,this.renderList()):n.a.createElement("div",null,"Loading")}}]),a}(n.a.Component),f=Object(i.b)((function(e){return{item:e.selectedItems,defaultItems:e.defaultItem}}),{defaultItem:function(e){return{type:"DEFAULT_ITEM",payload:e}}})(h),E=function(){return n.a.createElement("div",{className:"ui container grid"},n.a.createElement("div",{className:"ui row"},n.a.createElement("div",{className:"column eight wide"},n.a.createElement(p,null)),n.a.createElement("div",{className:"column eight wide"},n.a.createElement(f,null))))},O=a(11),N=function(){return[{id:"PRODUCT_ID_1",name:"Product1",brand:"Brand1",Variant:[{type:"default",variationId:"PRODUCT_ID_1_VAR_ID_0",cost:123,color:"red",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_1_VAR_ID_1",cost:106,color:"orange",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_1_VAR_ID_2",cost:96,color:"green",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_1_VAR_ID_3",cost:151,color:"pink",months:["November","December","January"]}]},{id:"PRODUCT_ID_2",name:"Product2",brand:"Brand2",Variant:[{type:"default",variationId:"PRODUCT_ID_2_VAR_ID_0",cost:156,color:"orange",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_2_VAR_ID_1",cost:145,color:"red",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_2_VAR_ID_3",cost:185,color:"pink",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_2_VAR_ID_3",cost:165,color:"green",months:["November","December","January"]}]}]},R=Object(l.b)({itemList:N,selectedItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"ITEM_SELECTED"===t.type?t.payload:e},defaultItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:"PRODUCT_ID_1",name:"Product1",brand:"Brand1",Variant:[{type:"default",variationId:"PRODUCT_ID_1_VAR_ID_0",cost:123,color:"red",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_1_VAR_ID_1",cost:106,color:"orange",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_1_VAR_ID_2",cost:96,color:"green",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_1_VAR_ID_3",cost:151,color:"pink",months:["November","December","January"]}]},{id:"PRODUCT_ID_2",name:"Product2",brand:"Brand2",Variant:[{type:"default",variationId:"PRODUCT_ID_2_VAR_ID_0",cost:156,color:"orange",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_2_VAR_ID_1",cost:145,color:"red",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_2_VAR_ID_3",cost:185,color:"pink",months:["November","December","January"]},{type:"variation",variationId:"PRODUCT_ID_2_VAR_ID_3",cost:165,color:"green",months:["November","December","January"]}]}],t=arguments.length>1?arguments[1]:void 0;return"DEFAULT_ITEM"===t.type?Object(O.a)(Object(O.a)({},e),{},{color:t.payload}):e}});c.a.render(n.a.createElement(i.a,{store:Object(l.c)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement(E,null)),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.30e07cf4.chunk.js.map