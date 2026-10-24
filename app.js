let activeCategory="All";
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function retailerLink(url,label,klass){if(!url)return `<a class="store ${klass} disabled" href="#" data-missing="${label}">${label} ↗</a>`;return `<a class="store ${klass}" href="${esc(url)}" target="_blank" rel="sponsored nofollow noopener noreferrer">${label} ↗</a>`}
function render(){
 const query=document.getElementById("search").value.trim().toLowerCase();
 let list=PRODUCTS.filter(p=>(activeCategory==="All"||p.cat===activeCategory)&&(`${p.name} ${p.cat} ${p.desc}`).toLowerCase().includes(query));
 if(document.getElementById("sort").value==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 document.getElementById("count").textContent=`${list.length} product${list.length===1?"":"s"}`;
 document.getElementById("empty").style.display=list.length?"none":"block";
 document.getElementById("products").innerHTML=list.map(p=>`<article class="product"><div class="product-pic">${p.tag?`<span class="pill">${esc(p.tag)}</span>`:""}${esc(p.icon)}</div><div class="product-body"><div class="category">${esc(p.cat)}</div><h3>${esc(p.name)}</h3><p class="desc">${esc(p.desc)}</p><div class="stores">${retailerLink(p.amazonUrl,"Amazon","amazon")}${retailerLink(p.flipkartUrl,"Flipkart","flipkart")}</div></div></article>`).join("");
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{activeCategory=b.dataset.cat;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));render()}));
document.getElementById("search").addEventListener("input",render);
document.getElementById("searchForm").addEventListener("submit",e=>{e.preventDefault();render()});
document.getElementById("sort").addEventListener("change",render);
document.getElementById("products").addEventListener("click",e=>{const a=e.target.closest("[data-missing]");if(a){e.preventDefault();alert("Placeholder only. Add your approved "+a.dataset.missing+" affiliate URL in products.js before publishing.");}});
document.getElementById("year").textContent=new Date().getFullYear();
const toggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});
render();