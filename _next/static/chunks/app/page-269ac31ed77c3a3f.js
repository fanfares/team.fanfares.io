(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2108:function(e,t,n){Promise.resolve().then(n.bind(n,6783))},6783:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(7437),r=n(2265),l=n(9099),i=n(7546);let a=(0,l.Ue)((e,t)=>({ndk:null,isConnected:!1,initNDK:async function(t){let n,s=!(arguments.length>1)||void 0===arguments[1]||arguments[1];try{s&&(n=new i.fJ(3e3))}catch(e){}let r=new i.ZP({signer:n,explicitRelayUrls:t,autoConnectUserRelays:!0});await r.connect(),window.ndk=r,e({ndk:r,isConnected:!0})},fetchEvent:async e=>{if(!t().isConnected)throw Error("NDK not initialized");let n=t().ndk;if(!n)throw Error("NDK is null");return await n.fetchEvent(e)},fetchEvents:async e=>{if(!t().isConnected)throw Error("NDK not initialized");let n=t().ndk;if(!n)throw Error("NDK is null");return console.log("yeet"),await n.fetchEvents(e)},fetchUser:async e=>{if(!t().isConnected)throw Error("NDK not initialized");let n=t().ndk;if(!n)throw Error("NDK is null");let s=n.getUser({pubkey:e});return console.log("got",await s.fetchProfile(),e),s},publish:async e=>{if(!t().isConnected)throw Error("NDK not initialized");let n=t().ndk;if(!n)throw Error("NDK is null");return await n.publish(e)}})),o=e=>!!e.tags.find(e=>4===e.length&&"root"===e[3]);function c(e){var t;let{name:n,title:l,pubkey:i}=e,{isConnected:c,fetchUser:d,fetchEvents:f}=a(),[u,x]=(0,r.useState)(),[h,m]=(0,r.useState)();return(0,r.useEffect)(()=>{async function e(){x(await d(i))}async function t(){let e=await f({kinds:[1],authors:[i],limit:20});console.log("feed me",e),m(e)}c&&(u||(e(),t()))},[c,d,f,u,i]),(0,r.useEffect)(()=>{u&&console.log(n,u)},[u]),(0,s.jsxs)("section",{className:"nostr-profile max-w-[350px] py-6 flex flex-col items-center justify-start",children:[(0,s.jsxs)("section",{id:"name-and-picture",className:"mx-12 max-w text-center",children:[(0,s.jsx)("h1",{id:"name",className:"text-2xl",children:n}),(0,s.jsx)("h2",{id:"title",className:"text-md mb-4",children:l}),(0,s.jsx)("div",{id:"picture",className:"relative w-64 h-64",children:u?(0,s.jsx)("img",{className:"rounded-full border-white border border-solid object-cover w-full h-full",src:u.profile.image,alt:"".concat(n,"'s profile picture"),width:250,height:250}):(0,s.jsx)("p",{children:"Loading"})})]}),(0,s.jsx)("section",{id:"visit",className:"visit my-8 px-12",children:(0,s.jsx)("a",{className:"bg-black rounded-full text-center border-purple-800 text-sm border-2 border-solid text-gray-500 font-sans py-2 px-2 glow-purple min-w-full block",href:"https://primal.net/p/".concat(i),target:"_blank",rel:"noopener noreferrer",children:"Visit on primal.net"})}),(0,s.jsx)("section",{id:"about",className:"about whitespace-pre-line mt-4 text-sm font-light font-sans max-w-[300px] p-3",children:(0,s.jsx)("p",{children:null==u?void 0:null===(t=u.profile)||void 0===t?void 0:t.about})}),(0,s.jsxs)("section",{id:"feed",className:"feed max-w-[300px] overflow-hidden ",children:[h&&h.size?(0,s.jsxs)("span",{className:"text-gray-600 pl-3",children:["Latest notes: ",(0,s.jsx)("br",{})]}):null,h?Array.from(h).map((e,t)=>o(e)?null:(0,s.jsx)("section",{className:"note border border-solid border-gray-800 text-gray-600 rounded-xl p-4 my-2 max-w-full",children:(0,s.jsx)("p",{className:"max-w-full font-sans",children:e.content})},t)).filter(Boolean).slice(0,5):(0,s.jsx)("p",{className:"text-sm py-6",children:"Loading notes"})]})]})}function d(){return(0,s.jsxs)("div",{onClick:()=>{window.location.href="https://fanfares.io"},className:"cursor-pointer",children:[(0,s.jsx)("img",{src:"/_next/static/media/fanfares-logo.4893e211.png",alt:"FanFares.io logo",width:250,height:250}),(0,s.jsx)("h1",{className:"text-5xl text-center",children:"FanFares"})]})}function f(){let{initNDK:e}=a();return(0,r.useEffect)(()=>{e(["wss://relay.fanfares.io","wss://relay.damus.io","wss://relay.primal.net"],!1)},[]),(0,s.jsxs)("main",{className:"flex min-h-screen min-w-full flex-col items-center p-14 text-lg",children:[(0,s.jsx)(d,{}),(0,s.jsxs)("div",{className:"flex items-center justify-center w-full mt-12",children:[(0,s.jsx)("hr",{className:"border-gray-400 border-t w-full flex-grow"}),(0,s.jsx)("h2",{className:"px-4 whitespace-nowrap",children:"Meet the team"}),(0,s.jsx)("hr",{className:"border-gray-400 border-t w-full flex-grow"})]}),(0,s.jsxs)("section",{className:"flex xl:flex-row flex-col items-start justify-between",children:[(0,s.jsx)(c,{name:"Simon",title:"CEO",pubkey:"db625e7637543ca7d7be65025834db318a0c7b75b0e23d4fb9e39229f5ba6fa7"}),(0,s.jsx)(c,{name:"Arkinox",title:"CTO",pubkey:"e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a"}),(0,s.jsx)(c,{name:"Wemerson",title:"Developer",pubkey:"56d57bf11aed78a989a7f042a786e1f09c83b1e8360b0462cbf1377454657d1c"}),(0,s.jsx)(c,{name:"rleed",title:"Developer",pubkey:"c0e4bd0ba547d15557915379a9d27b4f013da6495d5eeaf36a4854dd1c5734af"})]})]})}}},function(e){e.O(0,[369,760,971,23,744],function(){return e(e.s=2108)}),_N_E=e.O()}]);