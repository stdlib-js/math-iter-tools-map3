"use strict";var h=function(f,t){return function(){return t||f((t={exports:{}}).exports,t),t.exports}};var b=h(function(z,q){
var V=require('@stdlib/assert-is-plain-object/dist'),k=require('@stdlib/assert-has-own-property/dist'),F=require('@stdlib/error-tools-fmtprodmsg/dist');function L(f,t){return V(t)?(k(t,"invalid")&&(f.invalid=t.invalid),null):new TypeError(F('0e52V',t));}q.exports=L
});var T=h(function(B,O){
var c=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=require('@stdlib/assert-is-function/dist'),M=require('@stdlib/assert-is-iterator-like/dist'),A=require('@stdlib/assert-is-number/dist').isPrimitive,p=require('@stdlib/symbol-iterator/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist'),G=b();function x(f,t,R,m,j){var u,n,s,o,l,d,v,g,r;for(o=3,n=[0,0,0],u=[],s=[],r=0;r<o;r++)if(u.push(arguments[r]),M(arguments[r]))s.push(1);else if(A(arguments[r]))s.push(0);else throw new TypeError(w('0e54P',r,arguments[r]));if(!y(m))throw new TypeError(w('0e53N',m));if(d={invalid:NaN},arguments.length>4&&(g=G(d,j),g))throw g;if(l={},c(l,"next",E),c(l,"return",N),p){for(r=0;r<o;r++)if(s[r]&&!y(u[r][p])){v=!0;break}v||c(l,p,P)}return v=!1,l;function E(){var a,e,i;if(v)return{done:!0};for(i=0;i<o;i++)if(s[i]){if(e=u[i].next(),e.done)return v=!0,e;typeof e.value=="number"?n[i]=e.value:a=!0}else n[i]=u[i];return a?{value:d.invalid,done:!1}:{value:m(n[0],n[1],n[2]),done:!1}}function N(a){return v=!0,arguments.length?{value:a,done:!0}:{done:!0}}function P(){var a,e;for(a=[],e=0;e<o;e++)s[e]?a.push(u[e][p]()):a.push(u[e]);return a.push(m,d),x.apply(null,a)}}O.exports=x
});var I=T();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map