import"./tailwind-GolohDhN.js";import{a as k,p as L}from"./delay-YOOEtQ5Y.js";import{c as S,t as c}from"./main_button-o2ruxehI.js";import{g as o}from"./getNode-pa7syr6m.js";const C=o("form"),r=o("#email"),m=o("#pw"),f=o("#pw-confirm"),p=o("#email-box"),g=o("#pw-box"),n=o("#pw-confirm-box"),B=document.querySelector("#back"),i=S({id:"formbutton",type:"submit",value:"가입하기"}),[w,y,A]=k({title:"정말 취소하시겠어요?",desc:"시작하기 페이지로 이동하면 작성하신 데이터가 소멸됩니다."}),d=window.localStorage,s={email:!1,pw:!1,pwConfirm:!1};C.insertAdjacentElement("beforeend",i);const a="invalid",v="hasemail",x=/^[\w-]+@([a-z]+\.)+[\w]{2,4}/g,E=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;let b,$;const I=async e=>{e.preventDefault(),$.includes(r.value)?(c(i,!1),s.email=!1,p.classList.add(v)):(d.setItem("users-oauth",JSON.stringify({email:r.value,password:m.value,passwordConfirm:f.value,emailVisibility:!0})),window.location.href="/src/pages/login/oauth/")},u=()=>{s.email&&s.pw&&s.pwConfirm?c(i,!0):c(i,!1)},h=(e,l,t)=>{if(e.value===""){t.classList.remove(a);return}e.value.match(l)?(t.classList.remove(a),s[e.id]=!0):(t.classList.add(a),s[e.id]=!1),u()},P=(e,l,t)=>{t.classList.remove(v),h(e,l,t),u()},M=({target:e})=>{if(e.value===""){n.classList.remove(a);return}e.value!==m.value?(n.classList.add(a),s.pwConfirm=!1):(n.classList.remove(a),s.pwConfirm=!0),u()};r.oninput=({target:e})=>P(e,x,p);m.oninput=({target:e})=>h(e,E,g);i.onclick=I;f.oninput=M;B.onclick=()=>w.showing();y.onclick=()=>w.closing();A.onclick=()=>{d.clear(),window.history.replaceState(null,null,"/"),window.location.href="/"};b=await L.collection("users").getFullList();$=b.map(e=>e.email);