document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(e){e.preventDefault();const t=document.querySelector(this.getAttribute("href"));t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});

window.addEventListener("scroll",function(){const e=document.querySelector(".navbar");window.scrollY>50?e.classList.add("navbar-scrolled"):e.classList.remove("navbar-scrolled")});

function validateContactForm(){const e=document.getElementById("name").value.trim(),t=document.getElementById("email").value.trim(),n=document.getElementById("message").value.trim();if(!e||!t||!n)return alert("Please fill in all required fields."),!1;const r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return r.test(t)||(alert("Please enter a valid email address."),!1)}

document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",function(e){validateContactForm()||e.preventDefault()})});

if("IntersectionObserver"in window){const e=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;t.src=t.dataset.src,t.classList.remove("lazy"),e.unobserve(t)}})});document.querySelectorAll("img[data-src]").forEach(t=>{e.observe(t)})}