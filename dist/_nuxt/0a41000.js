(window.webpackJsonp=window.webpackJsonp||[]).push([[43,26],{416:function(t,e,n){"use strict";n.r(e);var r={name:"hader",data:function(){return{see:!0}},mounted:function(){this.see=!!this.$cookiz.get("usuario").vendedor}},o=n(54),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("b-container",[e("b-nav",[e("b-nav-item",[t.see?e("Nuxt-link",{attrs:{to:"#"}},[t._v("Feed")]):t._e()],1),t._v(" "),e("b-nav-item",[t.see?e("Nuxt-link",{attrs:{to:"/perfil/instrumental"}},[t._v("Instrumentales")]):t._e()],1),t._v(" "),e("b-nav-item",[e("Nuxt-link",{attrs:{to:"/perfil/configuracion"}},[t._v("Configuracion")])],1),t._v(" "),e("b-nav-item",[e("Nuxt-link",{attrs:{to:"/perfil/compras"}},[t._v("Compras")])],1),t._v(" "),e("b-nav-item",[e("Nuxt-link",{attrs:{to:"/perfil/me_gusta"}},[t._v("Instrumentales que me Gustan")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},587:function(t,e,n){"use strict";n.r(e);var r={name:"perfil",middleware:"login",components:{Header:n(416).default},mounted:function(){console.log(this.$cookiz.getAll())}},o=n(54),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",[t("Header"),this._v(" "),t("b-container")],1)}),[],!1,null,null,null);e.default=component.exports}}]);