(function(F,M){typeof exports=="object"&&typeof module<"u"?M(exports):typeof define=="function"&&define.amd?define(["exports"],M):(F=typeof globalThis<"u"?globalThis:F||self,M(F.altcha={}))})(this,function(F){"use strict";var lr=Object.defineProperty;var sr=(F,M,te)=>M in F?lr(F,M,{enumerable:!0,configurable:!0,writable:!0,value:te}):F[M]=te;var X=(F,M,te)=>sr(F,typeof M!="symbol"?M+"":M,te);const M="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK",te=r=>Uint8Array.from(atob(r),e=>e.charCodeAt(0)),Ae=typeof window<"u"&&window.Blob&&new Blob([te(M)],{type:"text/javascript;charset=utf-8"});function ut(r){let e;try{if(e=Ae&&(window.URL||window.webkitURL).createObjectURL(Ae),!e)throw"";const t=new Worker(e,{name:r==null?void 0:r.name});return t.addEventListener("error",()=>{(window.URL||window.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+M,{name:r==null?void 0:r.name})}finally{e&&(window.URL||window.webkitURL).revokeObjectURL(e)}}function re(){}function Ne(r){return r()}function Se(){return Object.create(null)}function se(r){r.forEach(Ne)}function Te(r){return typeof r=="function"}function dt(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function ht(r){return Object.keys(r).length===0}function y(r,e){r.appendChild(e)}function gt(r,e,t){const i=mt(r);if(!i.getElementById(e)){const o=L("style");o.id=e,o.textContent=t,bt(i,o)}}function mt(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function bt(r,e){return y(r.head||r,e),e.sheet}function V(r,e,t){r.insertBefore(e,t||null)}function Z(r){r.parentNode&&r.parentNode.removeChild(r)}function L(r){return document.createElement(r)}function O(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function vt(r){return document.createTextNode(r)}function P(){return vt(" ")}function pe(r,e,t,i){return r.addEventListener(e,t,i),()=>r.removeEventListener(e,t,i)}function c(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function wt(r){return Array.from(r.childNodes)}function je(r,e,t){r.classList.toggle(e,!!t)}function yt(r,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:i})}function pt(r){const e={};return r.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let ce;function ae(r){ce=r}function _e(){if(!ce)throw new Error("Function called outside component initialization");return ce}function _t(r){_e().$$.on_mount.push(r)}function kt(r){_e().$$.on_destroy.push(r)}function xt(){const r=_e();return(e,t,{cancelable:i=!1}={})=>{const o=r.$$.callbacks[e];if(o){const l=yt(e,t,{cancelable:i});return o.slice().forEach(s=>{s.call(r,l)}),!l.defaultPrevented}return!0}}const ne=[],he=[];let ie=[];const Ze=[],Me=Promise.resolve();let ke=!1;function Ve(){ke||(ke=!0,Me.then(v))}function Et(){return Ve(),Me}function xe(r){ie.push(r)}const Ee=new Set;let oe=0;function v(){if(oe!==0)return;const r=ce;do{try{for(;oe<ne.length;){const e=ne[oe];oe++,ae(e),Ct(e.$$)}}catch(e){throw ne.length=0,oe=0,e}for(ae(null),ne.length=0,oe=0;he.length;)he.pop()();for(let e=0;e<ie.length;e+=1){const t=ie[e];Ee.has(t)||(Ee.add(t),t())}ie.length=0}while(ne.length);for(;Ze.length;)Ze.pop()();ke=!1,Ee.clear(),ae(r)}function Ct(r){if(r.fragment!==null){r.update(),se(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(xe)}}function Lt(r){const e=[],t=[];ie.forEach(i=>r.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),ie=e}const Rt=new Set;function zt(r,e){r&&r.i&&(Rt.delete(r),r.i(e))}function It(r,e,t){const{fragment:i,after_update:o}=r.$$;i&&i.m(e,t),xe(()=>{const l=r.$$.on_mount.map(Ne).filter(Te);r.$$.on_destroy?r.$$.on_destroy.push(...l):se(l),r.$$.on_mount=[]}),o.forEach(xe)}function At(r,e){const t=r.$$;t.fragment!==null&&(Lt(t.after_update),se(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Nt(r,e){r.$$.dirty[0]===-1&&(ne.push(r),Ve(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function St(r,e,t,i,o,l,s=null,u=[-1]){const f=ce;ae(r);const d=r.$$={fragment:null,ctx:[],props:l,update:re,not_equal:o,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Se(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};s&&s(d.root);let G=!1;if(d.ctx=t?t(r,e.props||{},(S,U,...k)=>{const W=k.length?k[0]:U;return d.ctx&&o(d.ctx[S],d.ctx[S]=W)&&(!d.skip_bound&&d.bound[S]&&d.bound[S](W),G&&Nt(r,S)),U}):[],d.update(),G=!0,se(d.before_update),d.fragment=i?i(d.ctx):!1,e.target){if(e.hydrate){const S=wt(e.target);d.fragment&&d.fragment.l(S),S.forEach(Z)}else d.fragment&&d.fragment.c();e.intro&&zt(r.$$.fragment),It(r,e.target,e.anchor),v()}ae(f)}let $e;typeof HTMLElement=="function"&&($e=class extends HTMLElement{constructor(e,t,i){super();X(this,"$$ctor");X(this,"$$s");X(this,"$$c");X(this,"$$cn",!1);X(this,"$$d",{});X(this,"$$r",!1);X(this,"$$p_d",{});X(this,"$$l",{});X(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,i&&this.attachShadow({mode:"open"})}addEventListener(e,t,i){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const o=this.$$c.$on(e,t);this.$$l_u.set(t,o)}super.addEventListener(e,t,i)}removeEventListener(e,t,i){if(super.removeEventListener(e,t,i),this.$$c){const o=this.$$l_u.get(t);o&&(o(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(l){return()=>{let s;return{c:function(){s=L("slot"),l!=="default"&&c(s,"name",l)},m:function(d,G){V(d,s,G)},d:function(d){d&&Z(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},i=pt(this);for(const l of this.$$s)l in i&&(t[l]=[e(l)]);for(const l of this.attributes){const s=this.$$g_p(l.name);s in this.$$d||(this.$$d[s]=ge(s,l.value,this.$$p_d,"toProp"))}for(const l in this.$$p_d)!(l in this.$$d)&&this[l]!==void 0&&(this.$$d[l]=this[l],delete this[l]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const l in this.$$p_d)if(this.$$d[l]=this.$$c.$$.ctx[this.$$c.$$.props[l]],this.$$p_d[l].reflect){const s=ge(l,this.$$d[l],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,s)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const l in this.$$l)for(const s of this.$$l[l]){const u=this.$$c.$on(l,s);this.$$l_u.set(s,u)}this.$$l={}}}attributeChangedCallback(e,t,i){var o;this.$$r||(e=this.$$g_p(e),this.$$d[e]=ge(e,i,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function ge(r,e,t,i){var l;const o=(l=t[r])==null?void 0:l.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!t[r])return e;if(i==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Tt(r,e,t,i,o,l){let s=class extends $e{constructor(){super(r,t,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(u=>(e[u].attribute||u).toLowerCase())}};return Object.keys(e).forEach(u=>{Object.defineProperty(s.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(f){var d;f=ge(u,f,e),this.$$d[u]=f,(d=this.$$c)==null||d.$set({[u]:f})}})}),i.forEach(u=>{Object.defineProperty(s.prototype,u,{get(){var f;return(f=this.$$c)==null?void 0:f[u]}})}),l&&(s=l(s)),r.element=s,s}class jt{constructor(){X(this,"$$");X(this,"$$set")}$destroy(){At(this,1),this.$destroy=re}$on(e,t){if(!Te(t))return re;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Zt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Zt);const Mt=new TextEncoder;function Vt(r){return[...new Uint8Array(r)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function $t(r,e="SHA-256",t=1e5){const i=Date.now().toString(16);r||(r=Math.round(Math.random()*t));const o=await De(i,r,e);return{algorithm:e,challenge:o,salt:i,signature:""}}async function De(r,e,t){return Vt(await crypto.subtle.digest(t.toUpperCase(),Mt.encode(r+e)))}function Dt(r,e,t="SHA-256",i=1e6,o=0){const l=new AbortController,s=Date.now();return{promise:(async()=>{for(let f=o;f<=i;f+=1){if(l.signal.aborted)return null;if(await De(e,f,t)===r)return{number:f,took:Date.now()-s}}return null})(),controller:l}}var m=(r=>(r.ERROR="error",r.VERIFIED="verified",r.VERIFYING="verifying",r.UNVERIFIED="unverified",r.EXPIRED="expired",r))(m||{});function Ut(r){gt(r,"svelte-ddsc3z",'.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}')}function Ue(r){let e,t,i;return{c(){e=O("svg"),t=O("path"),i=O("path"),c(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),c(t,"fill","currentColor"),c(t,"opacity",".25"),c(i,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),c(i,"fill","currentColor"),c(i,"class","altcha-spinner svelte-ddsc3z"),c(e,"width","24"),c(e,"height","24"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(o,l){V(o,e,l),y(e,t),y(e,i)},d(o){o&&Z(e)}}}function Ft(r){let e,t=r[11].label+"",i;return{c(){e=L("label"),c(e,"for",i=r[4]+"_checkbox"),c(e,"class","svelte-ddsc3z")},m(o,l){V(o,e,l),e.innerHTML=t},p(o,l){l[0]&2048&&t!==(t=o[11].label+"")&&(e.innerHTML=t),l[0]&16&&i!==(i=o[4]+"_checkbox")&&c(e,"for",i)},d(o){o&&Z(e)}}}function Gt(r){let e,t=r[11].verifying+"";return{c(){e=L("span")},m(i,o){V(i,e,o),e.innerHTML=t},p(i,o){o[0]&2048&&t!==(t=i[11].verifying+"")&&(e.innerHTML=t)},d(i){i&&Z(e)}}}function Wt(r){let e,t=r[11].verified+"",i,o;return{c(){e=L("span"),i=P(),o=L("input"),c(o,"type","hidden"),c(o,"name",r[4]),o.value=r[5]},m(l,s){V(l,e,s),e.innerHTML=t,V(l,i,s),V(l,o,s)},p(l,s){s[0]&2048&&t!==(t=l[11].verified+"")&&(e.innerHTML=t),s[0]&16&&c(o,"name",l[4]),s[0]&32&&(o.value=l[5])},d(l){l&&(Z(e),Z(i),Z(o))}}}function Fe(r){let e,t,i,o,l,s,u;return{c(){e=L("div"),t=L("a"),i=O("svg"),o=O("path"),l=O("path"),s=O("path"),c(o,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),c(o,"fill","currentColor"),c(l,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),c(l,"fill","currentColor"),c(s,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),c(s,"fill","currentColor"),c(i,"width","22"),c(i,"height","22"),c(i,"viewBox","0 0 20 20"),c(i,"fill","none"),c(i,"xmlns","http://www.w3.org/2000/svg"),c(t,"href",He),c(t,"target","_blank"),c(t,"class","altcha-logo svelte-ddsc3z"),c(t,"aria-label",u=r[11].ariaLinkLabel)},m(f,d){V(f,e,d),y(e,t),y(t,i),y(i,o),y(i,l),y(i,s)},p(f,d){d[0]&2048&&u!==(u=f[11].ariaLinkLabel)&&c(t,"aria-label",u)},d(f){f&&Z(e)}}}function Ge(r){let e,t,i,o;function l(f,d){return f[6]===m.EXPIRED?Bt:Xt}let s=l(r),u=s(r);return{c(){e=L("div"),t=O("svg"),i=O("path"),o=P(),u.c(),c(i,"stroke-linecap","round"),c(i,"stroke-linejoin","round"),c(i,"d","M6 18L18 6M6 6l12 12"),c(t,"width","14"),c(t,"height","14"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"fill","none"),c(t,"viewBox","0 0 24 24"),c(t,"stroke-width","1.5"),c(t,"stroke","currentColor"),c(e,"class","altcha-error svelte-ddsc3z")},m(f,d){V(f,e,d),y(e,t),y(t,i),y(e,o),u.m(e,null)},p(f,d){s===(s=l(f))&&u?u.p(f,d):(u.d(1),u=s(f),u&&(u.c(),u.m(e,null)))},d(f){f&&Z(e),u.d()}}}function Xt(r){let e,t=r[11].error+"";return{c(){e=L("div"),c(e,"title",r[10])},m(i,o){V(i,e,o),e.innerHTML=t},p(i,o){o[0]&2048&&t!==(t=i[11].error+"")&&(e.innerHTML=t),o[0]&1024&&c(e,"title",i[10])},d(i){i&&Z(e)}}}function Bt(r){let e,t=r[11].expired+"";return{c(){e=L("div"),c(e,"title",r[10])},m(i,o){V(i,e,o),e.innerHTML=t},p(i,o){o[0]&2048&&t!==(t=i[11].expired+"")&&(e.innerHTML=t),o[0]&1024&&c(e,"title",i[10])},d(i){i&&Z(e)}}}function We(r){let e,t,i=r[11].footer+"";return{c(){e=L("div"),t=L("div"),c(t,"class","svelte-ddsc3z"),c(e,"class","altcha-footer svelte-ddsc3z")},m(o,l){V(o,e,l),y(e,t),t.innerHTML=i},p(o,l){l[0]&2048&&i!==(i=o[11].footer+"")&&(t.innerHTML=i)},d(o){o&&Z(e)}}}function Xe(r){let e;return{c(){e=L("div"),c(e,"class","altcha-anchor-arrow svelte-ddsc3z")},m(t,i){V(t,e,i),r[36](e)},p:re,d(t){t&&Z(e),r[36](null)}}}function Ht(r){let e,t,i,o,l,s,u,f,d,G,S,U,k,W,J,N=r[6]===m.VERIFYING&&Ue();function le(h,p){return h[6]===m.VERIFIED?Wt:h[6]===m.VERIFYING?Gt:Ft}let Y=le(r),T=Y(r),R=r[3]!==!0&&Fe(r),z=(r[10]||r[6]===m.EXPIRED)&&Ge(r),w=r[11].footer&&r[2]!==!0&&We(r),I=r[1]&&Xe(r);return{c(){e=L("div"),t=L("div"),N&&N.c(),i=P(),o=L("div"),l=L("input"),f=P(),d=L("div"),T.c(),G=P(),R&&R.c(),S=P(),z&&z.c(),U=P(),w&&w.c(),k=P(),I&&I.c(),c(l,"type","checkbox"),c(l,"id",s=r[4]+"_checkbox"),l.required=u=r[0]!=="onsubmit",c(l,"class","svelte-ddsc3z"),c(o,"class","altcha-checkbox svelte-ddsc3z"),je(o,"altcha-hidden",r[6]===m.VERIFYING),c(d,"class","altcha-label svelte-ddsc3z"),c(t,"class","altcha-main svelte-ddsc3z"),c(e,"class","altcha svelte-ddsc3z"),c(e,"data-state",r[6]),c(e,"data-floating",r[1])},m(h,p){V(h,e,p),y(e,t),N&&N.m(t,null),y(t,i),y(t,o),y(o,l),l.checked=r[7],y(t,f),y(t,d),T.m(d,null),y(t,G),R&&R.m(t,null),y(e,S),z&&z.m(e,null),y(e,U),w&&w.m(e,null),y(e,k),I&&I.m(e,null),r[37](e),W||(J=[pe(l,"change",r[35]),pe(l,"change",r[12]),pe(l,"invalid",r[13])],W=!0)},p(h,p){h[6]===m.VERIFYING?N||(N=Ue(),N.c(),N.m(t,i)):N&&(N.d(1),N=null),p[0]&16&&s!==(s=h[4]+"_checkbox")&&c(l,"id",s),p[0]&1&&u!==(u=h[0]!=="onsubmit")&&(l.required=u),p[0]&128&&(l.checked=h[7]),p[0]&64&&je(o,"altcha-hidden",h[6]===m.VERIFYING),Y===(Y=le(h))&&T?T.p(h,p):(T.d(1),T=Y(h),T&&(T.c(),T.m(d,null))),h[3]!==!0?R?R.p(h,p):(R=Fe(h),R.c(),R.m(t,null)):R&&(R.d(1),R=null),h[10]||h[6]===m.EXPIRED?z?z.p(h,p):(z=Ge(h),z.c(),z.m(e,U)):z&&(z.d(1),z=null),h[11].footer&&h[2]!==!0?w?w.p(h,p):(w=We(h),w.c(),w.m(e,k)):w&&(w.d(1),w=null),h[1]?I?I.p(h,p):(I=Xe(h),I.c(),I.m(e,null)):I&&(I.d(1),I=null),p[0]&64&&c(e,"data-state",h[6]),p[0]&2&&c(e,"data-floating",h[1])},i:re,o:re,d(h){h&&Z(e),N&&N.d(),T.d(),R&&R.d(),z&&z.d(),w&&w.d(),I&&I.d(),r[37](null),W=!1,se(J)}}}const Be="Visit Altcha.org",He="https://altcha.org/";function Oe(r){return JSON.parse(r)}function Ot(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Pt(r,e,t){var at,ft;let i,o,l,{auto:s=void 0}=e,{blockspam:u=void 0}=e,{challengeurl:f=void 0}=e,{challengejson:d=void 0}=e,{debug:G=!1}=e,{delay:S=0}=e,{expire:U=void 0}=e,{floating:k=void 0}=e,{floatinganchor:W=void 0}=e,{floatingoffset:J=void 0}=e,{hidefooter:N=!1}=e,{hidelogo:le=!1}=e,{name:Y="altcha"}=e,{maxnumber:T=1e6}=e,{mockerror:R=!1}=e,{refetchonexpire:z=!0}=e,{spamfilter:w=!1}=e,{strings:I=void 0}=e,{test:h=!1}=e,{verifyurl:p=void 0}=e,{workers:fe=Math.min(16,navigator.hardwareConcurrency||8)}=e,{workerurl:Ce=void 0}=e;const Le=xt(),Ye=["SHA-256","SHA-384","SHA-512"],Ke=(ft=(at=document.documentElement.lang)==null?void 0:at.split("-"))==null?void 0:ft[0];let K=!1,x,q=null,me=null,b=null,Re=null,Q=null,$=m.UNVERIFIED,B=null;kt(()=>{b&&(b.removeEventListener("submit",qe),b.removeEventListener("reset",Qe),b.removeEventListener("focusin",Je),b=null),B&&(clearTimeout(B),B=null),document.removeEventListener("click",nt),document.removeEventListener("scroll",it),window.removeEventListener("resize",lt)}),_t(()=>{E("mounted","0.6.2"),E("workers",fe),h&&E("using test mode"),U&&be(U),s!==void 0&&E("auto",s),k!==void 0&&st(k),b=x.closest("form"),b&&(b.addEventListener("submit",qe,{capture:!0}),b.addEventListener("reset",Qe),s==="onfocus"&&b.addEventListener("focusin",Je)),s==="onload"&&ee()});function E(...n){(G||n.some(a=>a instanceof Error))&&console[n[0]instanceof Error?"error":"log"]("ALTCHA",...n)}function Je(n){$===m.UNVERIFIED&&ee()}function qe(n){b&&s==="onsubmit"&&($===m.UNVERIFIED?(n.preventDefault(),n.stopPropagation(),ee().then(()=>{b==null||b.requestSubmit()})):$!==m.VERIFIED&&(n.preventDefault(),n.stopPropagation(),$===m.VERIFYING&&ot()))}function Qe(){ve()}function et(n,a){return btoa(JSON.stringify({algorithm:n.algorithm,challenge:n.challenge,number:a.number,salt:n.salt,signature:n.signature,test:h?!0:void 0,took:a.took}))}function tt(n){if(!n.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(n.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!Ye.includes(n.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${Ye.join(", ")}`);if(!n.challenge||n.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!n.salt||n.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function Yt(){var n;if(R)throw E("mocking error"),new Error("Mocked error.");if(i)return E("using provided json data"),i;if(h)return E("generating test challenge",{test:h}),$t(typeof h!="boolean"?+h:void 0);{if(!f)throw new Error("Attribute challengeurl not set.");E("fetching challenge from",f);const a=await fetch(f,{headers:{"x-altcha-spam-filter":w?"1":"0"}});if(a.status!==200)throw new Error(`Server responded with ${a.status}.`);const g=a.headers.get("Expires"),A=a.headers.get("X-Altcha-Config"),D=await a.json(),j=new URLSearchParams((n=D.salt.split("?"))==null?void 0:n[1]),H=j.get("expires")||j.get("expire");if(H){const _=new Date(+H*1e3),C=isNaN(_.getTime())?0:_.getTime()-Date.now();C>0&&be(C)}if(A)try{const _=JSON.parse(A);_&&typeof _=="object"&&(_.verifyurl&&(_.verifyurl=new URL(_.verifyurl,new URL(f)).toString()),ct(_))}catch(_){E("unable to configure from X-Altcha-Config",_)}if(!U&&(g!=null&&g.length)){const _=Date.parse(g);if(_){const C=_-Date.now();C>0&&be(C)}}return D}}function rt(){f&&z&&$===m.VERIFIED?ee():ve(m.EXPIRED,l.expired)}async function Kt(n){let a=null;if("Worker"in window){try{a=await Jt(n.challenge,n.salt,n.algorithm,n.maxnumber)}catch(g){E(g)}if((a==null?void 0:a.number)!==void 0)return{data:n,solution:a}}return{data:n,solution:await Dt(n.challenge,n.salt,n.algorithm,n.maxnumber||T).promise}}async function Jt(n,a,g,A=typeof h=="number"?h:T,D=Math.ceil(fe)){const j=[];if(D<1)throw new Error("Wrong number of workers configured.");if(D>16)throw new Error("Too many workers. Max. 16 allowed workers.");for(let C=0;C<D;C++)j.push(createAltchaWorker(Ce));const H=Math.ceil(A/D),_=await Promise.all(j.map((C,Ie)=>{const ue=Ie*H;return new Promise(we=>{C.addEventListener("message",ye=>{if(ye.data)for(const de of j)de!==C&&de.postMessage({type:"abort"});we(ye.data)}),C.postMessage({payload:{alg:g,challenge:n,max:ue+H,salt:a,start:ue},type:"work"})})}));for(const C of j)C.terminate();return _.find(C=>!!C)||null}function qt(){[m.UNVERIFIED,m.ERROR,m.EXPIRED].includes($)?w&&(b==null?void 0:b.reportValidity())===!1?t(7,K=!1):ee():t(7,K=!0)}function nt(n){const a=n.target;k&&a&&!x.contains(a)&&$===m.VERIFIED&&t(8,x.style.display="none",x)}function it(){k&&ze()}function ot(){$===m.VERIFYING&&l.waitAlert&&alert(l.waitAlert)}function Qt(n){k&&$!==m.UNVERIFIED&&requestAnimationFrame(()=>{ze()})}function lt(){k&&ze()}function be(n){E("expire",n),B&&(clearTimeout(B),B=null),n<1?rt():B=setTimeout(rt,n)}function st(n){E("floating",n),k!==n&&(t(8,x.style.left="",x),t(8,x.style.top="",x)),t(1,k=n===!0||n===""?"auto":n===!1||n==="false"?void 0:k),k?(s||t(0,s="onsubmit"),document.addEventListener("scroll",it),document.addEventListener("click",nt),window.addEventListener("resize",lt)):s==="onsubmit"&&t(0,s=void 0)}function er(n){var g;const a=b==null?void 0:b.querySelector(typeof n=="string"?`input[name="${n}"]`:'input[type="email"]:not([data-no-spamfilter])');return((g=a==null?void 0:a.value)==null?void 0:g.slice(a.value.indexOf("@")))||void 0}function tr(n){return[...(b==null?void 0:b.querySelectorAll(n!=null&&n.length?n.map(g=>`input[name="${g}"]`).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((g,A)=>{const D=A.name,j=A.value;return D&&j&&(g[D]=/\n/.test(j)?j.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):j),g},{})}async function rr(n){if(!p)throw new Error("Attribute verifyurl not set.");E("requesting server verification from",p);const a={payload:n};if(w){const{blockedCountries:D,classifier:j,disableRules:H,email:_,expectedLanguages:C,expectedCountries:Ie,fields:ue,ipAddress:we,text:ye,timeZone:de}=typeof w=="object"?w:{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,text:void 0,timeZone:void 0};a.blockedCountries=D,a.classifier=j,a.disableRules=H,a.email=_===!1?void 0:er(_),a.expectedCountries=Ie,a.expectedLanguages=C||(Ke?[Ke]:void 0),a.fields=ue===!1?void 0:tr(ue),a.ipAddress=we===!1?void 0:we||"auto",a.text=ye,a.timeZone=de===!1?void 0:de||Ot()}const g=await fetch(p,{body:JSON.stringify(a),headers:{"content-type":"application/json"},method:"POST"});if(g.status!==200)throw new Error(`Server responded with ${g.status}.`);const A=await g.json();if(A!=null&&A.payload&&t(5,Q=A.payload),Le("serververification",A),u&&A.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function ze(n=20){if(x)if(me||(me=(W?document.querySelector(W):b==null?void 0:b.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])'))||b),me){const a=parseInt(J,10)||12,g=me.getBoundingClientRect(),A=x.getBoundingClientRect(),D=document.documentElement.clientHeight,j=document.documentElement.clientWidth,H=k==="auto"?g.bottom+A.height+a+n>D:k==="top",_=Math.max(n,Math.min(j-n-A.width,g.left+g.width/2-A.width/2));if(H?t(8,x.style.top=`${g.top-(A.height+a)}px`,x):t(8,x.style.top=`${g.bottom+a}px`,x),t(8,x.style.left=`${_}px`,x),x.setAttribute("data-floating",H?"top":"bottom"),q){const C=q.getBoundingClientRect();t(9,q.style.left=g.left-_+g.width/2-C.width/2+"px",q)}}else E("unable to find floating anchor element")}function ct(n){n.auto!==void 0&&(t(0,s=n.auto),s==="onload"&&ee()),n.floatinganchor!==void 0&&t(18,W=n.floatinganchor),n.delay!==void 0&&t(16,S=n.delay),n.floatingoffset!==void 0&&t(19,J=n.floatingoffset),n.floating!==void 0&&st(n.floating),n.expire!==void 0&&(be(n.expire),t(17,U=n.expire)),n.challenge&&(tt(n.challenge),i=n.challenge),n.challengeurl!==void 0&&t(14,f=n.challengeurl),n.debug!==void 0&&t(15,G=!!n.debug),n.hidefooter!==void 0&&t(2,N=!!n.hidefooter),n.hidelogo!==void 0&&t(3,le=!!n.hidelogo),n.maxnumber!==void 0&&t(20,T=+n.maxnumber),n.mockerror!==void 0&&t(21,R=!!n.mockerror),n.name!==void 0&&t(4,Y=n.name),n.refetchonexpire!==void 0&&t(22,z=!!n.refetchonexpire),n.spamfilter!==void 0&&t(23,w=typeof n.spamfilter=="object"?n.spamfilter:!!n.spamfilter),n.strings&&t(34,o=n.strings),n.test!==void 0&&t(24,h=typeof n.test=="number"?n.test:!!n.test),n.verifyurl!==void 0&&t(25,p=n.verifyurl),n.workers!==void 0&&t(26,fe=+n.workers)}function ve(n=m.UNVERIFIED,a=null){B&&(clearTimeout(B),B=null),t(7,K=!1),t(10,Re=a),t(5,Q=null),t(6,$=n)}async function ee(){return ve(m.VERIFYING),await new Promise(n=>setTimeout(n,S||0)),Yt().then(n=>(tt(n),E("challenge",n),Kt(n))).then(({data:n,solution:a})=>{if(E("solution",a),(a==null?void 0:a.number)!==void 0){if(p)return rr(et(n,a));t(5,Q=et(n,a)),E("payload",Q)}else throw E("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{Et().then(()=>{t(6,$=m.VERIFIED),t(7,K=!0),E("verified"),Le("verified",{payload:Q})})}).catch(n=>{E(n),t(6,$=m.ERROR),t(7,K=!1),t(10,Re=n.message)})}function nr(){K=this.checked,t(7,K)}function ir(n){he[n?"unshift":"push"](()=>{q=n,t(9,q)})}function or(n){he[n?"unshift":"push"](()=>{x=n,t(8,x)})}return r.$$set=n=>{"auto"in n&&t(0,s=n.auto),"blockspam"in n&&t(27,u=n.blockspam),"challengeurl"in n&&t(14,f=n.challengeurl),"challengejson"in n&&t(28,d=n.challengejson),"debug"in n&&t(15,G=n.debug),"delay"in n&&t(16,S=n.delay),"expire"in n&&t(17,U=n.expire),"floating"in n&&t(1,k=n.floating),"floatinganchor"in n&&t(18,W=n.floatinganchor),"floatingoffset"in n&&t(19,J=n.floatingoffset),"hidefooter"in n&&t(2,N=n.hidefooter),"hidelogo"in n&&t(3,le=n.hidelogo),"name"in n&&t(4,Y=n.name),"maxnumber"in n&&t(20,T=n.maxnumber),"mockerror"in n&&t(21,R=n.mockerror),"refetchonexpire"in n&&t(22,z=n.refetchonexpire),"spamfilter"in n&&t(23,w=n.spamfilter),"strings"in n&&t(29,I=n.strings),"test"in n&&t(24,h=n.test),"verifyurl"in n&&t(25,p=n.verifyurl),"workers"in n&&t(26,fe=n.workers),"workerurl"in n&&t(30,Ce=n.workerurl)},r.$$.update=()=>{r.$$.dirty[0]&268435456&&(i=d?Oe(d):void 0),r.$$.dirty[0]&536870912&&t(34,o=I?Oe(I):{}),r.$$.dirty[1]&8&&t(11,l={ariaLinkLabel:Be,error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${He}" target="_blank" aria-label="${o.ariaLinkLabel||Be}">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...o}),r.$$.dirty[0]&96&&Le("statechange",{payload:Q,state:$}),r.$$.dirty[0]&64&&Qt()},[s,k,N,le,Y,Q,$,K,x,q,Re,l,qt,ot,f,G,S,U,W,J,T,R,z,w,h,p,fe,u,d,I,Ce,ct,ve,ee,o,nr,ir,or]}class Pe extends jt{constructor(e){super(),St(this,e,Pt,Ht,dt,{auto:0,blockspam:27,challengeurl:14,challengejson:28,debug:15,delay:16,expire:17,floating:1,floatinganchor:18,floatingoffset:19,hidefooter:2,hidelogo:3,name:4,maxnumber:20,mockerror:21,refetchonexpire:22,spamfilter:23,strings:29,test:24,verifyurl:25,workers:26,workerurl:30,configure:31,reset:32,verify:33},Ut,[-1,-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),v()}get blockspam(){return this.$$.ctx[27]}set blockspam(e){this.$$set({blockspam:e}),v()}get challengeurl(){return this.$$.ctx[14]}set challengeurl(e){this.$$set({challengeurl:e}),v()}get challengejson(){return this.$$.ctx[28]}set challengejson(e){this.$$set({challengejson:e}),v()}get debug(){return this.$$.ctx[15]}set debug(e){this.$$set({debug:e}),v()}get delay(){return this.$$.ctx[16]}set delay(e){this.$$set({delay:e}),v()}get expire(){return this.$$.ctx[17]}set expire(e){this.$$set({expire:e}),v()}get floating(){return this.$$.ctx[1]}set floating(e){this.$$set({floating:e}),v()}get floatinganchor(){return this.$$.ctx[18]}set floatinganchor(e){this.$$set({floatinganchor:e}),v()}get floatingoffset(){return this.$$.ctx[19]}set floatingoffset(e){this.$$set({floatingoffset:e}),v()}get hidefooter(){return this.$$.ctx[2]}set hidefooter(e){this.$$set({hidefooter:e}),v()}get hidelogo(){return this.$$.ctx[3]}set hidelogo(e){this.$$set({hidelogo:e}),v()}get name(){return this.$$.ctx[4]}set name(e){this.$$set({name:e}),v()}get maxnumber(){return this.$$.ctx[20]}set maxnumber(e){this.$$set({maxnumber:e}),v()}get mockerror(){return this.$$.ctx[21]}set mockerror(e){this.$$set({mockerror:e}),v()}get refetchonexpire(){return this.$$.ctx[22]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),v()}get spamfilter(){return this.$$.ctx[23]}set spamfilter(e){this.$$set({spamfilter:e}),v()}get strings(){return this.$$.ctx[29]}set strings(e){this.$$set({strings:e}),v()}get test(){return this.$$.ctx[24]}set test(e){this.$$set({test:e}),v()}get verifyurl(){return this.$$.ctx[25]}set verifyurl(e){this.$$set({verifyurl:e}),v()}get workers(){return this.$$.ctx[26]}set workers(e){this.$$set({workers:e}),v()}get workerurl(){return this.$$.ctx[30]}set workerurl(e){this.$$set({workerurl:e}),v()}get configure(){return this.$$.ctx[31]}get reset(){return this.$$.ctx[32]}get verify(){return this.$$.ctx[33]}}customElements.define("altcha-widget",Tt(Pe,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},delay:{},expire:{},floating:{},floatinganchor:{},floatingoffset:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{},workerurl:{}},[],["configure","reset","verify"],!1)),globalThis.createAltchaWorker=r=>r?new Worker(new URL(r)):new ut,F.Altcha=Pe,Object.defineProperty(F,Symbol.toStringTag,{value:"Module"})});
