"use strict";var x=function(f,a){return function(){try{return a||f((a={exports:{}}).exports,a),a.exports}catch(q){throw (a=0, q)}};};var m=x(function(A,k){
var j=require('@stdlib/math-base-special-floorf/dist'),d=require('@stdlib/number-float64-base-to-float32/dist');function g(f,a,q,u,w,r,n,e){var v,p,l,i,t,h,b,s,c;if(f===0)return r[e]=f,r[e+n]=0,0;p=a,v=0,l=f,i=0,c=0;do for(c<p?v=q[w+c*u]:v+=2,c+=1;t=j(d(l/v)),h=d(l-d(v*t)),h===0;){if(i+=1,l=t,r[e+(i+1)*n]=v,v===2&&i!==1){for(s=2;s<=i;s++)b=i-s+2,r[e+(b+1)*n]=r[e+b*n];r[e+2*n]=2}if(l===1)break}while(l!==1);return r[e]=f,r[e+n]=i,i}k.exports=g
});var y=m();module.exports=y;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
