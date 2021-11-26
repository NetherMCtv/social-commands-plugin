import{o as c,c as d,a,b as _,d as f,e as l,F as p,f as h}from"./vendor.9e094b02.js";const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};m();var u=(r,o)=>{const s=r.__vccOpts||r;for(const[n,e]of o)s[n]=e;return s};const v={},g={href:"https://github.com/NetherMCtv/social-commands-plugin",class:"github-corner","aria-label":"View source on GitHub",title:"View Source on Github",target:"_blank"},C=a("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#70B7FD",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},"aria-hidden":"true"},[a("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),a("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{"transform-origin":"130px 106px"},class:"octo-arm"}),a("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})],-1),y=[C];function b(r,o){return c(),d("a",g,y)}var L=u(v,[["render",b]]);const x={},w={class:"container"},k=_('<section id="presentation" class="text-center" data-v-714d145e><h1 data-v-714d145e>Social Commands</h1><div style="height:0.75rem;" data-v-714d145e></div><p data-v-714d145e>A Spigot Plugin that adds commands like <code data-v-714d145e>/discord</code> to your server</p><div style="height:2rem;" data-v-714d145e></div><div class="buttons" data-v-714d145e><a href="https://www.spigotmc.org/resources/socialcommands.95783/" class="button" data-v-714d145e>Download</a><a href="https://nethermc.gitbook.io/socialcommands/" class="button" data-v-714d145e>Wiki</a></div></section>',1),N=[k];function $(r,o){return c(),d("div",w,N)}var B=u(x,[["render",$],["__scopeId","data-v-714d145e"]]);const M=f({setup(r){return(o,s)=>(c(),d(p,null,[l(L),l(B)],64))}});h(M).mount("#app");