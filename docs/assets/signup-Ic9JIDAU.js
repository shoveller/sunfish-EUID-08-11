import"./tailwind-hLRvZ190.js";import{a as h}from"./Modal-LwrVZ11o.js";import{c as k,t as c}from"./main_button-o2ruxehI.js";import{g as o}from"./getNode-pa7syr6m.js";import{p as L}from"./delay-L14dHocY.js";const S=o("form"),r=o("#email"),m=o("#pw"),f=o("#pw-confirm"),p=o("#email-box"),C=o("#pw-box"),n=o("#pw-confirm-box"),B=document.querySelector("#back"),a=k({id:"formbutton",type:"submit",value:"가입하기"}),[w,y,A]=h({title:"정말 취소하시겠어요?",desc:"시작하기 페이지로 이동하면 작성하신 데이터가 소멸됩니다."}),d=window.localStorage,s={email:!1,pw:!1,pwConfirm:!1};S.insertAdjacentElement("beforeend",a);const i="invalid",v="hasemail",x=/^[\w-]+@([a-z]+\.)+[\w]{2,4}/g,E=/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;let b,$;const I=async e=>{e.preventDefault(),$.includes(r.value)?(c(a,!1),s.email=!1,p.classList.add(v)):(d.setItem("users-oauth",JSON.stringify({email:r.value,password:m.value,passwordConfirm:f.value,emailVisibility:!0})),window.location.href="/src/pages/login/oauth/")},u=()=>{s.email&&s.pw&&s.pwConfirm?c(a,!0):c(a,!1)},g=(e,l,t)=>{if(e.value===""){t.classList.remove(i);return}e.value.match(l)?(t.classList.remove(i),s[e.id]=!0):(t.classList.add(i),s[e.id]=!1),u()},P=(e,l,t)=>{t.classList.remove(v),g(e,l,t),u()},M=({target:e})=>{if(e.value===""){n.classList.remove(i);return}e.value!==m.value?(n.classList.add(i),s.pwConfirm=!1):(n.classList.remove(i),s.pwConfirm=!0),u()};r.oninput=({target:e})=>P(e,x,p);m.oninput=({target:e})=>g(e,E,C);a.onclick=I;f.oninput=M;B.onclick=()=>w.showing();y.onclick=()=>w.closing();A.onclick=()=>{d.clear(),window.history.replaceState(null,null,"/src/pages/login/"),window.location.href="/src/pages/login/"};b=await L.collection("users").getFullList();$=b.map(e=>e.email);