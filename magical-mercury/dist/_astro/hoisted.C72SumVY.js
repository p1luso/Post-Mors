import"./hoisted.CMali5lw.js";document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contact-btn"),n=document.getElementById("contact");e&&n&&(n.classList.remove("hidden"),e.classList.add("active")),document.querySelectorAll(".btn-ls").forEach(d=>{d.addEventListener("click",function(){const c=this.getAttribute("data-target");document.querySelectorAll(".content-section").forEach(t=>{t.classList.add("hidden")});const o=c?document.getElementById(c):null;o&&o.classList.remove("hidden"),document.querySelectorAll(".btn-ls").forEach(t=>{t.classList.remove("active")}),this.classList.add("active")})})});
