(function(D,F){typeof exports=="object"&&typeof module<"u"?F(exports):typeof define=="function"&&define.amd?define(["exports"],F):(D=typeof globalThis<"u"?globalThis:D||self,F(D.altcha={}))})(this,function(D){"use strict";var Vn=Object.defineProperty;var Gn=(D,F,ce)=>F in D?Vn(D,F,{enumerable:!0,configurable:!0,writable:!0,value:ce}):D[F]=ce;var K=(D,F,ce)=>Gn(D,typeof F!="symbol"?F+"":F,ce);const F="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiB3KGUsdCxyKXtyZXR1cm4gcChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChyLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGIoZSx0LHI9IlNIQS0yNTYiLG49MWU2LHM9MCl7Y29uc3Qgbz1uZXcgQWJvcnRDb250cm9sbGVyLGE9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgYz1zO2M8PW47Yys9MSl7aWYoby5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCB3KHQsYyxyKT09PWUpcmV0dXJue251bWJlcjpjLHRvb2s6RGF0ZS5ub3coKS1hfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjpvfX1mdW5jdGlvbiBoKGUpe2NvbnN0IHQ9YXRvYihlKSxyPW5ldyBVaW50OEFycmF5KHQubGVuZ3RoKTtmb3IobGV0IG49MDtuPHQubGVuZ3RoO24rKylyW25dPXQuY2hhckNvZGVBdChuKTtyZXR1cm4gcn1mdW5jdGlvbiBnKGUsdD0xMil7Y29uc3Qgcj1uZXcgVWludDhBcnJheSh0KTtmb3IobGV0IG49MDtuPHQ7bisrKXJbbl09ZSUyNTYsZT1NYXRoLmZsb29yKGUvMjU2KTtyZXR1cm4gcn1hc3luYyBmdW5jdGlvbiBtKGUsdD0iIixyPTFlNixuPTApe2NvbnN0IHM9IkFFUy1HQ00iLG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCksbD1hc3luYygpPT57Zm9yKGxldCB1PW47dTw9cjt1Kz0xKXtpZihvLnNpZ25hbC5hYm9ydGVkfHwhY3x8IXkpcmV0dXJuIG51bGw7dHJ5e2NvbnN0IGQ9YXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KHtuYW1lOnMsaXY6Zyh1KX0sYyx5KTtpZihkKXJldHVybntjbGVhclRleHQ6bmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGQpLHRvb2s6RGF0ZS5ub3coKS1hfX1jYXRjaHt9fXJldHVybiBudWxsfTtsZXQgYz1udWxsLHk9bnVsbDt0cnl7eT1oKGUpO2NvbnN0IHU9YXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoIlNIQS0yNTYiLGYuZW5jb2RlKHQpKTtjPWF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCJyYXciLHUscywhMSxbImRlY3J5cHQiXSl9Y2F0Y2h7cmV0dXJue3Byb21pc2U6UHJvbWlzZS5yZWplY3QoKSxjb250cm9sbGVyOm99fXJldHVybntwcm9taXNlOmwoKSxjb250cm9sbGVyOm99fWxldCBpO29ubWVzc2FnZT1hc3luYyBlPT57Y29uc3R7dHlwZTp0LHBheWxvYWQ6cixzdGFydDpuLG1heDpzfT1lLmRhdGE7bGV0IG89bnVsbDtpZih0PT09ImFib3J0IilpPT1udWxsfHxpLmFib3J0KCksaT12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtpZigib2JmdXNjYXRlZCJpbiByKXtjb25zdHtrZXk6YSxvYmZ1c2NhdGVkOmx9PXJ8fHt9O289YXdhaXQgbShsLGEscyxuKX1lbHNle2NvbnN0e2FsZ29yaXRobTphLGNoYWxsZW5nZTpsLHNhbHQ6Y309cnx8e307bz1iKGwsYyxhLHMsbil9aT1vLmNvbnRyb2xsZXIsby5wcm9taXNlLnRoZW4oYT0+e3NlbGYucG9zdE1lc3NhZ2UoYSYmey4uLmEsd29ya2VyOiEwfSl9KX19fSkoKTsK",ce=n=>Uint8Array.from(atob(n),e=>e.charCodeAt(0)),Ge=typeof self<"u"&&self.Blob&&new Blob([ce(F)],{type:"text/javascript;charset=utf-8"});function It(n){let e;try{if(e=Ge&&(self.URL||self.webkitURL).createObjectURL(Ge),!e)throw"";const t=new Worker(e,{name:n==null?void 0:n.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+F,{name:n==null?void 0:n.name})}finally{e&&(self.URL||self.webkitURL).revokeObjectURL(e)}}function Ee(){}function Lt(n,e){for(const t in e)n[t]=e[t];return n}function He(n){return n()}function Ye(){return Object.create(null)}function ge(n){n.forEach(He)}function Xe(n){return typeof n=="function"}function Nt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function zt(n){return Object.keys(n).length===0}function St(n,e,t,i){if(n){const o=Fe(n,e,t,i);return n[0](o)}}function Fe(n,e,t,i){return n[1]&&i?Lt(t.ctx.slice(),n[1](i(e))):t.ctx}function Tt(n,e,t,i){if(n[2]&&i){const o=n[2](i(t));if(e.dirty===void 0)return o;if(typeof o=="object"){const l=[],s=Math.max(e.dirty.length,o.length);for(let d=0;d<s;d+=1)l[d]=e.dirty[d]|o[d];return l}return e.dirty|o}return e.dirty}function At(n,e,t,i,o,l){if(o){const s=Fe(e,t,i,l);n.p(s,o)}}function Zt(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function C(n,e){n.appendChild(e)}function Vt(n,e,t){const i=Gt(n);if(!i.getElementById(e)){const o=S("style");o.id=e,o.textContent=t,Ht(i,o)}}function Gt(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Ht(n,e){return C(n.head||n,e),e.sheet}function X(n,e,t){n.insertBefore(e,t||null)}function H(n){n.parentNode&&n.parentNode.removeChild(n)}function S(n){return document.createElement(n)}function $(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Yt(n){return document.createTextNode(n)}function Q(){return Yt(" ")}function ze(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function a(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Xt(n){return Array.from(n.childNodes)}function je(n,e,t){n.classList.toggle(e,!!t)}function Ft(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}function jt(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let me;function be(n){me=n}function Se(){if(!me)throw new Error("Function called outside component initialization");return me}function Dt(n){Se().$$.on_mount.push(n)}function Pt(n){Se().$$.on_destroy.push(n)}function Wt(){const n=Se();return(e,t,{cancelable:i=!1}={})=>{const o=n.$$.callbacks[e];if(o){const l=Ft(e,t,{cancelable:i});return o.slice().forEach(s=>{s.call(n,l)}),!l.defaultPrevented}return!0}}const ae=[],Re=[];let fe=[];const De=[],Pe=Promise.resolve();let Te=!1;function We(){Te||(Te=!0,Pe.then(w))}function Mt(){return We(),Pe}function Ae(n){fe.push(n)}const Ze=new Set;let ue=0;function w(){if(ue!==0)return;const n=me;do{try{for(;ue<ae.length;){const e=ae[ue];ue++,be(e),Ut(e.$$)}}catch(e){throw ae.length=0,ue=0,e}for(be(null),ae.length=0,ue=0;Re.length;)Re.pop()();for(let e=0;e<fe.length;e+=1){const t=fe[e];Ze.has(t)||(Ze.add(t),t())}fe.length=0}while(ae.length);for(;De.length;)De.pop()();Te=!1,Ze.clear(),be(n)}function Ut(n){if(n.fragment!==null){n.update(),ge(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ae)}}function Kt(n){const e=[],t=[];fe.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),fe=e}const Ce=new Set;let Bt;function Me(n,e){n&&n.i&&(Ce.delete(n),n.i(e))}function Ot(n,e,t,i){if(n&&n.o){if(Ce.has(n))return;Ce.add(n),Bt.c.push(()=>{Ce.delete(n)}),n.o(e)}}function Jt(n,e,t){const{fragment:i,after_update:o}=n.$$;i&&i.m(e,t),Ae(()=>{const l=n.$$.on_mount.map(He).filter(Xe);n.$$.on_destroy?n.$$.on_destroy.push(...l):ge(l),n.$$.on_mount=[]}),o.forEach(Ae)}function $t(n,e){const t=n.$$;t.fragment!==null&&(Kt(t.after_update),ge(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Qt(n,e){n.$$.dirty[0]===-1&&(ae.push(n),We(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function qt(n,e,t,i,o,l,s=null,d=[-1]){const h=me;be(n);const f=n.$$={fragment:null,ctx:[],props:l,update:Ee,not_equal:o,bound:Ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:Ye(),dirty:d,skip_bound:!1,root:e.target||h.$$.root};s&&s(f.root);let I=!1;if(f.ctx=t?t(n,e.props||{},(b,O,...P)=>{const W=P.length?P[0]:O;return f.ctx&&o(f.ctx[b],f.ctx[b]=W)&&(!f.skip_bound&&f.bound[b]&&f.bound[b](W),I&&Qt(n,b)),O}):[],f.update(),I=!0,ge(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){const b=Xt(e.target);f.fragment&&f.fragment.l(b),b.forEach(H)}else f.fragment&&f.fragment.c();e.intro&&Me(n.$$.fragment),Jt(n,e.target,e.anchor),w()}be(h)}let Ue;typeof HTMLElement=="function"&&(Ue=class extends HTMLElement{constructor(e,t,i){super();K(this,"$$ctor");K(this,"$$s");K(this,"$$c");K(this,"$$cn",!1);K(this,"$$d",{});K(this,"$$r",!1);K(this,"$$p_d",{});K(this,"$$l",{});K(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,i&&this.attachShadow({mode:"open"})}addEventListener(e,t,i){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const o=this.$$c.$on(e,t);this.$$l_u.set(t,o)}super.addEventListener(e,t,i)}removeEventListener(e,t,i){if(super.removeEventListener(e,t,i),this.$$c){const o=this.$$l_u.get(t);o&&(o(),this.$$l_u.delete(t))}if(this.$$l[e]){const o=this.$$l[e].indexOf(t);o>=0&&this.$$l[e].splice(o,1)}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(l){return()=>{let s;return{c:function(){s=S("slot"),l!=="default"&&a(s,"name",l)},m:function(f,I){X(f,s,I)},d:function(f){f&&H(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},i=jt(this);for(const l of this.$$s)l in i&&(t[l]=[e(l)]);for(const l of this.attributes){const s=this.$$g_p(l.name);s in this.$$d||(this.$$d[s]=Ie(s,l.value,this.$$p_d,"toProp"))}for(const l in this.$$p_d)!(l in this.$$d)&&this[l]!==void 0&&(this.$$d[l]=this[l],delete this[l]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const l in this.$$p_d)if(this.$$d[l]=this.$$c.$$.ctx[this.$$c.$$.props[l]],this.$$p_d[l].reflect){const s=Ie(l,this.$$d[l],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,s)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const l in this.$$l)for(const s of this.$$l[l]){const d=this.$$c.$on(l,s);this.$$l_u.set(s,d)}this.$$l={}}}attributeChangedCallback(e,t,i){var o;this.$$r||(e=this.$$g_p(e),this.$$d[e]=Ie(e,i,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function Ie(n,e,t,i){var l;const o=(l=t[n])==null?void 0:l.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!t[n])return e;if(i==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function en(n,e,t,i,o,l){let s=class extends Ue{constructor(){super(n,t,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(d=>(e[d].attribute||d).toLowerCase())}};return Object.keys(e).forEach(d=>{Object.defineProperty(s.prototype,d,{get(){return this.$$c&&d in this.$$c?this.$$c[d]:this.$$d[d]},set(h){var f;h=Ie(d,h,e),this.$$d[d]=h,(f=this.$$c)==null||f.$set({[d]:h})}})}),i.forEach(d=>{Object.defineProperty(s.prototype,d,{get(){var h;return(h=this.$$c)==null?void 0:h[d]}})}),n.element=s,s}class tn{constructor(){K(this,"$$");K(this,"$$set")}$destroy(){$t(this,1),this.$destroy=Ee}$on(e,t){if(!Xe(t))return Ee;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!zt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nn);const Ke=new TextEncoder;function rn(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function on(n,e="SHA-256",t=1e5){const i=Date.now().toString(16);n||(n=Math.round(Math.random()*t));const o=await Be(i,n,e);return{algorithm:e,challenge:o,salt:i,signature:""}}async function Be(n,e,t){return rn(await crypto.subtle.digest(t.toUpperCase(),Ke.encode(n+e)))}function ln(n,e,t="SHA-256",i=1e6,o=0){const l=new AbortController,s=Date.now();return{promise:(async()=>{for(let h=o;h<=i;h+=1){if(l.signal.aborted)return null;if(await Be(e,h,t)===n)return{number:h,took:Date.now()-s}}return null})(),controller:l}}function sn(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function cn(n){const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}function an(n,e=12){const t=new Uint8Array(e);for(let i=0;i<e;i++)t[i]=n%256,n=Math.floor(n/256);return t}async function fn(n,e="",t=1e6,i=0){const o="AES-GCM",l=new AbortController,s=Date.now(),d=async()=>{for(let I=i;I<=t;I+=1){if(l.signal.aborted||!h||!f)return null;try{const b=await crypto.subtle.decrypt({name:o,iv:an(I)},h,f);if(b)return{clearText:new TextDecoder().decode(b),took:Date.now()-s}}catch{}}return null};let h=null,f=null;try{f=cn(n);const I=await crypto.subtle.digest("SHA-256",Ke.encode(e));h=await crypto.subtle.importKey("raw",I,o,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:l}}return{promise:d(),controller:l}}var g=(n=>(n.ERROR="error",n.VERIFIED="verified",n.VERIFYING="verifying",n.UNVERIFIED="unverified",n.EXPIRED="expired",n))(g||{});function un(n){Vt(n,"svelte-ddsc3z",'.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}')}function Oe(n){let e,t,i;return{c(){e=$("svg"),t=$("path"),i=$("path"),a(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),a(t,"fill","currentColor"),a(t,"opacity",".25"),a(i,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),a(i,"fill","currentColor"),a(i,"class","altcha-spinner svelte-ddsc3z"),a(e,"width","24"),a(e,"height","24"),a(e,"viewBox","0 0 24 24"),a(e,"xmlns","http://www.w3.org/2000/svg")},m(o,l){X(o,e,l),C(e,t),C(e,i)},d(o){o&&H(e)}}}function dn(n){let e,t=n[11].label+"",i;return{c(){e=S("label"),a(e,"for",i=n[4]+"_checkbox"),a(e,"class","svelte-ddsc3z")},m(o,l){X(o,e,l),e.innerHTML=t},p(o,l){l[0]&2048&&t!==(t=o[11].label+"")&&(e.innerHTML=t),l[0]&16&&i!==(i=o[4]+"_checkbox")&&a(e,"for",i)},d(o){o&&H(e)}}}function hn(n){let e,t=n[11].verifying+"";return{c(){e=S("span")},m(i,o){X(i,e,o),e.innerHTML=t},p(i,o){o[0]&2048&&t!==(t=i[11].verifying+"")&&(e.innerHTML=t)},d(i){i&&H(e)}}}function gn(n){let e,t=n[11].verified+"",i,o;return{c(){e=S("span"),i=Q(),o=S("input"),a(o,"type","hidden"),a(o,"name",n[4]),o.value=n[6]},m(l,s){X(l,e,s),e.innerHTML=t,X(l,i,s),X(l,o,s)},p(l,s){s[0]&2048&&t!==(t=l[11].verified+"")&&(e.innerHTML=t),s[0]&16&&a(o,"name",l[4]),s[0]&64&&(o.value=l[6])},d(l){l&&(H(e),H(i),H(o))}}}function Je(n){let e,t,i,o,l,s,d;return{c(){e=S("div"),t=S("a"),i=$("svg"),o=$("path"),l=$("path"),s=$("path"),a(o,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),a(o,"fill","currentColor"),a(l,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),a(l,"fill","currentColor"),a(s,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),a(s,"fill","currentColor"),a(i,"width","22"),a(i,"height","22"),a(i,"viewBox","0 0 20 20"),a(i,"fill","none"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(t,"href",tt),a(t,"target","_blank"),a(t,"class","altcha-logo svelte-ddsc3z"),a(t,"aria-label",d=n[11].ariaLinkLabel)},m(h,f){X(h,e,f),C(e,t),C(t,i),C(i,o),C(i,l),C(i,s)},p(h,f){f[0]&2048&&d!==(d=h[11].ariaLinkLabel)&&a(t,"aria-label",d)},d(h){h&&H(e)}}}function $e(n){let e,t,i,o;function l(h,f){return h[7]===g.EXPIRED?bn:mn}let s=l(n),d=s(n);return{c(){e=S("div"),t=$("svg"),i=$("path"),o=Q(),d.c(),a(i,"stroke-linecap","round"),a(i,"stroke-linejoin","round"),a(i,"d","M6 18L18 6M6 6l12 12"),a(t,"width","14"),a(t,"height","14"),a(t,"xmlns","http://www.w3.org/2000/svg"),a(t,"fill","none"),a(t,"viewBox","0 0 24 24"),a(t,"stroke-width","1.5"),a(t,"stroke","currentColor"),a(e,"class","altcha-error svelte-ddsc3z")},m(h,f){X(h,e,f),C(e,t),C(t,i),C(e,o),d.m(e,null)},p(h,f){s===(s=l(h))&&d?d.p(h,f):(d.d(1),d=s(h),d&&(d.c(),d.m(e,null)))},d(h){h&&H(e),d.d()}}}function mn(n){let e,t=n[11].error+"";return{c(){e=S("div"),a(e,"title",n[5])},m(i,o){X(i,e,o),e.innerHTML=t},p(i,o){o[0]&2048&&t!==(t=i[11].error+"")&&(e.innerHTML=t),o[0]&32&&a(e,"title",i[5])},d(i){i&&H(e)}}}function bn(n){let e,t=n[11].expired+"";return{c(){e=S("div"),a(e,"title",n[5])},m(i,o){X(i,e,o),e.innerHTML=t},p(i,o){o[0]&2048&&t!==(t=i[11].expired+"")&&(e.innerHTML=t),o[0]&32&&a(e,"title",i[5])},d(i){i&&H(e)}}}function Qe(n){let e,t,i=n[11].footer+"";return{c(){e=S("div"),t=S("div"),a(t,"class","svelte-ddsc3z"),a(e,"class","altcha-footer svelte-ddsc3z")},m(o,l){X(o,e,l),C(e,t),t.innerHTML=i},p(o,l){l[0]&2048&&i!==(i=o[11].footer+"")&&(t.innerHTML=i)},d(o){o&&H(e)}}}function qe(n){let e;return{c(){e=S("div"),a(e,"class","altcha-anchor-arrow svelte-ddsc3z")},m(t,i){X(t,e,i),n[48](e)},p:Ee,d(t){t&&H(e),n[48](null)}}}function yn(n){let e,t,i,o,l,s,d,h,f,I,b,O,P,W,T,N,q;const ee=n[46].default,G=St(ee,n,n[45],null);let A=n[7]===g.VERIFYING&&Oe();function te(u,y){return u[7]===g.VERIFIED?gn:u[7]===g.VERIFYING?hn:dn}let B=te(n),Y=B(n),x=(n[3]!==!0||n[12])&&Je(n),Z=(n[5]||n[7]===g.EXPIRED)&&$e(n),z=n[11].footer&&(n[2]!==!0||n[12])&&Qe(n),_=n[1]&&qe(n);return{c(){G&&G.c(),e=Q(),t=S("div"),i=S("div"),A&&A.c(),o=Q(),l=S("div"),s=S("input"),f=Q(),I=S("div"),Y.c(),b=Q(),x&&x.c(),O=Q(),Z&&Z.c(),P=Q(),z&&z.c(),W=Q(),_&&_.c(),a(s,"type","checkbox"),a(s,"id",d=n[4]+"_checkbox"),s.required=h=n[0]!=="onsubmit"&&(!n[1]||n[0]!=="off"),a(s,"class","svelte-ddsc3z"),a(l,"class","altcha-checkbox svelte-ddsc3z"),je(l,"altcha-hidden",n[7]===g.VERIFYING),a(I,"class","altcha-label svelte-ddsc3z"),a(i,"class","altcha-main svelte-ddsc3z"),a(t,"class","altcha svelte-ddsc3z"),a(t,"data-state",n[7]),a(t,"data-floating",n[1])},m(u,y){G&&G.m(u,y),X(u,e,y),X(u,t,y),C(t,i),A&&A.m(i,null),C(i,o),C(i,l),C(l,s),s.checked=n[8],C(i,f),C(i,I),Y.m(I,null),C(i,b),x&&x.m(i,null),C(t,O),Z&&Z.m(t,null),C(t,P),z&&z.m(t,null),C(t,W),_&&_.m(t,null),n[49](t),T=!0,N||(q=[ze(s,"change",n[47]),ze(s,"change",n[13]),ze(s,"invalid",n[14])],N=!0)},p(u,y){G&&G.p&&(!T||y[1]&16384)&&At(G,ee,u,u[45],T?Tt(ee,u[45],y,null):Zt(u[45]),null),u[7]===g.VERIFYING?A||(A=Oe(),A.c(),A.m(i,o)):A&&(A.d(1),A=null),(!T||y[0]&16&&d!==(d=u[4]+"_checkbox"))&&a(s,"id",d),(!T||y[0]&3&&h!==(h=u[0]!=="onsubmit"&&(!u[1]||u[0]!=="off")))&&(s.required=h),y[0]&256&&(s.checked=u[8]),(!T||y[0]&128)&&je(l,"altcha-hidden",u[7]===g.VERIFYING),B===(B=te(u))&&Y?Y.p(u,y):(Y.d(1),Y=B(u),Y&&(Y.c(),Y.m(I,null))),u[3]!==!0||u[12]?x?x.p(u,y):(x=Je(u),x.c(),x.m(i,null)):x&&(x.d(1),x=null),u[5]||u[7]===g.EXPIRED?Z?Z.p(u,y):(Z=$e(u),Z.c(),Z.m(t,P)):Z&&(Z.d(1),Z=null),u[11].footer&&(u[2]!==!0||u[12])?z?z.p(u,y):(z=Qe(u),z.c(),z.m(t,W)):z&&(z.d(1),z=null),u[1]?_?_.p(u,y):(_=qe(u),_.c(),_.m(t,null)):_&&(_.d(1),_=null),(!T||y[0]&128)&&a(t,"data-state",u[7]),(!T||y[0]&2)&&a(t,"data-floating",u[1])},i(u){T||(Me(G,u),T=!0)},o(u){Ot(G,u),T=!1},d(u){u&&(H(e),H(t)),G&&G.d(u),A&&A.d(),Y.d(),x&&x.d(),Z&&Z.d(),z&&z.d(),_&&_.d(),n[49](null),N=!1,ge(q)}}}const et="Visit Altcha.org",tt="https://altcha.org/";function nt(n){return JSON.parse(n)}function vn(n,e,t){var Et,Rt;let i,o,l,s,{$$slots:d={},$$scope:h}=e,{auto:f=void 0}=e,{blockspam:I=void 0}=e,{challengeurl:b=void 0}=e,{challengejson:O=void 0}=e,{debug:P=!1}=e,{delay:W=0}=e,{expire:T=void 0}=e,{floating:N=void 0}=e,{floatinganchor:q=void 0}=e,{floatingoffset:ee=void 0}=e,{hidefooter:G=!1}=e,{hidelogo:A=!1}=e,{name:te="altcha"}=e,{maxnumber:B=1e6}=e,{mockerror:Y=!1}=e,{obfuscated:x=void 0}=e,{plugins:Z=void 0}=e,{refetchonexpire:z=!0}=e,{spamfilter:_=!1}=e,{strings:u=void 0}=e,{test:y=!1}=e,{verifyurl:ne=void 0}=e,{workers:de=Math.min(16,navigator.hardwareConcurrency||8)}=e,{workerurl:ye=void 0}=e;const ve=Wt(),it=["SHA-256","SHA-384","SHA-512"],ot=(Rt=(Et=document.documentElement.lang)==null?void 0:Et.split("-"))==null?void 0:Rt[0];let oe=!1,E,le=null,he=null,v=null,pe=null,J=null,se=null,re=[],R=g.UNVERIFIED;Pt(()=>{pn(),v&&(v.removeEventListener("submit",ut),v.removeEventListener("reset",dt),v.removeEventListener("focusin",ft),v=null),J&&(clearTimeout(J),J=null),document.removeEventListener("click",ct),document.removeEventListener("scroll",at),window.removeEventListener("resize",gt)}),Dt(()=>{k("mounted","1.0.6"),k("workers",de),En(),k("plugins",re.length?re.map(r=>r.constructor.pluginName).join(", "):"none"),y&&k("using test mode"),T&&Ne(T),f!==void 0&&k("auto",f),N!==void 0&&mt(N),v=E.closest("form"),v&&(v.addEventListener("submit",ut,{capture:!0}),v.addEventListener("reset",dt),f==="onfocus"&&v.addEventListener("focusin",ft)),f==="onload"&&(x?we():ie()),i&&(G||A)&&k("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."),requestAnimationFrame(()=>{ve("load")})});function lt(r,c){return btoa(JSON.stringify({algorithm:r.algorithm,challenge:r.challenge,number:c.number,salt:r.salt,signature:r.signature,test:y?!0:void 0,took:c.took}))}function pn(){for(const r of re)r.destroy()}function st(){b&&z&&R===g.VERIFIED?ie():_e(g.EXPIRED,s.expired)}async function wn(){var r;if(Y)throw k("mocking error"),new Error("Mocked error.");if(o)return k("using provided json data"),o;if(y)return k("generating test challenge",{test:y}),on(typeof y!="boolean"?+y:void 0);{if(!b&&v){const p=v.getAttribute("action");p!=null&&p.includes("/form/")&&t(15,b=p+"/altcha")}if(!b)throw new Error("Attribute challengeurl not set.");k("fetching challenge from",b);const c=await fetch(b,{headers:_?{"x-altcha-spam-filter":"1"}:{}});if(c.status!==200)throw new Error(`Server responded with ${c.status}.`);const m=c.headers.get("Expires"),L=c.headers.get("X-Altcha-Config"),M=await c.json(),j=new URLSearchParams((r=M.salt.split("?"))==null?void 0:r[1]),V=j.get("expires")||j.get("expire");if(V){const p=new Date(+V*1e3),U=isNaN(p.getTime())?0:p.getTime()-Date.now();U>0&&Ne(U)}if(L)try{const p=JSON.parse(L);p&&typeof p=="object"&&(p.verifyurl&&(p.verifyurl=new URL(p.verifyurl,new URL(b)).toString()),vt(p))}catch(p){k("unable to configure from X-Altcha-Config",p)}if(!T&&(m!=null&&m.length)){const p=Date.parse(m);if(p){const U=p-Date.now();U>0&&Ne(U)}}return M}}function _n(r){var m;const c=v==null?void 0:v.querySelector(typeof r=="string"?`input[name="${r}"]`:'input[type="email"]:not([data-no-spamfilter])');return((m=c==null?void 0:c.value)==null?void 0:m.slice(c.value.indexOf("@")))||void 0}function kn(){return _==="ipAddress"?{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:!1,expectedCountries:void 0,expectedLanguages:void 0,fields:!1,ipAddress:void 0,text:void 0,timeZone:void 0}:typeof _=="object"?_:{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,text:void 0,timeZone:void 0}}function xn(r){return[...(v==null?void 0:v.querySelectorAll(r!=null&&r.length?r.map(m=>`input[name="${m}"]`).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((m,L)=>{const M=L.name,j=L.value;return M&&j&&(m[M]=/\n/.test(j)?j.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):j),m},{})}function En(){const r=Z!==void 0?Z.split(","):void 0;for(const c of globalThis.altchaPlugins)(!r||r.includes(c.pluginName))&&re.push(new c({el:E,clarify:we,dispatch:ve,getConfiguration:pt,getFloatingAnchor:wt,getState:_t,log:k,reset:_e,solve:yt,setState:xt,setFloatingAnchor:kt,verify:ie}))}function k(...r){(P||r.some(c=>c instanceof Error))&&console[r[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${te}]`,...r)}function Rn(){[g.UNVERIFIED,g.ERROR,g.EXPIRED].includes(R)?_&&(v==null?void 0:v.reportValidity())===!1?t(8,oe=!1):x?we():ie():t(8,oe=!0)}function ct(r){const c=r.target;N&&c&&!E.contains(c)&&(R===g.VERIFIED||f==="off"&&R===g.UNVERIFIED)&&t(9,E.style.display="none",E)}function at(){N&&R!==g.UNVERIFIED&&Le()}function Cn(r){for(const c of re)typeof c.onErrorChange=="function"&&c.onErrorChange(pe)}function ft(r){R===g.UNVERIFIED&&ie()}function ut(r){v&&f==="onsubmit"?R===g.UNVERIFIED?(r.preventDefault(),r.stopPropagation(),ie().then(()=>{v==null||v.requestSubmit()})):R!==g.VERIFIED&&(r.preventDefault(),r.stopPropagation(),R===g.VERIFYING&&ht()):v&&N&&f==="off"&&R===g.UNVERIFIED&&(r.preventDefault(),r.stopPropagation(),t(9,E.style.display="block",E),Le())}function dt(){_e()}function ht(){R===g.VERIFYING&&s.waitAlert&&alert(s.waitAlert)}function In(r){for(const c of re)typeof c.onStateChange=="function"&&c.onStateChange(R);N&&R!==g.UNVERIFIED&&requestAnimationFrame(()=>{Le()}),t(8,oe=R===g.VERIFIED)}function gt(){N&&Le()}function Le(r=20){if(E)if(he||(he=(q?document.querySelector(q):v==null?void 0:v.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])'))||v),he){const c=parseInt(ee,10)||12,m=he.getBoundingClientRect(),L=E.getBoundingClientRect(),M=document.documentElement.clientHeight,j=document.documentElement.clientWidth,V=N==="auto"?m.bottom+L.height+c+r>M:N==="top",p=Math.max(r,Math.min(j-r-L.width,m.left+m.width/2-L.width/2));if(V?t(9,E.style.top=`${m.top-(L.height+c)}px`,E):t(9,E.style.top=`${m.bottom+c}px`,E),t(9,E.style.left=`${p}px`,E),E.setAttribute("data-floating",V?"top":"bottom"),le){const U=le.getBoundingClientRect();t(10,le.style.left=m.left-p+m.width/2-U.width/2+"px",le)}}else k("unable to find floating anchor element")}async function Ln(r){if(!ne)throw new Error("Attribute verifyurl not set.");k("requesting server verification from",ne);const c={payload:r};if(_){const{blockedCountries:M,classifier:j,disableRules:V,email:p,expectedLanguages:U,expectedCountries:Ve,fields:ke,ipAddress:xe,text:Zn,timeZone:Ct}=kn();c.blockedCountries=M,c.classifier=j,c.disableRules=V,c.email=p===!1?void 0:_n(p),c.expectedCountries=Ve,c.expectedLanguages=U||(ot?[ot]:void 0),c.fields=ke===!1?void 0:xn(ke),c.ipAddress=xe===!1?void 0:xe||"auto",c.text=Zn,c.timeZone=Ct===!1?void 0:Ct||sn()}const m=await fetch(ne,{body:JSON.stringify(c),headers:{"content-type":"application/json"},method:"POST"});if(m.status!==200)throw new Error(`Server responded with ${m.status}.`);const L=await m.json();if(L!=null&&L.payload&&t(6,se=L.payload),ve("serververification",L),I&&L.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function Ne(r){k("expire",r),J&&(clearTimeout(J),J=null),r<1?st():J=setTimeout(st,r)}function mt(r){k("floating",r),N!==r&&(t(9,E.style.left="",E),t(9,E.style.top="",E)),t(1,N=r===!0||r===""?"auto":r===!1||r==="false"?void 0:N),N?(f||t(0,f="onsubmit"),document.addEventListener("scroll",at),document.addEventListener("click",ct),window.addEventListener("resize",gt)):f==="onsubmit"&&t(0,f=void 0)}function bt(r){if(!r.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(r.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!it.includes(r.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${it.join(", ")}`);if(!r.challenge||r.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!r.salt||r.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function yt(r){let c=null;if("Worker"in window){try{c=await Nn(r,r.maxnumber)}catch(m){k(m)}if((c==null?void 0:c.number)!==void 0||"obfuscated"in r)return{data:r,solution:c}}if("obfuscated"in r){const m=await fn(r.obfuscated,r.key,r.maxnumber);return{data:r,solution:await m.promise}}return{data:r,solution:await ln(r.challenge,r.salt,r.algorithm,r.maxnumber||B).promise}}async function Nn(r,c=typeof y=="number"?y:B,m=Math.ceil(de)){const L=[];m=Math.min(16,Math.max(1,m));for(let V=0;V<m;V++)L.push(altchaCreateWorker(ye));const M=Math.ceil(c/m),j=await Promise.all(L.map((V,p)=>{const U=p*M;return new Promise(Ve=>{V.addEventListener("message",ke=>{if(ke.data)for(const xe of L)xe!==V&&xe.postMessage({type:"abort"});Ve(ke.data)}),V.postMessage({payload:r,max:U+M,start:U,type:"work"})})}));for(const V of L)V.terminate();return j.find(V=>!!V)||null}async function we(){if(!x){t(7,R=g.ERROR);return}const r=re.find(c=>c.constructor.pluginName==="obfuscation");if(!r||!("clarify"in r)){t(7,R=g.ERROR),k("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");return}if("clarify"in r&&typeof r.clarify=="function")return r.clarify()}function vt(r){r.obfuscated!==void 0&&t(24,x=r.obfuscated),r.auto!==void 0&&(t(0,f=r.auto),f==="onload"&&(x?we():ie())),r.blockspam!==void 0&&t(16,I=!!r.blockspam),r.floatinganchor!==void 0&&t(20,q=r.floatinganchor),r.delay!==void 0&&t(18,W=r.delay),r.floatingoffset!==void 0&&t(21,ee=r.floatingoffset),r.floating!==void 0&&mt(r.floating),r.expire!==void 0&&(Ne(r.expire),t(19,T=r.expire)),r.challenge&&(bt(r.challenge),o=r.challenge),r.challengeurl!==void 0&&t(15,b=r.challengeurl),r.debug!==void 0&&t(17,P=!!r.debug),r.hidefooter!==void 0&&t(2,G=!!r.hidefooter),r.hidelogo!==void 0&&t(3,A=!!r.hidelogo),r.maxnumber!==void 0&&t(22,B=+r.maxnumber),r.mockerror!==void 0&&t(23,Y=!!r.mockerror),r.name!==void 0&&t(4,te=r.name),r.refetchonexpire!==void 0&&t(25,z=!!r.refetchonexpire),r.spamfilter!==void 0&&t(26,_=typeof r.spamfilter=="object"?r.spamfilter:!!r.spamfilter),r.strings&&t(44,l=r.strings),r.test!==void 0&&t(27,y=typeof r.test=="number"?r.test:!!r.test),r.verifyurl!==void 0&&t(28,ne=r.verifyurl),r.workers!==void 0&&t(29,de=+r.workers),r.workerurl!==void 0&&t(30,ye=r.workerurl)}function pt(){return{auto:f,blockspam:I,challengeurl:b,debug:P,delay:W,expire:T,floating:N,floatinganchor:q,floatingoffset:ee,hidefooter:G,hidelogo:A,name:te,maxnumber:B,mockerror:Y,obfuscated:x,refetchonexpire:z,spamfilter:_,strings:s,test:y,verifyurl:ne,workers:de,workerurl:ye}}function wt(){return he}function zn(r){return re.find(c=>c.constructor.pluginName===r)}function _t(){return R}function _e(r=g.UNVERIFIED,c=null){J&&(clearTimeout(J),J=null),t(8,oe=!1),t(5,pe=c),t(6,se=null),t(7,R=r)}function kt(r){he=r}function xt(r,c=null){t(7,R=r),t(5,pe=c)}async function ie(){return _e(g.VERIFYING),await new Promise(r=>setTimeout(r,W||0)),wn().then(r=>(bt(r),k("challenge",r),yt(r))).then(({data:r,solution:c})=>{if(k("solution",c),"challenge"in r&&c&&!("clearText"in c))if((c==null?void 0:c.number)!==void 0){if(ne)return Ln(lt(r,c));t(6,se=lt(r,c)),k("payload",se)}else throw k("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{t(7,R=g.VERIFIED),k("verified"),Mt().then(()=>{ve("verified",{payload:se})})}).catch(r=>{k(r),t(7,R=g.ERROR),t(5,pe=r.message)})}function Sn(){oe=this.checked,t(8,oe)}function Tn(r){Re[r?"unshift":"push"](()=>{le=r,t(10,le)})}function An(r){Re[r?"unshift":"push"](()=>{E=r,t(9,E)})}return n.$$set=r=>{"auto"in r&&t(0,f=r.auto),"blockspam"in r&&t(16,I=r.blockspam),"challengeurl"in r&&t(15,b=r.challengeurl),"challengejson"in r&&t(31,O=r.challengejson),"debug"in r&&t(17,P=r.debug),"delay"in r&&t(18,W=r.delay),"expire"in r&&t(19,T=r.expire),"floating"in r&&t(1,N=r.floating),"floatinganchor"in r&&t(20,q=r.floatinganchor),"floatingoffset"in r&&t(21,ee=r.floatingoffset),"hidefooter"in r&&t(2,G=r.hidefooter),"hidelogo"in r&&t(3,A=r.hidelogo),"name"in r&&t(4,te=r.name),"maxnumber"in r&&t(22,B=r.maxnumber),"mockerror"in r&&t(23,Y=r.mockerror),"obfuscated"in r&&t(24,x=r.obfuscated),"plugins"in r&&t(32,Z=r.plugins),"refetchonexpire"in r&&t(25,z=r.refetchonexpire),"spamfilter"in r&&t(26,_=r.spamfilter),"strings"in r&&t(33,u=r.strings),"test"in r&&t(27,y=r.test),"verifyurl"in r&&t(28,ne=r.verifyurl),"workers"in r&&t(29,de=r.workers),"workerurl"in r&&t(30,ye=r.workerurl),"$$scope"in r&&t(45,h=r.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&32768&&t(12,i=!!(b!=null&&b.includes(".altcha.org"))&&!!(b!=null&&b.includes("apiKey=ckey_"))),n.$$.dirty[1]&1&&(o=O?nt(O):void 0),n.$$.dirty[1]&4&&t(44,l=u?nt(u):{}),n.$$.dirty[1]&8192&&t(11,s={ariaLinkLabel:et,error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${tt}" target="_blank" aria-label="${l.ariaLinkLabel||et}">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...l}),n.$$.dirty[0]&192&&ve("statechange",{payload:se,state:R}),n.$$.dirty[0]&32&&Cn(),n.$$.dirty[0]&128&&In()},[f,N,G,A,te,pe,se,R,oe,E,le,s,i,Rn,ht,b,I,P,W,T,q,ee,B,Y,x,z,_,y,ne,de,ye,O,Z,u,we,vt,pt,wt,zn,_t,_e,kt,xt,ie,l,h,d,Sn,Tn,An]}class rt extends tn{constructor(e){super(),qt(this,e,vn,yn,Nt,{auto:0,blockspam:16,challengeurl:15,challengejson:31,debug:17,delay:18,expire:19,floating:1,floatinganchor:20,floatingoffset:21,hidefooter:2,hidelogo:3,name:4,maxnumber:22,mockerror:23,obfuscated:24,plugins:32,refetchonexpire:25,spamfilter:26,strings:33,test:27,verifyurl:28,workers:29,workerurl:30,clarify:34,configure:35,getConfiguration:36,getFloatingAnchor:37,getPlugin:38,getState:39,reset:40,setFloatingAnchor:41,setState:42,verify:43},un,[-1,-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),w()}get blockspam(){return this.$$.ctx[16]}set blockspam(e){this.$$set({blockspam:e}),w()}get challengeurl(){return this.$$.ctx[15]}set challengeurl(e){this.$$set({challengeurl:e}),w()}get challengejson(){return this.$$.ctx[31]}set challengejson(e){this.$$set({challengejson:e}),w()}get debug(){return this.$$.ctx[17]}set debug(e){this.$$set({debug:e}),w()}get delay(){return this.$$.ctx[18]}set delay(e){this.$$set({delay:e}),w()}get expire(){return this.$$.ctx[19]}set expire(e){this.$$set({expire:e}),w()}get floating(){return this.$$.ctx[1]}set floating(e){this.$$set({floating:e}),w()}get floatinganchor(){return this.$$.ctx[20]}set floatinganchor(e){this.$$set({floatinganchor:e}),w()}get floatingoffset(){return this.$$.ctx[21]}set floatingoffset(e){this.$$set({floatingoffset:e}),w()}get hidefooter(){return this.$$.ctx[2]}set hidefooter(e){this.$$set({hidefooter:e}),w()}get hidelogo(){return this.$$.ctx[3]}set hidelogo(e){this.$$set({hidelogo:e}),w()}get name(){return this.$$.ctx[4]}set name(e){this.$$set({name:e}),w()}get maxnumber(){return this.$$.ctx[22]}set maxnumber(e){this.$$set({maxnumber:e}),w()}get mockerror(){return this.$$.ctx[23]}set mockerror(e){this.$$set({mockerror:e}),w()}get obfuscated(){return this.$$.ctx[24]}set obfuscated(e){this.$$set({obfuscated:e}),w()}get plugins(){return this.$$.ctx[32]}set plugins(e){this.$$set({plugins:e}),w()}get refetchonexpire(){return this.$$.ctx[25]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),w()}get spamfilter(){return this.$$.ctx[26]}set spamfilter(e){this.$$set({spamfilter:e}),w()}get strings(){return this.$$.ctx[33]}set strings(e){this.$$set({strings:e}),w()}get test(){return this.$$.ctx[27]}set test(e){this.$$set({test:e}),w()}get verifyurl(){return this.$$.ctx[28]}set verifyurl(e){this.$$set({verifyurl:e}),w()}get workers(){return this.$$.ctx[29]}set workers(e){this.$$set({workers:e}),w()}get workerurl(){return this.$$.ctx[30]}set workerurl(e){this.$$set({workerurl:e}),w()}get clarify(){return this.$$.ctx[34]}get configure(){return this.$$.ctx[35]}get getConfiguration(){return this.$$.ctx[36]}get getFloatingAnchor(){return this.$$.ctx[37]}get getPlugin(){return this.$$.ctx[38]}get getState(){return this.$$.ctx[39]}get reset(){return this.$$.ctx[40]}get setFloatingAnchor(){return this.$$.ctx[41]}get setState(){return this.$$.ctx[42]}get verify(){return this.$$.ctx[43]}}customElements.define("altcha-widget",en(rt,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},delay:{},expire:{},floating:{},floatinganchor:{},floatingoffset:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},obfuscated:{},plugins:{},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{},workerurl:{}},["default"],["clarify","configure","getConfiguration","getFloatingAnchor","getPlugin","getState","reset","setFloatingAnchor","setState","verify"],!1)),globalThis.altchaCreateWorker=n=>n?new Worker(new URL(n)):new It,globalThis.altchaPlugins=globalThis.altchaPlugins||[],D.Altcha=rt,Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});
