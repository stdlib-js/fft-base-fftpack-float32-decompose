// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floorf@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.3-esm/index.mjs";function r(r,s,i,o,f,n,a,d){var l,m,b,h,j,p,u,v;if(0===r)return n[d]=r,n[d+a]=0,0;m=s,l=0,b=r,h=0,v=0;do{for(v<m?l=i[f+v*o]:l+=2,v+=1;j=t(e(b/l)),0===e(b-e(l*j));){if(b=j,n[d+((h+=1)+1)*a]=l,2===l&&1!==h){for(u=2;u<=h;u++)n[d+((p=h-u+2)+1)*a]=n[d+p*a];n[d+2*a]=2}if(1===b)break}}while(1!==b);return n[d]=r,n[d+a]=h,h}export{r as default};
//# sourceMappingURL=index.mjs.map
