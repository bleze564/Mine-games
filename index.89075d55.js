const e=document.createElement("h2");e.textContent="Футбол",document.body.appendChild(e);const t=document.createElement("div");t.classList.add("field"),document.body.appendChild(t);const a=document.createElement("img");a.classList.add("ball"),a.alt="М'яч",a.src="/football.png",t.appendChild(a),t.addEventListener("mousemove",(e=>{const n=t.getBoundingClientRect(),i=e.clientX-n.left-a.offsetWidth/2,c=e.clientY-n.top-a.offsetHeight/2,d=t.clientWidth-a.offsetWidth,o=t.clientHeight-a.offsetHeight;a.style.left=`${Math.max(0,Math.min(i,d))}px`,a.style.top=`${Math.max(0,Math.min(c,o))}px`}));const n=document.querySelector(".js-game"),i=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}].map((e=>`<li id=${e.id}>\n        <h2>${e.name}</h2>\n        </li>`));n.insertAdjacentHTML("afterend",i);
//# sourceMappingURL=index.89075d55.js.map
