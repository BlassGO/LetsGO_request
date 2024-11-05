const t=document.getElementById("theme-toggle");const n=document.getElementById("loading-overlay");const e=document.body;const o=document.querySelector(".toggle-button .switch");const P=document.getElementById("ontop");const c=document.getElementById("sidebar");const i=document.getElementById("hide-sidebar");const a=document.getElementById("content");const s=document.querySelectorAll(".sections li a");const r={t:document.getElementById("home"),o:document.getElementById("contributors"),i:document.getElementById("android-projects"),l:document.getElementById("linux-projects"),u:document.getElementById("windows-projects")};const l={m:"https://i.ibb.co/z4W9zDG/share-icon.png"};const d=window.location.hash.substring(1);const _={},M=5;var z,m=0,L=0,u=[];window.addEventListener("load",function(){p()});B();document.querySelectorAll(".gcards").forEach(t=>{t.addEventListener("click",async function(t){const n=t.currentTarget.dataset.target;const e=t.currentTarget.dataset.json;const o=t.currentTarget.closest(".gcards-wrapper");let c=o.querySelector(".gcards-sections");if(!c){c=document.createElement("div");c.classList.add("gcards-sections");o.appendChild(c)}let i=document.getElementById(n);if(!i){i=document.createElement("div");i.id=n;i.classList.add("gcards-section");i.dataset.p=o.id;i.style.display="none";i.innerHTML=`
    <button class='go-back'>&#8592;</button>
    <div class='app-main-container'>
        <div class='app-search-filter-bar'>
            <input class='app-search-bar' placeholder='Search by title or description...' type='text'/>
            <div class='app-filter'>
                <select class='author-filter'></select>
            </div>
            <div class='app-filter'>
                <select class='category-filter'></select>
            </div>
            <div class='app-filter'>
                <select class='year-filter'></select>
            </div>
        </div>
        <div class='gcards-dynamic'></div>
        
        <div class='loading-spinner' style='display:none;'>
            <img src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'/>
        </div>
    </div>
`;c.appendChild(i);v(n);await Q(e,i);i.querySelector(".go-back").addEventListener("click",function(){i.classList.remove("active");setTimeout(()=>{i.style.display="none";const t=i.dataset.p;if(t){v(t)}},500)});const a=document.createElement("div");a.classList.add("app-window");a.innerHTML=`
    <button class='app-go-back'>&#8592;</button>
    <div class='hosted-window-content'>
    </div>
`;c.appendChild(a);a.querySelector(".app-go-back").addEventListener("click",function(){a.classList.remove("show");a.classList.add("hide");setTimeout(()=>{a.style.display="none"},300);window.scrollTo({top:L,behavior:"smooth"})})}else{v(n)}w()})});function W(){n.classList.remove("k2hide")}function p(){clearTimeout(z);n.classList.add("k2hide")}function F(){z=setTimeout(W,1e3)}function B(){for(const t in l){if(l.hasOwnProperty(t)){const n=new Image;n.src=l[t];l[t]=n}}}function X(e,o){const t=document.createElement("div");t.classList.add("app-section");t.innerHTML=`
<h1>${e.title}
<img class="share-btn" alt="Share"/>
<div class='rw-ui-container' data-title='${e.title}'></div>
</h1>
<div class='metadata'>
<span class='author clickable'>By ${e.author}</span>
<span class='category'>${e.category}</span>
<span class='year'>${new Date(e.date).getFullYear()}</span>
</div>
<p class='description'>${e.description}</p>
<div class='app-launcher-container' data-hosted='${e.dataHosted}'></div>
`;const n=t.querySelector(".share-btn");n.src=l["m"].src;n.addEventListener("click",()=>{const t=`#id=${encodeURIComponent(o)}&author=${encodeURIComponent(e.author)}&category=${encodeURIComponent(e.category)}&year=${new Date(e.date).getFullYear()}&title=${encodeURIComponent(e.title)}`;const n=`${window.location.origin}${window.location.pathname}${t}`;navigator.clipboard.writeText(n).then(()=>{N("URL Copied to Clipboard",false)})});const c=t.querySelector(".author");c.style.cursor="pointer";if(e.contact){c.addEventListener("click",()=>{window.open(e.contact,"_blank","noopener noreferrer")})}else{c.addEventListener("click",()=>{N(e.author+" did not add his contact",false)})}return t}async function Y(){const t=document.querySelectorAll(".app-launcher-container");const n=Array.from(t).map(async t=>{const n=t.getAttribute("data-hosted");if(n){await ct(n,t)}});await Promise.all(n)}function G(o,n){const c=o.querySelector(".app-search-bar");const l=o.querySelector(".author-filter");const d=o.querySelector(".category-filter");const u=o.querySelector(".year-filter");const t=[...new Set(n.map(t=>t.author))];const e=[...new Set(n.map(t=>t.category))];const i=[...new Set(n.map(t=>new Date(t.date).getFullYear()))];f(l,t);f(d,e);f(u,i);function a(){const i=c.value.toLowerCase();const a=l.value;const s=d.value;const r=u.value;const t=n.filter(t=>{const n=t.title.toLowerCase().includes(i)||t.description.toLowerCase().includes(i);const e=!a||t.author===a;const o=!s||t.category===s;const c=!r||new Date(t.date).getFullYear()===parseInt(r);return n&&e&&o&&c});const e=o.querySelector(".gcards-dynamic");e.innerHTML="";t.slice(0,m).forEach(t=>{const n=X(t,o.id);e.appendChild(n)});Y();if(typeof RW!=="undefined")RW.render()}c.addEventListener("input",a);l.addEventListener("change",a);d.addEventListener("change",a);u.addEventListener("change",a)}function f(e,t){e.innerHTML='<option value="">All</option>';t.forEach(t=>{const n=document.createElement("option");n.value=t;n.textContent=t;e.appendChild(n)})}function J(e,o){if(!u||u.length===0){o.innerHTML=`
<div class="gcards-dynamic center" style="height: 200px; display: flex; align-items: center; justify-content: center;">
<div>
    <div style="font-size: 3rem; text-align: center; margin-bottom: 10px;">👋</div>
    <div style="font-size: 1.2rem;">No content at the moment</div>
</div>
</div>`;return}const t=u.slice(m,m+M);t.forEach(t=>{const n=X(t,e.id);o.appendChild(n)});m+=M;if(m>=u.length){H(e)}else{q(e)}}function q(t){const n=t.querySelector(".loading-spinner");n.style.display="block"}function H(t){const n=t.querySelector(".loading-spinner");n.style.display="none"}function K(t,n){const e=t.querySelector(".app-main-container");e.addEventListener("scroll",()=>{if(e.scrollHeight-e.scrollTop<=e.clientHeight+100){J(t,n)}})}async function Q(t,n){const e=n.querySelector(".gcards-dynamic");try{F();const c=await fetch(t);const i=await c.json();u=i.sort((t,n)=>new Date(n.date)-new Date(t.date));m=0;e.innerHTML="";J(n,e);G(n,i);K(n,e);await Y();if(typeof RW!=="undefined")await RW.render()}catch(o){console.error("Error al cargar el JSON:",o)}finally{p()}}var h=!g();const V=(new Date).getHours();if(!h)b();i.addEventListener("click",nt);t.addEventListener("click",()=>{e.classList.toggle("theme-dark");o.classList.toggle("light-mode");o.classList.toggle("dark-mode");Z(e.classList.contains("theme-dark")?"dark":"light")});Z("light");if((V>=18||V<6)&&!e.classList.contains("theme-dark"))t.click();if(d){et(d);w()}function Z(t){const n=document.getElementById("highlight-style");n.href=t==="dark"?"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.css":"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.css"}function g(){return window.matchMedia("(max-width: 768px)").matches}function b(){i.textContent="▶"}function tt(){i.textContent="✖"}function nt(){if(g()){if(h){c.style.transform="translateX(-100%)";a.classList.remove("hidden");i.classList.remove("hide-sidebar-btn-mobile");b()}else{c.style.transform="translateX(0)";a.classList.add("hidden");i.classList.add("hide-sidebar-btn-mobile");tt()}}else{if(h){c.style.transform="translateX(-100%)";a.style.marginLeft="10px";b()}else{c.style.transform="translateX(0)";a.style.marginLeft=`var(--content-left)`;tt()}}h=!h}function w(){P.scrollIntoView({behavior:"smooth",h:"center"})}function v(t){const n=document.getElementById(t);const e=n.classList.contains("gcards-section");const o=n.dataset.p;document.querySelectorAll(".gcards-wrapper").forEach(t=>{t.style.display="none"});s.forEach(t=>t.classList.remove("active"));for(const c in r){const i=r[c];if(!i.classList.contains("gcards-section")||!i.classList.contains("active")){i.classList.remove("active");i.style.display="none"}}if(e&&o){const a=document.getElementById(o);a.style.display="block";document.querySelector(`[data-section="${o}"]`).classList.add("active")}else{document.querySelector(`[data-section="${t}"]`).classList.add("active")}if(n){n.style.display="block";setTimeout(()=>{n.classList.add("active")},10);if(h&&g())nt()}window.location.hash=t}function y(t){const n=document.createElement("div");n.textContent=t;return n.innerHTML}function et(t){var n=t,i,a,s,r;if(t.includes("=")){const o=new URLSearchParams(t);n=y(o.get("id"));i=y(o.get("author"));a=y(o.get("category"));s=y(o.get("year"));r=y(o.get("title"))}else{const c=document.getElementById(n);if(c){v(n);return}}const e=document.querySelector(`.gcards[data-target='${n}']`);if(e){e.click();ot(n,function(t){if(i){const e=t.querySelector(".author-filter");e.value=i}if(a){const o=t.querySelector(".category-filter");o.value=a}if(s){const c=t.querySelector(".year-filter");c.value=s}if(r){var n=t.querySelector(".app-search-bar");n.value=r;n.dispatchEvent(new Event("input"))}})}else{console.error("Undefined hash: "+n)}}function ot(t,c){const i=document.getElementById(t);if(!i){console.error("Section not found: "+t);return}const a=new MutationObserver(function(t){const n=i.querySelector(".author-filter");const e=i.querySelector(".category-filter");const o=i.querySelector(".year-filter");if(n&&e&&o){a.disconnect();c(i)}});a.observe(i,{childList:true,subtree:true})}s.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.dataset.section;v(n);w()})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{const t=window.scrollY>100;if(t){n.classList.add("show")}else{n.classList.remove("show")}});n.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});const k={g:{url:"https://cdn-icons-png.flaticon.com/512/888/888108.png",v:null},k:{url:"https://cdn-icons-png.flaticon.com/512/888/888108.png",v:null},$:{url:"https://freepngimg.com/save/91436-blue-electric-icons-question-mark-computer/512x512",v:null},download:{url:"https://cdn-icons-png.flaticon.com/512/9205/9205302.png",v:null}};async function ct(t,n){try{const o=await fetch(t);const c=await o.json();it(c,n)}catch(e){console.error("Error fetching GitHub data:",e)}}function it(c,i){i.innerHTML="";c.forEach(t=>{if(t.type==="file"&&t.name.endsWith(".md")){const n=t.name.split(".md")[0];const e=at(n,c);const o=t.download_url;rt(n,e,o,i)}})}function at(n,t){const e=t.find(t=>t.name===`${n}.png`);if(e){return e.download_url}else{const o=st(n);if(o){return o.src}return null}}function st(t){const n=t.toLowerCase();if(k[n]){if(!k[n].v){const e=new Image;e.src=k[n].url;k[n].v=e}return k[n].v.cloneNode()}return null}function rt(t,n,e,o){const c=document.createElement("div");c.className="app-icon";let i;if(n){i=document.createElement("img");i.src=n}else{const s=st(t);if(s){i=s}else{i=document.createElement("div");i.className="app-text-icon";i.dataset.C=t.charAt(0).toUpperCase()}}const a=document.createElement("p");a.textContent=t;c.appendChild(i);c.appendChild(a);c.addEventListener("click",()=>lt(e,o));o.appendChild(c)}function lt(t,n){const e=n.closest(".gcards-sections");const o=e.querySelector(".app-window");const c=o.querySelector(".hosted-window-content");L=window.scrollY||document.documentElement.scrollTop;o.classList.remove("hide");o.style.display="block";setTimeout(()=>{o.classList.add("show")},10);c.innerHTML="";F();fetch(t).then(t=>t.text()).then(t=>{const n=window.markdownit({j:false,T:true,D:true,A:true}).use(markdownItAttrs,{I:"{",O:"}",S:["class","style","href","target","data-download-url"]});const e=n.render(t);c.innerHTML=`<div class="markdown">${e}</div>`;dt(c);gt();w();p()})["catch"](t=>{console.error("Error loading markdown:",t);c.innerHTML="<p>Error loading content.</p>";w();p()})["finally"](()=>{p()})}function dt(t){const n=t.querySelectorAll("pre code");n.forEach(t=>{hljs.highlightBlock(t)})}class ut{constructor(t={}){this.R=t.R;this.U=t.U;this.lang=t.lang||document.documentElement.lang||"en"}N({P:n,text:e}){let t=document.createElement("div");t.className="hljs-toolbar";let o=n.result?.language||n.dataset.language||"Plaintext";let c=document.createElement("span");c.className="hljs-lang-label";c.textContent=o.toUpperCase();t.appendChild(c);let i=Object.assign(document.createElement("button"),{innerHTML:$[this.lang]?.[0]||"Copy",className:"hljs-copy-button"});i.dataset._=false;t.appendChild(i);n.parentElement.classList.add("hljs-copy-wrapper");n.parentElement.insertBefore(t,n);i.onclick=()=>{if(!navigator.clipboard)return;let t=e;if(this.R&&typeof this.R==="function"){t=this.R(e,n)||e}navigator.clipboard.writeText(t).then(()=>{i.innerHTML=$[this.lang]?.[1]||"Copied!";i.dataset._=true;setTimeout(()=>{i.innerHTML=$[this.lang]?.[0]||"Copy";i.dataset._=false},2e3)}).then(()=>{if(typeof this.U==="function")return this.U(t,n)})}}}if(typeof module!="undefined"){module.exports=ut}const $={M:["Copy","Copied!","Copied to clipboard"],L:["Copiar","&#161;Copiado!","Copiado al portapapeles"]};hljs.addPlugin(new ut);const mt=document.getElementById("download-container");const x=document.getElementById("upload-form-container");const pt=document.querySelectorAll(".download-button");const C=document.getElementById("overlay");const ft=document.getElementById("close-overlay");const j=document.getElementById("timer");const ht=document.getElementById("ad-container");const T=document.getElementById("clickme-container");let D=5;ft.textContent="✖";function gt(){document.querySelectorAll("[data-download-url]").forEach(c=>{if(!c.classList.contains("download-button")){c.classList.add("download-button")}c.addEventListener("click",t=>{t.preventDefault();const n=atob(y(c.getAttribute("data-download-url")));mt.style.display="block";C.style.display="flex";if(bt(T)){const o=T.querySelector("iframe").contentWindow;T.style.display="block";if(o){o.addEventListener("click",function(t){T.style.display="none"})}else{T.style.display="none"}}else{ht.innerHTML=`
    <img src="https://i.ibb.co/Bfhc9xR/preocupacion.png" style="max-width: 100px; height: auto;" alt="Error">
    <p style="text-align: center;">Oops! Could not load the ad</p>
`}const e=setInterval(()=>{D--;if(D>0){j.textContent=`Wait ${D} seconds...`}else{clearInterval(e);j.innerHTML=`<a class='download-button' href='${n}' target='_blank'>DOWNLOAD</a>`}},1e3)})})}function bt(t){return t.querySelector("iframe")}function wt(t){return t.querySelector("img")}function vt(t){const n=t.querySelector("iframe");if(n){const e=n.contentDocument||n.contentWindow.document;e.getElementsByTagName("img")[0].click()}}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("overlay2");const n=document.getElementById("idk-btn-close");const e=document.getElementById("idk-buttons");const o=document.getElementById("container-362c0c07f4e7f3e5dcd16daeb34ac9ce");const c=3e3;const i=1e3;const a=12e5;const s=3;let r=false;let l=0;let d=Date.now();let u=false;function m(){if(l<s&&!u){if(!o.hasChildNodes()){o.innerHTML=`<h1>&#161;Please disable your Adblocker!</h1><p>Ads are a way to support the maintenance and development of new projects.</p>`}t.style.display="flex";l++;d=Date.now();u=true}}function p(){t.style.display="none";u=false}function f(){if(u){p()}else{m()}}function h(){const t=Date.now();if(t-d>=a&&l<s){m()}}if(r){setTimeout(m,c)}n.addEventListener("click",p);document.addEventListener("visibilitychange",function(){if(document.hidden){setTimeout(()=>{if(document.hidden&&l<s){m()}},i)}});setInterval(h,6e4)});function yt(){C.style.display="none";mt.style.display="none";x.style.display="none";D=5;j.textContent=`Wait ${D} seconds...`}ft.addEventListener("click",yt);const kt=document.getElementById("search-input");const E=document.getElementById("search-results");kt.addEventListener("input",()=>{const n=y(kt.value.toLowerCase());E.innerHTML="";document.querySelectorAll(".highlight").forEach(t=>{const n=t.parentNode;const e=document.createTextNode(t.textContent);n.replaceChild(e,t);n.normalize()});if(n.length>0){E.style.display="block";for(const[o,t]of Object.entries(r)){const e=[];const c=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,null,false);while(c.nextNode()){const i=c.currentNode;const a=i.textContent.toLowerCase();let t=a.indexOf(n);while(t!==-1){e.push({node:i,start:t,end:t+n.length});t=a.indexOf(n,t+n.length)}}e.forEach(e=>{const t=document.createElement("div");t.classList.add("result-item");const n=e.node.textContent.substring(Math.max(0,e.start-30),Math.min(e.node.textContent.length,e.end+30));t.innerHTML=`<h4>${o}</h4><p>...${n}...</p>`;t.addEventListener("click",()=>{document.querySelectorAll(".highlight").forEach(t=>{const n=t.parentNode;const e=document.createTextNode(t.textContent);n.replaceChild(e,t);n.normalize()});v(o);setTimeout(()=>{const t=document.createRange();t.setStart(e.node,e.start);t.setEnd(e.node,e.end);const n=document.createElement("span");n.className="highlight";t.surroundContents(n);n.scrollIntoView({behavior:"smooth",h:"center"})},100)});E.appendChild(t)})}}else{E.style.display="none"}});let A="";let I="";let O="";let S=null;let R="";document.getElementById("amount-value").addEventListener("blur",function(t){let n=t.target;let e=parseFloat(n.value);if(isNaN(e)||e<1){e=1}n.value=e.toFixed(2)});paypal.Buttons({W:function(t,n){return n.order.create({F:[{B:{value:document.getElementById("amount-value").value}}]})},X:function(t,n){return n.order.capture().then(function(t){const n=t.F[0].B.value;if(n>=5){U("Thank you for your support!",n,t,true)}else{N("Thank you very much for the support!")}})},Y:function(t){N("There was an error.",false)}}).render("#paypal-container");function U(t="",o="",c={},i=false){const n=y(t);const e=y(A);const a=y(I);x.innerHTML=`
<h2>${n}</h2>
<div id="upload-area" class="upload-area">
<span id="upload-label">${O?O:"Select an image<br/>(jpg, png, gif)<br/><br/>Max-size: 10MB"}</span>
<input type="file" accept="image/*" id="upload-image" style="display: none;" />
</div>
<input type="text" placeholder="Your Name" id="contributor-name" value="${e}" maxlength="30" />
<textarea placeholder="A phrase that represents you in 30 characters." id="contributor-message" maxlength="30">${a}</textarea>
<br/>
<button id="submit-button">Submit</button>
<button id="cancel-button">I don't want it</button>
`;x.style.display="block";C.style.display="flex";document.getElementById("upload-area").addEventListener("click",function(){document.getElementById("upload-image").click()});document.getElementById("upload-image").addEventListener("change",function(t){S=t.target.files[0];const n=10*1024*1024;if(S.size>n){N("File is too large! Max size is 10MB.",i,o,c);return}const e=new FileReader;e.onload=function(t){O=y(S.name);R=t.target.result;document.getElementById("upload-label").textContent=O};e.readAsDataURL(S)});document.getElementById("submit-button").addEventListener("click",function(t){t.preventDefault();A=document.getElementById("contributor-name").value.trim();I=document.getElementById("contributor-message").value.trim();if(!A||!I||!S){N("Please complete all fields.",i,o,c);return}Ct(A,I,R,c,o,i,o,c)});document.getElementById("cancel-button").addEventListener("click",yt)}async function $t(t,n,e,o,c,i){const a=new FormData;a.append("image",e);try{const r=await fetch("https://api.imgbb.com/1/upload?key=ccd85d9d78a357a0f8a3131cbbeacd56",{method:"POST",body:a});if(!r.ok){throw new Error("Error uploading image")}const l=await r.json();const d=y(l.data.url);const u=`
Name: ${y(t)}
Message: ${y(n)}
Image URL: ${d}
Transaction ID: ${y(o.id)}
Payer Name: ${y(o.J.name.G)} ${y(o.J.name.q)}
Transaction Amount: $${y(c)}
`;const m={H:"service_veamd1e",K:"template_3b87c8q",V:"BYzFph3zk01yzS2zI",Z:{message:u.trim()}};const p=await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",body:JSON.stringify(m),headers:{tt:"application/json"}});if(!p.ok){throw new Error("Error sending email")}N("Successfully. The security review may take 1-4 days.",false);A="";I="";O="";S=null;R=""}catch(s){if(s.message==="Error uploading image"){N("There was an error uploading your image. Please try again.",i,c,o)}else if(s.message==="Error sending email"){N("There was an error contacting the server. Please try again.",i,c,o)}else{N("An unexpected error occurred. Please try again.",i,c,o)}console.error("Error processing request:",s)}}async function xt(t=""){x.innerHTML=`
<h2>${y(t)}</h2>
<p>$</p><input type="number" placeholder="0" id="amount-value"/>
<br/>
<button id="submit-amount-button">DONATE</button>
`;x.style.display="block";C.style.display="flex";return new Promise((e,o)=>{document.getElementById("submit-amount-button").addEventListener("click",function(t){t.preventDefault();var n=Number(document.getElementById("amount-value").value);if(!n||n<=0){N("Invalid amount");o("Invalid amount")}else{e(n)}})})}function Ct(t,n,e,o,c,i){const a=y(e);const s=y(t);const r=y(n);const l={title:s,description:r,nt:a};const d=Dt(l);x.innerHTML="<br/>";x.appendChild(d);const u=document.createElement("button");u.id="confirm-button";u.textContent="Confirm";u.addEventListener("click",function(){$t(t,n,S,o,c,i)});const m=document.createElement("button");m.id="edit-button";m.textContent="Edit";m.addEventListener("click",function(){U("",c,o,i)});x.appendChild(u);x.appendChild(m)}function N(t,n=false,e="",o={}){const c=y(t);x.innerHTML=`
<h2>${c}</h2>
${n?'<button id="return-button">GO BACK</button>':""}
`;x.style.display="block";if(n){document.getElementById("return-button").addEventListener("click",function(){U("",e,o,n)})}C.style.display="flex"}const jt={id:"5O190127TN364715T",status:"COMPLETED",F:[{B:{et:"USD",value:"3.5"}}],J:{name:{G:"John",q:"Doe"},ot:"johndoe@example.com",ct:"DUFRQ8GWYMJXC"}};const Tt=[{title:"Contributor 1",description:"A phrase to say to the world!",nt:"https://i.ibb.co/RY5YP9b/2d-mario-running.gif"},{title:"Contributor 2",description:"A phrase to say to the world!",nt:"https://via.placeholder.com/400x400"},{title:"Contributor 3",description:"A phrase to say to the world!",nt:"https://via.placeholder.com/400x400"},{title:"Contributor 4",description:"A phrase to say to the world!",nt:"https://via.placeholder.com/400x400"}];function Dt(t){const n=document.createElement("div");n.classList.add("contributors-card");n.innerHTML=`
<img src="${t.nt}" alt="${t.title}">
<div class="contributors-card-content">
<h3>${t.title}</h3>
<p>${t.description}</p>
</div>
`;n.addEventListener("click",function(){if(this.classList.contains("hide-content")){this.classList.remove("hide-content")}else{this.classList.add("hide-content")}});return n}function Et(t){const e=document.getElementById("gallery-container");e.innerHTML="";t.forEach(t=>{const n=Dt(t);e.appendChild(n)})}Et(Tt);