function forgive() {
  // Title change
  document.getElementById("title").innerText = "Thank You 🥹❤️";

  // Message change (THIS WAS THE ISSUE)
  document.getElementById("message").innerHTML =
    "Thank you meri motiii ❤️<br>" +
    "Tumne maaf kar diya,<br>" +
    "I promise, I’ll never take you for granted 🤍";

  // Hearts animation
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
