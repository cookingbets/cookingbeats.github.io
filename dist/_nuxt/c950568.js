(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{595:function(e,t,n){"use strict";n.r(t);var o=n(102),r=n.n(o),c={name:"compras",mounted:function(){var e=this;alert(this.$route.params.external_reference),console.log(this.$route),r.a.get("http://localhost:3000/compras/carga?external_reference=".concat(this.$route.query.external_reference),{headers:{"access-token":this.$cookies.get("usuario").token}}).then((function(t){200==t.status&&e.$router.push("/perfil/compras")})).catch((function(e){console.log(e)}))}},l=n(54),component=Object(l.a)(c,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=component.exports}}]);