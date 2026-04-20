
// Falling hearts
(function(){
  const layer = document.querySelector(".heart-layer");
  if(!layer) return;

  const hearts = ["💗","💖","💕","💞","💘","💓","🎀"];
  function spawn(){
    const el = document.createElement("div");
    el.className = "heart";
    el.textContent = hearts[Math.floor(Math.random()*hearts.length)];
    el.style.left = Math.random()*100 + "vw";
    el.style.animationDuration = (4 + Math.random()*4) + "s";
    el.style.fontSize = (14 + Math.random()*18) + "px";
    el.style.opacity = (0.4 + Math.random()*0.6).toFixed(2);
    layer.appendChild(el);

    setTimeout(()=> el.remove(), 9000);
  }

  setInterval(spawn, 260);
})();

// Active nav highlight
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".links a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });
})();
