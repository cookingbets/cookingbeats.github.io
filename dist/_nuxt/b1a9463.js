(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{522:function(e,n,t){"use strict";t.r(n);var o,r=t(34),l=(t(103),t(102)),c=t.n(l),d={name:"validar",data:function(){return{dni1:null,dni2:null,perfil:null,enProcesso:!1,aprobado:!1}},methods:{evaluar:function(){var e=this;console.log(this.$axios.defaults.baseURL),c.a.get("".concat(this.$axios.defaults.baseURL,"verificar"),{headers:{"Content-Type":"multipart/form-data","access-token":this.$cookiz.get("usuario").token}}).then((function(n){200==n.status?n.data.validado?e.aprobado=!0:e.enProcesso=!0:e.$bvModal.show("validarmodal")})).catch((function(e){console.log(e)}))},send:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,o,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadFile("dni1","".concat(e.$axios.defaults.baseURL,"upload/dni1"),e.dni1);case 2:return t=n.sent,n.next=5,e.loadFile("dni2","".concat(e.$axios.defaults.baseURL,"upload/dni2"),e.dni2);case 5:return o=n.sent,n.next=8,e.loadFile("perfil","".concat(e.$axios.defaults.baseURL,"upload/perfil"),e.perfil);case 8:return r=n.sent,n.prev=9,data={dni1:t.id,dni2:o.id,perfil:r.id},n.next=13,c.a.post("".concat(e.$axios.defaults.baseURL,"verificar"),data,{headers:{"access-token":e.$cookiz.get("usuario").token}});case 13:200==n.sent.status&&e.$bvModal.hide("validarmodal"),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(9),console.log(n.t0);case 20:case"end":return n.stop()}}),n,null,[[9,17]])})))()},loadFile:(o=Object(r.a)(regeneratorRuntime.mark((function e(n,t,o){var r,form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("cargando el instrumental"),r=null,(form=new FormData).append(n,o),e.prev=4,e.next=7,c.a.post(t,form,{headers:{"Content-Type":"multipart/form-data","access-token":this.$cookiz.get("usuario").token}});case 7:r=(r=e.sent).data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:return console.log("cargando el instrumental!!"),e.abrupt("return",r);case 16:case"end":return e.stop()}}),e,this,[[4,11]])}))),function(e,n,t){return o.apply(this,arguments)})}},f=d,v=t(54),component=Object(v.a)(f,(function(){var e=this,n=e._self._c;return n("div",[n("b-button",{on:{click:e.evaluar}},[e._v("\n    validar\n  ")]),e._v(" "),n("b-alert",{attrs:{variant:"info",dismissible:""},model:{value:e.aprobado,callback:function(n){e.aprobado=n},expression:"aprobado"}},[e._v("\n    Su validacion ya fue aprobada\n  ")]),e._v(" "),n("b-alert",{attrs:{variant:"info",dismissible:""},model:{value:e.enProcesso,callback:function(n){e.enProcesso=n},expression:"enProcesso"}},[e._v("\n    Su validacion esta en proceso\n  ")]),e._v(" "),n("b-modal",{attrs:{id:"validarmodal",title:"Validar","body-bg-variant":"dark","header-bg-variant":"dark","footer-bg-variant":"dark"},on:{ok:e.send}},[n("b-form-group",{attrs:{label:"Dni 1"}},[n("b-form-file",{attrs:{accept:".jpg, .png, .jpeg"},model:{value:e.dni1,callback:function(n){e.dni1=n},expression:"dni1"}})],1),e._v(" "),n("b-form-group",{attrs:{label:"Dni 2"}},[n("b-form-file",{attrs:{accept:".jpg, .png, .jpeg"},model:{value:e.dni2,callback:function(n){e.dni2=n},expression:"dni2"}})],1),e._v(" "),n("b-form-group",{attrs:{label:"Perfil"}},[n("b-form-file",{attrs:{accept:".jpg, .png, .jpeg"},model:{value:e.perfil,callback:function(n){e.perfil=n},expression:"perfil"}})],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);