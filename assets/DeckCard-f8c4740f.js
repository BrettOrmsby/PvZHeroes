import{d as D,l as C,m as r,n as g,q as x,s as U,o as c,h as w,k as l,a as t,j as _,e as s,t as o,c as p,v as m}from"./index-a95266ec.js";import{d as n,r as N,_ as u,s as B}from"./relativeTime-69e4af18.js";import{_ as I}from"./plugin-vueexport-helper-c27b6911.js";const V={class:"title-container"},b={class:"description"},L={class:"last-updated"},j={style:{position:"relative"}},R={key:0,class:"pi pi-lock private-icon"},S={key:1,class:"pi pi-globe private-icon"},q={name:"DeckCard",components:{HeroImage:u}},z=D({...q,props:{deck:null},setup(e){const a=e;n.extend(N);const{id:k}=C(),d=r(()=>k.value===a.deck.creator),i=g(0),v=r(()=>(i.value,n(a.deck.last_updated).fromNow().startsWith("in")?"a few seconds ago":n(a.deck.last_updated).fromNow())),f=setInterval(()=>++i.value,6e4);return x(()=>clearInterval(f)),(h,A)=>{const y=U("RouterLink");return c(),w(y,{to:{name:"ViewDeck",params:{id:e.deck.id}},class:"deck-card"},{default:l(()=>[t("div",V,[_(s(B),{size:"large",shape:"circle",class:"hero"},{default:l(()=>[_(u,{name:e.deck.hero},null,8,["name"])]),_:1}),t("h2",null,o(e.deck.name),1)]),t("p",b,o(e.deck.description),1),t("p",L,"Last updated "+o(s(v)),1),t("div",j,[s(d)&&e.deck.is_private?(c(),p("i",R)):m("",!0),s(d)&&!e.deck.is_private?(c(),p("i",S)):m("",!0)])]),_:1},8,["to"])}}});const T=I(z,[["__scopeId","data-v-94b6c527"]]);export{T as D};
