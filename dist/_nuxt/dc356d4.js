/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{448:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__(449),ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,r){return function(e){return new Sha256(r,!0).update(e)[t]()}},createMethod=function(t){var r=createOutputMethod("hex",t);NODE_JS&&(r=nodeWrap(r,t)),r.create=function(){return new Sha256(t)},r.update=function(t){return r.create().update(t)};for(var i=0;i<OUTPUT_TYPES.length;++i){var e=OUTPUT_TYPES[i];r[e]=createOutputMethod(e,t)}return r},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"==typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null==t)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,r){return function(e,o){return new HmacSha256(e,r,!0).update(o)[t]()}},createHmacMethod=function(t){var r=createHmacOutputMethod("hex",t);r.create=function(r){return new HmacSha256(r,t)},r.update=function(t,e){return r.create(t).update(e)};for(var i=0;i<OUTPUT_TYPES.length;++i){var e=OUTPUT_TYPES[i];r[e]=createHmacOutputMethod(e,t)}return r};function Sha256(t,r){r?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,r,e){var i,o=typeof t;if("string"===o){var code,n=[],h=t.length,c=0;for(i=0;i<h;++i)(code=t.charCodeAt(i))<128?n[c++]=code:code<2048?(n[c++]=192|code>>6,n[c++]=128|63&code):code<55296||code>=57344?(n[c++]=224|code>>12,n[c++]=128|code>>6&63,n[c++]=128|63&code):(code=65536+((1023&code)<<10|1023&t.charCodeAt(++i)),n[c++]=240|code>>18,n[c++]=128|code>>12&63,n[c++]=128|code>>6&63,n[c++]=128|63&code);t=n}else{if("object"!==o)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw new Error(ERROR)}t.length>64&&(t=new Sha256(r,!0).update(t).array());var l=[],_=[];for(i=0;i<64;++i){var b=t[i]||0;l[i]=92^b,_[i]=54^b}Sha256.call(this,r,e),this.update(_),this.oKeyPad=l,this.inner=!0,this.sharedMemory=e}Sha256.prototype.update=function(t){if(!this.finalized){var r,e=typeof t;if("string"!==e){if("object"!==e)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw new Error(ERROR);r=!0}for(var code,i,o=0,n=t.length,h=this.blocks;o<n;){if(this.hashed&&(this.hashed=!1,h[0]=this.block,h[16]=h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=0),r)for(i=this.start;o<n&&i<64;++o)h[i>>2]|=t[o]<<SHIFT[3&i++];else for(i=this.start;o<n&&i<64;++o)(code=t.charCodeAt(o))<128?h[i>>2]|=code<<SHIFT[3&i++]:code<2048?(h[i>>2]|=(192|code>>6)<<SHIFT[3&i++],h[i>>2]|=(128|63&code)<<SHIFT[3&i++]):code<55296||code>=57344?(h[i>>2]|=(224|code>>12)<<SHIFT[3&i++],h[i>>2]|=(128|code>>6&63)<<SHIFT[3&i++],h[i>>2]|=(128|63&code)<<SHIFT[3&i++]):(code=65536+((1023&code)<<10|1023&t.charCodeAt(++o)),h[i>>2]|=(240|code>>18)<<SHIFT[3&i++],h[i>>2]|=(128|code>>12&63)<<SHIFT[3&i++],h[i>>2]|=(128|code>>6&63)<<SHIFT[3&i++],h[i>>2]|=(128|63&code)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=h[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,i=this.lastByteIndex;t[16]=this.block,t[i>>2]|=EXTRA[3&i],this.block=t[16],i>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,r,e,o,n,h,c,l,_,a=this.h0,b=this.h1,f=this.h2,d=this.h3,m=this.h4,H=this.h5,g=this.h6,E=this.h7,C=this.blocks;for(t=16;t<64;++t)r=((n=C[t-15])>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,e=((n=C[t-2])>>>17|n<<15)^(n>>>19|n<<13)^n>>>10,C[t]=C[t-16]+r+C[t-7]+e<<0;for(_=b&f,t=0;t<64;t+=4)this.first?(this.is224?(h=300032,E=(n=C[0]-1413257819)-150054599<<0,d=n+24177077<<0):(h=704751109,E=(n=C[0]-210244248)-1521486534<<0,d=n+143694565<<0),this.first=!1):(r=(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10),o=(h=a&b)^a&f^_,E=d+(n=E+(e=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&H^~m&g)+K[t]+C[t])<<0,d=n+(r+o)<<0),r=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),o=(c=d&a)^d&b^h,g=f+(n=g+(e=(E>>>6|E<<26)^(E>>>11|E<<21)^(E>>>25|E<<7))+(E&m^~E&H)+K[t+1]+C[t+1])<<0,r=((f=n+(r+o)<<0)>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),o=(l=f&d)^f&a^c,H=b+(n=H+(e=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7))+(g&E^~g&m)+K[t+2]+C[t+2])<<0,r=((b=n+(r+o)<<0)>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10),o=(_=b&f)^b&d^l,m=a+(n=m+(e=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7))+(H&g^~H&E)+K[t+3]+C[t+3])<<0,a=n+(r+o)<<0;this.h0=this.h0+a<<0,this.h1=this.h1+b<<0,this.h2=this.h2+f<<0,this.h3=this.h3+d<<0,this.h4=this.h4+m<<0,this.h5=this.h5+H<<0,this.h6=this.h6+g<<0,this.h7=this.h7+E<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,h1=this.h1,h2=this.h2,h3=this.h3,h4=this.h4,h5=this.h5,h6=this.h6,r=this.h7,e=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[h1>>28&15]+HEX_CHARS[h1>>24&15]+HEX_CHARS[h1>>20&15]+HEX_CHARS[h1>>16&15]+HEX_CHARS[h1>>12&15]+HEX_CHARS[h1>>8&15]+HEX_CHARS[h1>>4&15]+HEX_CHARS[15&h1]+HEX_CHARS[h2>>28&15]+HEX_CHARS[h2>>24&15]+HEX_CHARS[h2>>20&15]+HEX_CHARS[h2>>16&15]+HEX_CHARS[h2>>12&15]+HEX_CHARS[h2>>8&15]+HEX_CHARS[h2>>4&15]+HEX_CHARS[15&h2]+HEX_CHARS[h3>>28&15]+HEX_CHARS[h3>>24&15]+HEX_CHARS[h3>>20&15]+HEX_CHARS[h3>>16&15]+HEX_CHARS[h3>>12&15]+HEX_CHARS[h3>>8&15]+HEX_CHARS[h3>>4&15]+HEX_CHARS[15&h3]+HEX_CHARS[h4>>28&15]+HEX_CHARS[h4>>24&15]+HEX_CHARS[h4>>20&15]+HEX_CHARS[h4>>16&15]+HEX_CHARS[h4>>12&15]+HEX_CHARS[h4>>8&15]+HEX_CHARS[h4>>4&15]+HEX_CHARS[15&h4]+HEX_CHARS[h5>>28&15]+HEX_CHARS[h5>>24&15]+HEX_CHARS[h5>>20&15]+HEX_CHARS[h5>>16&15]+HEX_CHARS[h5>>12&15]+HEX_CHARS[h5>>8&15]+HEX_CHARS[h5>>4&15]+HEX_CHARS[15&h5]+HEX_CHARS[h6>>28&15]+HEX_CHARS[h6>>24&15]+HEX_CHARS[h6>>20&15]+HEX_CHARS[h6>>16&15]+HEX_CHARS[h6>>12&15]+HEX_CHARS[h6>>8&15]+HEX_CHARS[h6>>4&15]+HEX_CHARS[15&h6];return this.is224||(e+=HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]),e},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,h1=this.h1,h2=this.h2,h3=this.h3,h4=this.h4,h5=this.h5,h6=this.h6,r=this.h7,e=[t>>24&255,t>>16&255,t>>8&255,255&t,h1>>24&255,h1>>16&255,h1>>8&255,255&h1,h2>>24&255,h2>>16&255,h2>>8&255,255&h2,h3>>24&255,h3>>16&255,h3>>8&255,255&h3,h4>>24&255,h4>>16&255,h4>>8&255,255&h4,h5>>24&255,h5>>16&255,h5>>8&255,255&h5,h6>>24&255,h6>>16&255,h6>>8&255,255&h6];return this.is224||e.push(r>>24&255,r>>16&255,r>>8&255,255&r),e},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),r=new DataView(t);return r.setUint32(0,this.h0),r.setUint32(4,this.h1),r.setUint32(8,this.h2),r.setUint32(12,this.h3),r.setUint32(16,this.h4),r.setUint32(20,this.h5),r.setUint32(24,this.h6),this.is224||r.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__(161),__webpack_require__(60))},449:function(t,r){(function(r){t.exports=r}).call(this,{})},511:function(t,r,e){var content=e(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("0f6a81c8",content,!0,{sourceMap:!1})},560:function(t,r,e){"use strict";e(511)},561:function(t,r,e){var o=e(52)(!1);o.push([t.i,".bg-image-register{background-image:url(/producer_equipment.jpg);background-size:cover;background-position:50%;animation:myfirst 1.2s}",""]),t.exports=o},588:function(t,r,e){"use strict";e.r(r);e(11);var o=e(102),n=e.n(o),h=e(448),c={name:"register",layout:"ingreso",data:function(){return{see:!0,productor:!1,nombre:"",email:"",confirmarEmail:"",contrasenia:"",confirmarContrasenia:"",terminosYCondiciones:!1,classComprador:"selected border rounded-pill",classVendedor:"notSelected",inputerr:{nombre:!1,email:!1,confirmarEmail:!1,contrasenia:!1,confirmarContrasenia:!1,longitud:!1,mayusculas:!1,numeros:!1,caracteres:!1,emailValido:!1,emailNoCoincide:!1}}},methods:{mostrarProducto:function(){this.productor=!0,this.classVendedor="selected border rounded-pill",this.classComprador="notSelected"},mostrarComprador:function(){this.productor=!1,this.classVendedor="notSelected",this.classComprador="selected border rounded-pill"},validar:function(){return""!=this.nombre&&""!=this.email&&""!=this.confirmarEmail&&""!=this.contrasenia&&""!=this.confirmarContrasenia&&this.email==this.email&&this.contrasenia==this.confirmarContrasenia},validarEmail:function(){return this.email==this.confirmarEmail},validarMayuscula:function(t){return/([a-z,0-9,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿]*[A-Z][0-9,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿,a-z]*)/g.test(t)},validarNumero:function(t){return/([a-z,A-Z,\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿]*[0-9][\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿,A-Z,a-z]*)/g.test(t)},validarCaracterEspecial:function(t){return/([a-z,A-Z,0-9]*[\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?,\¿][a-z,A-Z,0-9]*[\!,\@,\#,\$,\%,\^,\&,\*,\(,\),\=,\+,\[,\],\',\",\;,\:,\<,\>,\.,\.,\?][a-z,A-Z,0-9]*)/g.test(t)},"validarConstraseña":function(){var t=!0;return this.contrasenia!=this.confirmarContrasenia&&(t=!1),this.contrasenia.length<6&&(t=!1),this.validarMayuscula(this.contrasenia)||(t=!1),this.validarNumero(this.contrasenia)||(t=!1),this.validarCaracterEspecial(this.contrasenia)||(t=!1),t},showErrContrasenia:function(){this.contrasenia.length<5&&(this.inputerr.longitud=!0),this.validarMayuscula(this.contrasenia)||(this.inputerr.mayusculas=!0),this.validarNumero(this.contrasenia)||(this.inputerr.numeros=!0),this.validarCaracterEspecial(this.contrasenia)||(this.inputerr.caracteres=!0)},focusContrasenia:function(){this.inputerr.longitud=!1,this.inputerr.mayusculas=!1,this.inputerr.numeros=!1,this.inputerr.caracteres=!1},showErr:function(){""==this.nombre&&(this.inputerr.nombre=!0),""==this.email&&(this.inputerr.email=!0),""==this.confirmarEmail&&(this.inputerr.confirmarEmail=!0),""==this.contrasenia&&(this.inputerr.contrasenia=!0),""==this.confirmarContrasenia&&(this.inputerr.confirmarContrasenia=!0)},blurRegistro:function(){this.inputerr.nombre=!1,this.inputerr.email=!1,this.inputerr.confirmarEmail=!1,this.inputerr.contrasenia=!1,this.inputerr.confirmarContrasenia=!1},registrar:function(){var t=this;if(this.showErr(),this.validar()&&this.validarConstraseña()&&this.validarEmail()){var data={productor:this.productor,nombre:this.nombre,email:this.email,contrasenia:this.hash(this.contrasenia)};n.a.post("".concat(this.$axios.defaults.baseURL,"auth/register"),data).then((function(r){200==r.status?(t.$cookiz.set("usuario",r.data,{path:"/",maxAge:604800}),t.$router.push("/perfil")):203==r.status?alert("El usuario y existe!!"):console.log(r)})).catch((function(t){console.log(t)}))}else this.validarConstraseña()||this.validarEmail()},hash:function(t){return h.sha256.create().update(t).hex()}}},l=(e(560),e(54)),component=Object(l.a)(c,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row no-gutter"},[r("div",{staticClass:"col-md-8 d-none d-md-flex bg-image-register"}),t._v(" "),r("div",{staticClass:"col-md-4"},[r("NuxtLink",{attrs:{to:"/"}},[r("span",{staticClass:"material-symbols-outlined"},[t._v("\n          arrow_back_ios\n        ")])]),t._v(" "),r("div",{staticClass:"login d-flex align-items-center py-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-10 col-xl-7 mx-auto"},[t._m(0),t._v(" "),r("br"),t._v(" "),r("b-form",[r("b-form-group",{attrs:{label:"Nombre"}},[r("FormulateInput",{attrs:{"wrapper-class":["input_form"],type:"text",validation:"required"},model:{value:t.nombre,callback:function(r){t.nombre=r},expression:"nombre"}})],1),t._v(" "),r("b-form-group",{attrs:{label:"Email"}},[r("b-form-input",{attrs:{type:"email",required:""},model:{value:t.email,callback:function(r){t.email=r},expression:"email"}}),t._v(" "),t.inputerr.email?r("p",[r("b",{staticClass:"err-input"},[t._v("Ingrese un email.")])]):t._e()],1),t._v(" "),r("b-form-group",{attrs:{label:"Confirmar Email"}},[r("b-form-input",{attrs:{type:"email",required:""},model:{value:t.confirmarEmail,callback:function(r){t.confirmarEmail=r},expression:"confirmarEmail"}}),t._v(" "),t.inputerr.confirmarEmail?r("p",[r("b",{staticClass:"err-input"},[t._v("Confirme el email.")])]):t._e(),t._v(" "),t.inputerr.emailNoCoincide?r("p",[r("b",{staticClass:"err-input"},[t._v("Los emails no coinciden.")])]):t._e(),t._v(" "),t.inputerr.emailValido?r("p",[r("b",{staticClass:"err-input"},[t._v("El email no es valido.")])]):t._e()],1),t._v(" "),r("b-form-group",{attrs:{label:"Contraseña"}},[r("b-form-input",{attrs:{type:"password",required:""},on:{blur:t.showErrContrasenia,click:t.focusContrasenia},model:{value:t.contrasenia,callback:function(r){t.contrasenia=r},expression:"contrasenia"}}),t._v(" "),t.inputerr.contrasenia?r("p",[r("b",{staticClass:"err-input"},[t._v("Ingrese una contraseña.")])]):t._e(),t._v(" "),t.inputerr.longitud?r("p",[r("b",{staticClass:"err-input"},[t._v("\n                      La contrasenia no es suficientemente larga tiene que tener mas de 6 caracteres.\n                    ")])]):t._e(),t._v(" "),t.inputerr.mayusculas?r("p",[r("b",{staticClass:"err-input"},[t._v("\n                      La contraseña tiene que tener al menos una mayuscula.\n                    ")])]):t._e(),t._v(" "),t.inputerr.numeros?r("p",[r("b",{staticClass:"err-input"},[t._v("\n                      La contraseña tiene que tener al menos un numero\n                    ")])]):t._e(),t._v(" "),t.inputerr.caracteres?r("p",[r("b",{staticClass:"err-input"},[t._v("\n                      La contraseña tiene que tener al menos dos caracteres especiales.\n                    ")])]):t._e()],1),t._v(" "),r("b-form-group",{attrs:{label:"Confirmar Contrasenia"}},[r("b-form-input",{attrs:{type:"password",required:""},model:{value:t.confirmarContrasenia,callback:function(r){t.confirmarContrasenia=r},expression:"confirmarContrasenia"}}),t._v(" "),t.inputerr.confirmarContrasenia?r("b",{staticClass:"err-input"},[t._v("Confirme la contraseña.")]):t._e(),r("br")],1),t._v(" "),r("b-form-group",{staticClass:"container text-center"},[r("b-row",{},[r("b-col",{class:t.classComprador,on:{click:t.mostrarComprador}},[t._v("\n                      Comprador\n                      "),r("span",{staticClass:"material-symbols-outlined"},[t._v("\n                        shopping_cart\n                      ")])]),t._v(" "),r("b-col",{class:t.classVendedor,on:{click:t.mostrarProducto}},[t._v("\n                      Productor\n                      "),r("span",{staticClass:"material-symbols-outlined"},[t._v("\n                        store\n                      ")])])],1)],1),t._v(" "),r("b-form-group",[t._v("\n                  "+t._s(t.terminosYCondiciones)+"\n                  \n                    "),r("b-form-checkbox",{attrs:{value:"true","unchecked-value":"false"},model:{value:t.terminosYCondiciones,callback:function(r){t.terminosYCondiciones=r},expression:"terminosYCondiciones"}},[t._v("Acepto los terminos y condiciones")])],1),t._v(" "),r("b-button",{staticClass:"rounded-pill",attrs:{block:""},on:{blur:t.blurRegistro,click:t.registrar}},[t._v("Registrar\n                  ")]),t._v(" "),r("br"),t._v(" "),r("h6",[t._v("\n                  ¿Ya tenés cuenta?"),r("a",[r("nuxt-link",{attrs:{to:"/login"}},[t._v(" Entrar")])],1)])],1)],1)])])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"d-flex justify-content-center"},[t("img",{attrs:{src:"/icons/logo.png",alt:"",width:"80px"}})])}],!1,null,null,null);r.default=component.exports}}]);