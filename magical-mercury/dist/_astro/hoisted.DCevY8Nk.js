import"./hoisted.CMali5lw.js";document.addEventListener("DOMContentLoaded",function(){const c=(s,t)=>{s.scrollLeft>0?t.classList.add("has-scroll-left"):t.classList.remove("has-scroll-left"),s.scrollLeft+s.clientWidth<s.scrollWidth?t.classList.add("has-scroll-right"):t.classList.remove("has-scroll-right")},o=(s,t,d)=>{const e=document.getElementById(s),l=e?.parentElement,r=document.getElementById(t),i=document.getElementById(d);if(!e||!l||!r||!i)return;const n=600;r.addEventListener("click",()=>{e.scrollBy({left:-n,behavior:"smooth"})}),i.addEventListener("click",()=>{e.scrollBy({left:n,behavior:"smooth"})}),e.addEventListener("scroll",()=>c(e,l)),window.addEventListener("resize",()=>c(e,l)),c(e,l)};o("services-scroll-container","services-scroll-left","services-scroll-right"),o("offerings-scroll-container","offerings-scroll-left","offerings-scroll-right")});
