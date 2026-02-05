<html><head></head><body style="overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;"><div>const heartBtn = document.getElementById("heartBtn");</div><div>const surprise = document.getElementById("surprise");</div><div><br></div><div>heartBtn.addEventListener("click", () =&gt; {</div><div>&nbsp; &nbsp; surprise.style.display = "block";</div><div>&nbsp; &nbsp; heartBtn.style.display = "none";</div><div>&nbsp; &nbsp; document.body.style.background = "linear-gradient(to right, #ff758c, #ff7eb3)";</div><div>&nbsp; &nbsp; alert("Afsara, I love you endlessly! 💖");</div><div>});</div><div><br></div></body></html>
const btn = document.getElementById("loveBtn");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  alert("You are the best thing that ever happened to me 💖");
  music.play();
  createHearts();
});

function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}
