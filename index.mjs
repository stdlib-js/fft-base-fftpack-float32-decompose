// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function r(r,f,e,i,o,t,a,n){var u,d,l,b,c,h,k,p;if(0===r)return t[n]=r,t[n+a]=0,0;d=f,u=0,l=r,b=0,p=0;do{for(p<d?u=e[o+p*i]>>>0:u+=2,p+=1;0==l-u*(c=l/u>>>0);){if(l=c,t[n+((b+=1)+1)*a]=u,2===u&&1!==b){for(k=2;k<=b;k++)t[n+((h=b-k+2)+1)*a]=t[n+h*a];t[n+2*a]=2}if(1===l)break}}while(1!==l);return t[n]=r,t[n+a]=b,b}export{r as default};
//# sourceMappingURL=index.mjs.map
