import{d as w,l as v,n as t,o as r,c as d,z as h,j as p,e as u,p as g,g as P,a as i,f as y}from"./index-a95266ec.js";import{s as b}from"./password.esm-82a8d788.js";import{a as k}from"./button.esm-3bd52234.js";import{_ as C}from"./plugin-vueexport-helper-c27b6911.js";import"./overlayeventbus.esm-e94d645c.js";const _=e=>(g("data-v-49fc8280"),e=e(),P(),e),S={class:"container"},V=_(()=>i("h1",null,"Change Password",-1)),x=_(()=>i("label",{for:"password"},"Password",-1)),I={key:1},B={name:"PasswordReset"},R=w({...B,setup(e){const{update:f}=v(),a=t(""),n=t(!1),o=t(!1),m=async()=>{o.value=!0;try{await f({password:a.value}),n.value=!0}catch(l){y(l)}o.value=!1};return(l,s)=>(r(),d("div",S,[n.value?(r(),d("h1",I,"Password Changed")):(r(),d("form",{key:0,onSubmit:s[1]||(s[1]=h(c=>m(),["prevent"]))},[V,x,p(u(b),{id:"password",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value=c),feedback:!0,toggleMask:""},null,8,["modelValue"]),p(u(k),{label:"Change Password",type:"submit",loading:o.value},null,8,["loading"])],32))]))}});const j=C(R,[["__scopeId","data-v-49fc8280"]]);export{j as default};
