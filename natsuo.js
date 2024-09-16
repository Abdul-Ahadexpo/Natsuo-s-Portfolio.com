// new-hw.js

document.addEventListener("DOMContentLoaded", function () {
  const abilities = {
    1: "1. Has all knowledge/Can gain all knowledge",
    2: "2. Can Multiply anything by 1 trillion",
    3: "3. Can copy anything",
  };

  // Display abilities
  const abilitiesList = document.getElementById("abilities");
  for (let key in abilities) {
    let li = document.createElement("li");
    li.textContent = abilities[key];
    abilitiesList.appendChild(li);
  }

  // Get buttons and add event listeners
  const knowledgeButton = document.getElementById("knowledge");
  const copyButton = document.getElementById("copy");
  const multiplyButton = document.getElementById("multiply");

  // Falling text effect
  knowledgeButton.addEventListener("click", function () {
    const fallingText = document.createElement("div");
    fallingText.className = "falling-text";
    fallingText.textContent = generateRandomText();
    document.body.appendChild(fallingText);

    // Trigger the falling animation
    setTimeout(() => {
      fallingText.style.opacity = 1;
      fallingText.style.animation = "fall 3s linear forwards";
    }, 0);

    // Remove text after animation
    setTimeout(() => {
      document.body.removeChild(fallingText);
    }, 3000);

    // Automatically click the button 10 times over 4 seconds
    let clickCount = 0;
    const maxClicks = 10;
    const clickInterval = setInterval(() => {
      if (clickCount < maxClicks) {
        knowledgeButton.click();
        clickCount++;
      } else {
        clearInterval(clickInterval);
      }
    }, 400); // Click every 400ms
  });

  // Copy functionality
  copyButton.addEventListener("click", function () {
    document.body.classList.add("copy-active");
    document.addEventListener("click", function (event) {
      let textToCopy = "";
      if (event.target.tagName === "IMG") {
        textToCopy = event.target.src;
      } else if (
        event.target.tagName === "P" ||
        event.target.tagName === "H1" ||
        event.target.tagName === "H2" ||
        event.target.tagName === "H3"
      ) {
        textToCopy = event.target.textContent;
      }

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          alert("Copied to clipboard!");
        });
      }
    });
  });

  // Multiply functionality (just an example, replace with your actual functionality)
  multiplyButton.addEventListener("click", function () {
    alert("This power is under development!");
  });

  // Generate random text
  function generateRandomText() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomText = "";
    for (let i = 0; i < 100; i++) {
      randomText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomText;
  }
});
