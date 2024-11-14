(function(H,U){typeof exports=="object"&&typeof module<"u"?U(exports):typeof define=="function"&&define.amd?define(["exports"],U):(H=typeof globalThis<"u"?globalThis:H||self,U(H.altcha={}))})(this,function(H){"use strict";var Rn=Object.defineProperty;var Ln=(H,U,z)=>U in H?Rn(H,U,{enumerable:!0,configurable:!0,writable:!0,value:z}):H[U]=z;var Y=(H,U,z)=>Ln(H,typeof U!="symbol"?U+"":U,z);var U=typeof document<"u"?document.currentScript:null;function z(){}function xt(n,e){for(const t in e)n[t]=e[t];return n}function Fe(n){return n()}function Ne(){return Object.create(null)}function ge(n){n.forEach(Fe)}function je(n){return typeof n=="function"}function At(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function It(n){return Object.keys(n).length===0}function Rt(n,e,t,r){if(n){const o=Ve(n,e,t,r);return n[0](o)}}function Ve(n,e,t,r){return n[1]&&r?xt(t.ctx.slice(),n[1](r(e))):t.ctx}function Lt(n,e,t,r){if(n[2]&&r){const o=n[2](r(t));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],s=Math.max(e.dirty.length,o.length);for(let h=0;h<s;h+=1)l[h]=e.dirty[h]|o[h];return l}return e.dirty|o}return e.dirty}function St(n,e,t,r,o,l){if(o){const s=Ve(e,t,r,l);n.p(s,o)}}function Tt(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function R(n,e){n.appendChild(e)}function $(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function M(n){return document.createElement(n)}function K(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Dt(n){return document.createTextNode(n)}function Q(){return Dt(" ")}function Le(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function c(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Pt(n){return Array.from(n.childNodes)}function Ue(n,e,t){n.classList.toggle(e,!!t)}function Mt(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function Ft(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let me;function be(n){me=n}function Se(){if(!me)throw new Error("Function called outside component initialization");return me}function Nt(n){Se().$$.on_mount.push(n)}function jt(n){Se().$$.on_destroy.push(n)}function Vt(){const n=Se();return(e,t,{cancelable:r=!1}={})=>{const o=n.$$.callbacks[e];if(o){const l=Mt(e,t,{cancelable:r});return o.slice().forEach(s=>{s.call(n,l)}),!l.defaultPrevented}return!0}}const ce=[],Ce=[];let ue=[];const $e=[],Oe=Promise.resolve();let Te=!1;function He(){Te||(Te=!0,Oe.then(p))}function Ut(){return He(),Oe}function De(n){ue.push(n)}const Pe=new Set;let ae=0;function p(){if(ae!==0)return;const n=me;do{try{for(;ae<ce.length;){const e=ce[ae];ae++,be(e),$t(e.$$)}}catch(e){throw ce.length=0,ae=0,e}for(be(null),ce.length=0,ae=0;Ce.length;)Ce.pop()();for(let e=0;e<ue.length;e+=1){const t=ue[e];Pe.has(t)||(Pe.add(t),t())}ue.length=0}while(ce.length);for(;$e.length;)$e.pop()();Te=!1,Pe.clear(),be(n)}function $t(n){if(n.fragment!==null){n.update(),ge(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(De)}}function Ot(n){const e=[],t=[];ue.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),ue=e}const xe=new Set;let Ht;function Be(n,e){n&&n.i&&(xe.delete(n),n.i(e))}function Bt(n,e,t,r){if(n&&n.o){if(xe.has(n))return;xe.add(n),Ht.c.push(()=>{xe.delete(n)}),n.o(e)}}function qt(n,e,t){const{fragment:r,after_update:o}=n.$$;r&&r.m(e,t),De(()=>{const l=n.$$.on_mount.map(Fe).filter(je);n.$$.on_destroy?n.$$.on_destroy.push(...l):ge(l),n.$$.on_mount=[]}),o.forEach(De)}function Zt(n,e){const t=n.$$;t.fragment!==null&&(Ot(t.after_update),ge(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Wt(n,e){n.$$.dirty[0]===-1&&(ce.push(n),He(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Gt(n,e,t,r,o,l,s=null,h=[-1]){const d=me;be(n);const u=n.$$={fragment:null,ctx:[],props:l,update:z,not_equal:o,bound:Ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Ne(),dirty:h,skip_bound:!1,root:e.target||d.$$.root};s&&s(u.root);let A=!1;if(u.ctx=t?t(n,e.props||{},(_,B,...q)=>{const Z=q.length?q[0]:B;return u.ctx&&o(u.ctx[_],u.ctx[_]=Z)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](Z),A&&Wt(n,_)),B}):[],u.update(),A=!0,ge(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const _=Pt(e.target);u.fragment&&u.fragment.l(_),_.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&Be(n.$$.fragment),qt(n,e.target,e.anchor),p()}be(d)}let qe;typeof HTMLElement=="function"&&(qe=class extends HTMLElement{constructor(e,t,r){super();Y(this,"$$ctor");Y(this,"$$s");Y(this,"$$c");Y(this,"$$cn",!1);Y(this,"$$d",{});Y(this,"$$r",!1);Y(this,"$$p_d",{});Y(this,"$$l",{});Y(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,r&&this.attachShadow({mode:"open"})}addEventListener(e,t,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const o=this.$$c.$on(e,t);this.$$l_u.set(t,o)}super.addEventListener(e,t,r)}removeEventListener(e,t,r){if(super.removeEventListener(e,t,r),this.$$c){const o=this.$$l_u.get(t);o&&(o(),this.$$l_u.delete(t))}if(this.$$l[e]){const o=this.$$l[e].indexOf(t);o>=0&&this.$$l[e].splice(o,1)}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(l){return()=>{let s;return{c:function(){s=M("slot"),l!=="default"&&c(s,"name",l)},m:function(u,A){$(u,s,A)},d:function(u){u&&j(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=Ft(this);for(const l of this.$$s)l in r&&(t[l]=[e(l)]);for(const l of this.attributes){const s=this.$$g_p(l.name);s in this.$$d||(this.$$d[s]=Ae(s,l.value,this.$$p_d,"toProp"))}for(const l in this.$$p_d)!(l in this.$$d)&&this[l]!==void 0&&(this.$$d[l]=this[l],delete this[l]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const l in this.$$p_d)if(this.$$d[l]=this.$$c.$$.ctx[this.$$c.$$.props[l]],this.$$p_d[l].reflect){const s=Ae(l,this.$$d[l],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,s)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const l in this.$$l)for(const s of this.$$l[l]){const h=this.$$c.$on(l,s);this.$$l_u.set(s,h)}this.$$l={}}}attributeChangedCallback(e,t,r){var o;this.$$r||(e=this.$$g_p(e),this.$$d[e]=Ae(e,r,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Ae(n,e,t,r){var l;const o=(l=t[n])==null?void 0:l.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!t[n])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Yt(n,e,t,r,o,l){let s=class extends qe{constructor(){super(n,t,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(h=>(e[h].attribute||h).toLowerCase())}};return Object.keys(e).forEach(h=>{Object.defineProperty(s.prototype,h,{get(){return this.$$c&&h in this.$$c?this.$$c[h]:this.$$d[h]},set(d){var u;d=Ae(h,d,e),this.$$d[h]=d,(u=this.$$c)==null||u.$set({[h]:d})}})}),r.forEach(h=>{Object.defineProperty(s.prototype,h,{get(){var d;return(d=this.$$c)==null?void 0:d[h]}})}),n.element=s,s}class Xt{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){Zt(this,1),this.$destroy=z}$on(e,t){if(!je(t))return z;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!It(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Jt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Jt);const Ze=new TextEncoder;function zt(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function Kt(n,e="SHA-256",t=1e5){const r=Date.now().toString(16);n||(n=Math.round(Math.random()*t));const o=await We(r,n,e);return{algorithm:e,challenge:o,salt:r,signature:""}}async function We(n,e,t){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return zt(await crypto.subtle.digest(t.toUpperCase(),Ze.encode(n+e)))}function Qt(n,e,t="SHA-256",r=1e6,o=0){const l=new AbortController,s=Date.now();return{promise:(async()=>{for(let d=o;d<=r;d+=1){if(l.signal.aborted)return null;if(await We(e,d,t)===n)return{number:d,took:Date.now()-s}}return null})(),controller:l}}function en(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function tn(n){const e=atob(n),t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}function nn(n,e=12){const t=new Uint8Array(e);for(let r=0;r<e;r++)t[r]=n%256,n=Math.floor(n/256);return t}async function rn(n,e="",t=1e6,r=0){const o="AES-GCM",l=new AbortController,s=Date.now(),h=async()=>{for(let A=r;A<=t;A+=1){if(l.signal.aborted||!d||!u)return null;try{const _=await crypto.subtle.decrypt({name:o,iv:nn(A)},d,u);if(_)return{clearText:new TextDecoder().decode(_),took:Date.now()-s}}catch{}}return null};let d=null,u=null;try{u=tn(n);const A=await crypto.subtle.digest("SHA-256",Ze.encode(e));d=await crypto.subtle.importKey("raw",A,o,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:l}}return{promise:h(),controller:l}}var g=(n=>(n.ERROR="error",n.VERIFIED="verified",n.VERIFYING="verifying",n.UNVERIFIED="unverified",n.EXPIRED="expired",n))(g||{});function Ge(n){let e,t,r;return{c(){e=K("svg"),t=K("path"),r=K("path"),c(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),c(t,"fill","currentColor"),c(t,"opacity",".25"),c(r,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),c(r,"fill","currentColor"),c(r,"class","altcha-spinner"),c(e,"width","24"),c(e,"height","24"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(o,l){$(o,e,l),R(e,t),R(e,r)},d(o){o&&j(e)}}}function on(n){let e,t=n[11].label+"",r;return{c(){e=M("label"),c(e,"for",r=n[4]+"_checkbox")},m(o,l){$(o,e,l),e.innerHTML=t},p(o,l){l[0]&2048&&t!==(t=o[11].label+"")&&(e.innerHTML=t),l[0]&16&&r!==(r=o[4]+"_checkbox")&&c(e,"for",r)},d(o){o&&j(e)}}}function ln(n){let e,t=n[11].verifying+"";return{c(){e=M("span")},m(r,o){$(r,e,o),e.innerHTML=t},p(r,o){o[0]&2048&&t!==(t=r[11].verifying+"")&&(e.innerHTML=t)},d(r){r&&j(e)}}}function sn(n){let e,t=n[11].verified+"",r,o;return{c(){e=M("span"),r=Q(),o=M("input"),c(o,"type","hidden"),c(o,"name",n[4]),o.value=n[6]},m(l,s){$(l,e,s),e.innerHTML=t,$(l,r,s),$(l,o,s)},p(l,s){s[0]&2048&&t!==(t=l[11].verified+"")&&(e.innerHTML=t),s[0]&16&&c(o,"name",l[4]),s[0]&64&&(o.value=l[6])},d(l){l&&(j(e),j(r),j(o))}}}function Ye(n){let e,t,r,o,l,s,h;return{c(){e=M("div"),t=M("a"),r=K("svg"),o=K("path"),l=K("path"),s=K("path"),c(o,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),c(o,"fill","currentColor"),c(l,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),c(l,"fill","currentColor"),c(s,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),c(s,"fill","currentColor"),c(r,"width","22"),c(r,"height","22"),c(r,"viewBox","0 0 20 20"),c(r,"fill","none"),c(r,"xmlns","http://www.w3.org/2000/svg"),c(t,"href",Qe),c(t,"target","_blank"),c(t,"class","altcha-logo"),c(t,"aria-label",h=n[11].ariaLinkLabel)},m(d,u){$(d,e,u),R(e,t),R(t,r),R(r,o),R(r,l),R(r,s)},p(d,u){u[0]&2048&&h!==(h=d[11].ariaLinkLabel)&&c(t,"aria-label",h)},d(d){d&&j(e)}}}function Xe(n){let e,t,r,o;function l(d,u){return d[7]===g.EXPIRED?cn:fn}let s=l(n),h=s(n);return{c(){e=M("div"),t=K("svg"),r=K("path"),o=Q(),h.c(),c(r,"stroke-linecap","round"),c(r,"stroke-linejoin","round"),c(r,"d","M6 18L18 6M6 6l12 12"),c(t,"width","14"),c(t,"height","14"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"fill","none"),c(t,"viewBox","0 0 24 24"),c(t,"stroke-width","1.5"),c(t,"stroke","currentColor"),c(e,"class","altcha-error")},m(d,u){$(d,e,u),R(e,t),R(t,r),R(e,o),h.m(e,null)},p(d,u){s===(s=l(d))&&h?h.p(d,u):(h.d(1),h=s(d),h&&(h.c(),h.m(e,null)))},d(d){d&&j(e),h.d()}}}function fn(n){let e,t=n[11].error+"";return{c(){e=M("div"),c(e,"title",n[5])},m(r,o){$(r,e,o),e.innerHTML=t},p(r,o){o[0]&2048&&t!==(t=r[11].error+"")&&(e.innerHTML=t),o[0]&32&&c(e,"title",r[5])},d(r){r&&j(e)}}}function cn(n){let e,t=n[11].expired+"";return{c(){e=M("div"),c(e,"title",n[5])},m(r,o){$(r,e,o),e.innerHTML=t},p(r,o){o[0]&2048&&t!==(t=r[11].expired+"")&&(e.innerHTML=t),o[0]&32&&c(e,"title",r[5])},d(r){r&&j(e)}}}function Je(n){let e,t,r=n[11].footer+"";return{c(){e=M("div"),t=M("div"),c(e,"class","altcha-footer")},m(o,l){$(o,e,l),R(e,t),t.innerHTML=r},p(o,l){l[0]&2048&&r!==(r=o[11].footer+"")&&(t.innerHTML=r)},d(o){o&&j(e)}}}function ze(n){let e;return{c(){e=M("div"),c(e,"class","altcha-anchor-arrow")},m(t,r){$(t,e,r),n[48](e)},p:z,d(t){t&&j(e),n[48](null)}}}function un(n){let e,t,r,o,l,s,h,d,u,A,_,B,q,Z,T,L,ee;const te=n[46].default,N=Rt(te,n,n[45],null);let D=n[7]===g.VERIFYING&&Ge();function ne(a,b){return a[7]===g.VERIFIED?sn:a[7]===g.VERIFYING?ln:on}let X=ne(n),V=X(n),k=(n[3]!==!0||n[12])&&Ye(n),P=(n[5]||n[7]===g.EXPIRED)&&Xe(n),S=n[11].footer&&(n[2]!==!0||n[12])&&Je(n),E=n[1]&&ze(n);return{c(){N&&N.c(),e=Q(),t=M("div"),r=M("div"),D&&D.c(),o=Q(),l=M("div"),s=M("input"),u=Q(),A=M("div"),V.c(),_=Q(),k&&k.c(),B=Q(),P&&P.c(),q=Q(),S&&S.c(),Z=Q(),E&&E.c(),c(s,"type","checkbox"),c(s,"id",h=n[4]+"_checkbox"),s.required=d=n[0]!=="onsubmit"&&(!n[1]||n[0]!=="off"),c(l,"class","altcha-checkbox"),Ue(l,"altcha-hidden",n[7]===g.VERIFYING),c(A,"class","altcha-label"),c(r,"class","altcha-main"),c(t,"class","altcha"),c(t,"data-state",n[7]),c(t,"data-floating",n[1])},m(a,b){N&&N.m(a,b),$(a,e,b),$(a,t,b),R(t,r),D&&D.m(r,null),R(r,o),R(r,l),R(l,s),s.checked=n[8],R(r,u),R(r,A),V.m(A,null),R(r,_),k&&k.m(r,null),R(t,B),P&&P.m(t,null),R(t,q),S&&S.m(t,null),R(t,Z),E&&E.m(t,null),n[49](t),T=!0,L||(ee=[Le(s,"change",n[47]),Le(s,"change",n[13]),Le(s,"invalid",n[14])],L=!0)},p(a,b){N&&N.p&&(!T||b[1]&16384)&&St(N,te,a,a[45],T?Lt(te,a[45],b,null):Tt(a[45]),null),a[7]===g.VERIFYING?D||(D=Ge(),D.c(),D.m(r,o)):D&&(D.d(1),D=null),(!T||b[0]&16&&h!==(h=a[4]+"_checkbox"))&&c(s,"id",h),(!T||b[0]&3&&d!==(d=a[0]!=="onsubmit"&&(!a[1]||a[0]!=="off")))&&(s.required=d),b[0]&256&&(s.checked=a[8]),(!T||b[0]&128)&&Ue(l,"altcha-hidden",a[7]===g.VERIFYING),X===(X=ne(a))&&V?V.p(a,b):(V.d(1),V=X(a),V&&(V.c(),V.m(A,null))),a[3]!==!0||a[12]?k?k.p(a,b):(k=Ye(a),k.c(),k.m(r,null)):k&&(k.d(1),k=null),a[5]||a[7]===g.EXPIRED?P?P.p(a,b):(P=Xe(a),P.c(),P.m(t,q)):P&&(P.d(1),P=null),a[11].footer&&(a[2]!==!0||a[12])?S?S.p(a,b):(S=Je(a),S.c(),S.m(t,Z)):S&&(S.d(1),S=null),a[1]?E?E.p(a,b):(E=ze(a),E.c(),E.m(t,null)):E&&(E.d(1),E=null),(!T||b[0]&128)&&c(t,"data-state",a[7]),(!T||b[0]&2)&&c(t,"data-floating",a[1])},i(a){T||(Be(N,a),T=!0)},o(a){Bt(N,a),T=!1},d(a){a&&(j(e),j(t)),N&&N.d(a),D&&D.d(),V.d(),k&&k.d(),P&&P.d(),S&&S.d(),E&&E.d(),n[49](null),L=!1,ge(ee)}}}const Ke="Visit Altcha.org",Qe="https://altcha.org/";function et(n){return JSON.parse(n)}function an(n,e,t){var vt,kt;let r,o,l,s,{$$slots:h={},$$scope:d}=e,{auto:u=void 0}=e,{blockspam:A=void 0}=e,{challengeurl:_=void 0}=e,{challengejson:B=void 0}=e,{debug:q=!1}=e,{delay:Z=0}=e,{expire:T=void 0}=e,{floating:L=void 0}=e,{floatinganchor:ee=void 0}=e,{floatingoffset:te=void 0}=e,{hidefooter:N=!1}=e,{hidelogo:D=!1}=e,{name:ne="altcha"}=e,{maxnumber:X=1e6}=e,{mockerror:V=!1}=e,{obfuscated:k=void 0}=e,{plugins:P=void 0}=e,{refetchonexpire:S=!0}=e,{spamfilter:E=!1}=e,{strings:a=void 0}=e,{test:b=!1}=e,{verifyurl:ie=void 0}=e,{workers:he=Math.min(16,navigator.hardwareConcurrency||8)}=e,{workerurl:ye=void 0}=e;const _e=Vt(),nt=["SHA-256","SHA-384","SHA-512"],it=(kt=(vt=document.documentElement.lang)==null?void 0:vt.split("-"))==null?void 0:kt[0];let le=!1,C,se=null,de=null,y=null,we=null,J=null,fe=null,re=[],x=g.UNVERIFIED;jt(()=>{hn(),y&&(y.removeEventListener("submit",ct),y.removeEventListener("reset",ut),y.removeEventListener("focusin",ft),y=null),J&&(clearTimeout(J),J=null),document.removeEventListener("click",lt),document.removeEventListener("scroll",st),window.removeEventListener("resize",ht)}),Nt(()=>{v("mounted","1.0.6"),v("workers",he),yn(),v("plugins",re.length?re.map(i=>i.constructor.pluginName).join(", "):"none"),b&&v("using test mode"),T&&Re(T),u!==void 0&&v("auto",u),L!==void 0&&dt(L),y=C.closest("form"),y&&(y.addEventListener("submit",ct,{capture:!0}),y.addEventListener("reset",ut),u==="onfocus"&&y.addEventListener("focusin",ft)),u==="onload"&&(k?pe():oe()),r&&(N||D)&&v("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."),requestAnimationFrame(()=>{_e("load")})});function rt(i,f){return btoa(JSON.stringify({algorithm:i.algorithm,challenge:i.challenge,number:f.number,salt:i.salt,signature:i.signature,test:b?!0:void 0,took:f.took}))}function hn(){for(const i of re)i.destroy()}function ot(){_&&S&&x===g.VERIFIED?oe():Ee(g.EXPIRED,s.expired)}async function dn(){var i;if(V)throw v("mocking error"),new Error("Mocked error.");if(o)return v("using provided json data"),o;if(b)return v("generating test challenge",{test:b}),Kt(typeof b!="boolean"?+b:void 0);{if(!_&&y){const w=y.getAttribute("action");w!=null&&w.includes("/form/")&&t(15,_=w+"/altcha")}if(!_)throw new Error("Attribute challengeurl not set.");v("fetching challenge from",_);const f=await fetch(_,{headers:E?{"x-altcha-spam-filter":"1"}:{}});if(f.status!==200)throw new Error(`Server responded with ${f.status}.`);const m=f.headers.get("Expires"),I=f.headers.get("X-Altcha-Config"),W=await f.json(),O=new URLSearchParams((i=W.salt.split("?"))==null?void 0:i[1]),F=O.get("expires")||O.get("expire");if(F){const w=new Date(+F*1e3),G=isNaN(w.getTime())?0:w.getTime()-Date.now();G>0&&Re(G)}if(I)try{const w=JSON.parse(I);w&&typeof w=="object"&&(w.verifyurl&&(w.verifyurl=new URL(w.verifyurl,new URL(_)).toString()),bt(w))}catch(w){v("unable to configure from X-Altcha-Config",w)}if(!T&&(m!=null&&m.length)){const w=Date.parse(m);if(w){const G=w-Date.now();G>0&&Re(G)}}return W}}function gn(i){var m;const f=y==null?void 0:y.querySelector(typeof i=="string"?`input[name="${i}"]`:'input[type="email"]:not([data-no-spamfilter])');return((m=f==null?void 0:f.value)==null?void 0:m.slice(f.value.indexOf("@")))||void 0}function mn(){return E==="ipAddress"?{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:!1,expectedCountries:void 0,expectedLanguages:void 0,fields:!1,ipAddress:void 0,text:void 0,timeZone:void 0}:typeof E=="object"?E:{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,text:void 0,timeZone:void 0}}function bn(i){return[...(y==null?void 0:y.querySelectorAll(i!=null&&i.length?i.map(m=>`input[name="${m}"]`).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((m,I)=>{const W=I.name,O=I.value;return W&&O&&(m[W]=/\n/.test(O)?O.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):O),m},{})}function yn(){const i=P!==void 0?P.split(","):void 0;for(const f of globalThis.altchaPlugins)(!i||i.includes(f.pluginName))&&re.push(new f({el:C,clarify:pe,dispatch:_e,getConfiguration:yt,getFloatingAnchor:_t,getState:wt,log:v,reset:Ee,solve:mt,setState:Et,setFloatingAnchor:pt,verify:oe}))}function v(...i){(q||i.some(f=>f instanceof Error))&&console[i[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${ne}]`,...i)}function _n(){[g.UNVERIFIED,g.ERROR,g.EXPIRED].includes(x)?E&&(y==null?void 0:y.reportValidity())===!1?t(8,le=!1):k?pe():oe():t(8,le=!0)}function lt(i){const f=i.target;L&&f&&!C.contains(f)&&(x===g.VERIFIED||u==="off"&&x===g.UNVERIFIED)&&t(9,C.style.display="none",C)}function st(){L&&x!==g.UNVERIFIED&&Ie()}function wn(i){for(const f of re)typeof f.onErrorChange=="function"&&f.onErrorChange(we)}function ft(i){x===g.UNVERIFIED&&oe()}function ct(i){y&&u==="onsubmit"?x===g.UNVERIFIED?(i.preventDefault(),i.stopPropagation(),oe().then(()=>{y==null||y.requestSubmit()})):x!==g.VERIFIED&&(i.preventDefault(),i.stopPropagation(),x===g.VERIFYING&&at()):y&&L&&u==="off"&&x===g.UNVERIFIED&&(i.preventDefault(),i.stopPropagation(),t(9,C.style.display="block",C),Ie())}function ut(){Ee()}function at(){x===g.VERIFYING&&s.waitAlert&&alert(s.waitAlert)}function pn(i){for(const f of re)typeof f.onStateChange=="function"&&f.onStateChange(x);L&&x!==g.UNVERIFIED&&requestAnimationFrame(()=>{Ie()}),t(8,le=x===g.VERIFIED)}function ht(){L&&Ie()}function Ie(i=20){if(C)if(de||(de=(ee?document.querySelector(ee):y==null?void 0:y.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])'))||y),de){const f=parseInt(te,10)||12,m=de.getBoundingClientRect(),I=C.getBoundingClientRect(),W=document.documentElement.clientHeight,O=document.documentElement.clientWidth,F=L==="auto"?m.bottom+I.height+f+i>W:L==="top",w=Math.max(i,Math.min(O-i-I.width,m.left+m.width/2-I.width/2));if(F?t(9,C.style.top=`${m.top-(I.height+f)}px`,C):t(9,C.style.top=`${m.bottom+f}px`,C),t(9,C.style.left=`${w}px`,C),C.setAttribute("data-floating",F?"top":"bottom"),se){const G=se.getBoundingClientRect();t(10,se.style.left=m.left-w+m.width/2-G.width/2+"px",se)}}else v("unable to find floating anchor element")}async function En(i){if(!ie)throw new Error("Attribute verifyurl not set.");v("requesting server verification from",ie);const f={payload:i};if(E){const{blockedCountries:W,classifier:O,disableRules:F,email:w,expectedLanguages:G,expectedCountries:Me,fields:ve,ipAddress:ke,text:In,timeZone:Ct}=mn();f.blockedCountries=W,f.classifier=O,f.disableRules=F,f.email=w===!1?void 0:gn(w),f.expectedCountries=Me,f.expectedLanguages=G||(it?[it]:void 0),f.fields=ve===!1?void 0:bn(ve),f.ipAddress=ke===!1?void 0:ke||"auto",f.text=In,f.timeZone=Ct===!1?void 0:Ct||en()}const m=await fetch(ie,{body:JSON.stringify(f),headers:{"content-type":"application/json"},method:"POST"});if(m.status!==200)throw new Error(`Server responded with ${m.status}.`);const I=await m.json();if(I!=null&&I.payload&&t(6,fe=I.payload),_e("serververification",I),A&&I.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function Re(i){v("expire",i),J&&(clearTimeout(J),J=null),i<1?ot():J=setTimeout(ot,i)}function dt(i){v("floating",i),L!==i&&(t(9,C.style.left="",C),t(9,C.style.top="",C)),t(1,L=i===!0||i===""?"auto":i===!1||i==="false"?void 0:L),L?(u||t(0,u="onsubmit"),document.addEventListener("scroll",st),document.addEventListener("click",lt),window.addEventListener("resize",ht)):u==="onsubmit"&&t(0,u=void 0)}function gt(i){if(!i.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(i.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!nt.includes(i.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${nt.join(", ")}`);if(!i.challenge||i.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!i.salt||i.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function mt(i){let f=null;if("Worker"in window){try{f=await vn(i,i.maxnumber)}catch(m){v(m)}if((f==null?void 0:f.number)!==void 0||"obfuscated"in i)return{data:i,solution:f}}if("obfuscated"in i){const m=await rn(i.obfuscated,i.key,i.maxnumber);return{data:i,solution:await m.promise}}return{data:i,solution:await Qt(i.challenge,i.salt,i.algorithm,i.maxnumber||X).promise}}async function vn(i,f=typeof b=="number"?b:X,m=Math.ceil(he)){const I=[];m=Math.min(16,Math.max(1,m));for(let F=0;F<m;F++)I.push(altchaCreateWorker(ye));const W=Math.ceil(f/m),O=await Promise.all(I.map((F,w)=>{const G=w*W;return new Promise(Me=>{F.addEventListener("message",ve=>{if(ve.data)for(const ke of I)ke!==F&&ke.postMessage({type:"abort"});Me(ve.data)}),F.postMessage({payload:i,max:G+W,start:G,type:"work"})})}));for(const F of I)F.terminate();return O.find(F=>!!F)||null}async function pe(){if(!k){t(7,x=g.ERROR);return}const i=re.find(f=>f.constructor.pluginName==="obfuscation");if(!i||!("clarify"in i)){t(7,x=g.ERROR),v("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");return}if("clarify"in i&&typeof i.clarify=="function")return i.clarify()}function bt(i){i.obfuscated!==void 0&&t(24,k=i.obfuscated),i.auto!==void 0&&(t(0,u=i.auto),u==="onload"&&(k?pe():oe())),i.blockspam!==void 0&&t(16,A=!!i.blockspam),i.floatinganchor!==void 0&&t(20,ee=i.floatinganchor),i.delay!==void 0&&t(18,Z=i.delay),i.floatingoffset!==void 0&&t(21,te=i.floatingoffset),i.floating!==void 0&&dt(i.floating),i.expire!==void 0&&(Re(i.expire),t(19,T=i.expire)),i.challenge&&(gt(i.challenge),o=i.challenge),i.challengeurl!==void 0&&t(15,_=i.challengeurl),i.debug!==void 0&&t(17,q=!!i.debug),i.hidefooter!==void 0&&t(2,N=!!i.hidefooter),i.hidelogo!==void 0&&t(3,D=!!i.hidelogo),i.maxnumber!==void 0&&t(22,X=+i.maxnumber),i.mockerror!==void 0&&t(23,V=!!i.mockerror),i.name!==void 0&&t(4,ne=i.name),i.refetchonexpire!==void 0&&t(25,S=!!i.refetchonexpire),i.spamfilter!==void 0&&t(26,E=typeof i.spamfilter=="object"?i.spamfilter:!!i.spamfilter),i.strings&&t(44,l=i.strings),i.test!==void 0&&t(27,b=typeof i.test=="number"?i.test:!!i.test),i.verifyurl!==void 0&&t(28,ie=i.verifyurl),i.workers!==void 0&&t(29,he=+i.workers),i.workerurl!==void 0&&t(30,ye=i.workerurl)}function yt(){return{auto:u,blockspam:A,challengeurl:_,debug:q,delay:Z,expire:T,floating:L,floatinganchor:ee,floatingoffset:te,hidefooter:N,hidelogo:D,name:ne,maxnumber:X,mockerror:V,obfuscated:k,refetchonexpire:S,spamfilter:E,strings:s,test:b,verifyurl:ie,workers:he,workerurl:ye}}function _t(){return de}function kn(i){return re.find(f=>f.constructor.pluginName===i)}function wt(){return x}function Ee(i=g.UNVERIFIED,f=null){J&&(clearTimeout(J),J=null),t(8,le=!1),t(5,we=f),t(6,fe=null),t(7,x=i)}function pt(i){de=i}function Et(i,f=null){t(7,x=i),t(5,we=f)}async function oe(){return Ee(g.VERIFYING),await new Promise(i=>setTimeout(i,Z||0)),dn().then(i=>(gt(i),v("challenge",i),mt(i))).then(({data:i,solution:f})=>{if(v("solution",f),"challenge"in i&&f&&!("clearText"in f))if((f==null?void 0:f.number)!==void 0){if(ie)return En(rt(i,f));t(6,fe=rt(i,f)),v("payload",fe)}else throw v("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{t(7,x=g.VERIFIED),v("verified"),Ut().then(()=>{_e("verified",{payload:fe})})}).catch(i=>{v(i),t(7,x=g.ERROR),t(5,we=i.message)})}function Cn(){le=this.checked,t(8,le)}function xn(i){Ce[i?"unshift":"push"](()=>{se=i,t(10,se)})}function An(i){Ce[i?"unshift":"push"](()=>{C=i,t(9,C)})}return n.$$set=i=>{"auto"in i&&t(0,u=i.auto),"blockspam"in i&&t(16,A=i.blockspam),"challengeurl"in i&&t(15,_=i.challengeurl),"challengejson"in i&&t(31,B=i.challengejson),"debug"in i&&t(17,q=i.debug),"delay"in i&&t(18,Z=i.delay),"expire"in i&&t(19,T=i.expire),"floating"in i&&t(1,L=i.floating),"floatinganchor"in i&&t(20,ee=i.floatinganchor),"floatingoffset"in i&&t(21,te=i.floatingoffset),"hidefooter"in i&&t(2,N=i.hidefooter),"hidelogo"in i&&t(3,D=i.hidelogo),"name"in i&&t(4,ne=i.name),"maxnumber"in i&&t(22,X=i.maxnumber),"mockerror"in i&&t(23,V=i.mockerror),"obfuscated"in i&&t(24,k=i.obfuscated),"plugins"in i&&t(32,P=i.plugins),"refetchonexpire"in i&&t(25,S=i.refetchonexpire),"spamfilter"in i&&t(26,E=i.spamfilter),"strings"in i&&t(33,a=i.strings),"test"in i&&t(27,b=i.test),"verifyurl"in i&&t(28,ie=i.verifyurl),"workers"in i&&t(29,he=i.workers),"workerurl"in i&&t(30,ye=i.workerurl),"$$scope"in i&&t(45,d=i.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&32768|n.$$.dirty[1]&1&&t(12,r=B&&new URL(B,location.origin).host.endsWith(".altcha.org")&&!!(_!=null&&_.includes("apiKey=ckey_"))),n.$$.dirty[1]&1&&(o=B?et(B):void 0),n.$$.dirty[1]&4&&t(44,l=a?et(a):{}),n.$$.dirty[1]&8192&&t(11,s={ariaLinkLabel:Ke,error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${Qe}" target="_blank" aria-label="${l.ariaLinkLabel||Ke}">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...l}),n.$$.dirty[0]&192&&_e("statechange",{payload:fe,state:x}),n.$$.dirty[0]&32&&wn(),n.$$.dirty[0]&128&&pn()},[u,L,N,D,ne,we,fe,x,le,C,se,s,r,_n,at,_,A,q,Z,T,ee,te,X,V,k,S,E,b,ie,he,ye,B,P,a,pe,bt,yt,_t,kn,wt,Ee,pt,Et,oe,l,d,h,Cn,xn,An]}class tt extends Xt{constructor(e){super(),Gt(this,e,an,un,At,{auto:0,blockspam:16,challengeurl:15,challengejson:31,debug:17,delay:18,expire:19,floating:1,floatinganchor:20,floatingoffset:21,hidefooter:2,hidelogo:3,name:4,maxnumber:22,mockerror:23,obfuscated:24,plugins:32,refetchonexpire:25,spamfilter:26,strings:33,test:27,verifyurl:28,workers:29,workerurl:30,clarify:34,configure:35,getConfiguration:36,getFloatingAnchor:37,getPlugin:38,getState:39,reset:40,setFloatingAnchor:41,setState:42,verify:43},null,[-1,-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),p()}get blockspam(){return this.$$.ctx[16]}set blockspam(e){this.$$set({blockspam:e}),p()}get challengeurl(){return this.$$.ctx[15]}set challengeurl(e){this.$$set({challengeurl:e}),p()}get challengejson(){return this.$$.ctx[31]}set challengejson(e){this.$$set({challengejson:e}),p()}get debug(){return this.$$.ctx[17]}set debug(e){this.$$set({debug:e}),p()}get delay(){return this.$$.ctx[18]}set delay(e){this.$$set({delay:e}),p()}get expire(){return this.$$.ctx[19]}set expire(e){this.$$set({expire:e}),p()}get floating(){return this.$$.ctx[1]}set floating(e){this.$$set({floating:e}),p()}get floatinganchor(){return this.$$.ctx[20]}set floatinganchor(e){this.$$set({floatinganchor:e}),p()}get floatingoffset(){return this.$$.ctx[21]}set floatingoffset(e){this.$$set({floatingoffset:e}),p()}get hidefooter(){return this.$$.ctx[2]}set hidefooter(e){this.$$set({hidefooter:e}),p()}get hidelogo(){return this.$$.ctx[3]}set hidelogo(e){this.$$set({hidelogo:e}),p()}get name(){return this.$$.ctx[4]}set name(e){this.$$set({name:e}),p()}get maxnumber(){return this.$$.ctx[22]}set maxnumber(e){this.$$set({maxnumber:e}),p()}get mockerror(){return this.$$.ctx[23]}set mockerror(e){this.$$set({mockerror:e}),p()}get obfuscated(){return this.$$.ctx[24]}set obfuscated(e){this.$$set({obfuscated:e}),p()}get plugins(){return this.$$.ctx[32]}set plugins(e){this.$$set({plugins:e}),p()}get refetchonexpire(){return this.$$.ctx[25]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),p()}get spamfilter(){return this.$$.ctx[26]}set spamfilter(e){this.$$set({spamfilter:e}),p()}get strings(){return this.$$.ctx[33]}set strings(e){this.$$set({strings:e}),p()}get test(){return this.$$.ctx[27]}set test(e){this.$$set({test:e}),p()}get verifyurl(){return this.$$.ctx[28]}set verifyurl(e){this.$$set({verifyurl:e}),p()}get workers(){return this.$$.ctx[29]}set workers(e){this.$$set({workers:e}),p()}get workerurl(){return this.$$.ctx[30]}set workerurl(e){this.$$set({workerurl:e}),p()}get clarify(){return this.$$.ctx[34]}get configure(){return this.$$.ctx[35]}get getConfiguration(){return this.$$.ctx[36]}get getFloatingAnchor(){return this.$$.ctx[37]}get getPlugin(){return this.$$.ctx[38]}get getState(){return this.$$.ctx[39]}get reset(){return this.$$.ctx[40]}get setFloatingAnchor(){return this.$$.ctx[41]}get setState(){return this.$$.ctx[42]}get verify(){return this.$$.ctx[43]}}customElements.define("altcha-widget",Yt(tt,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},delay:{},expire:{},floating:{},floatinganchor:{},floatingoffset:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},obfuscated:{},plugins:{},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{},workerurl:{}},["default"],["clarify","configure","getConfiguration","getFloatingAnchor","getPlugin","getState","reset","setFloatingAnchor","setState","verify"],!1)),globalThis.altchaCreateWorker=n=>new Worker(new URL(n||"./worker.js",typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:U&&U.tagName.toUpperCase()==="SCRIPT"&&U.src||new URL("altcha.umd.cjs",document.baseURI).href)),globalThis.altchaPlugins=globalThis.altchaPlugins||[],H.Altcha=tt,Object.defineProperty(H,Symbol.toStringTag,{value:"Module"})});
