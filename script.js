function createEstrellas() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      
      const estrella = document.createElement("div");
      estrella.className = "estrella";
      estrella.style.width = ".1px";
      estrella.style.height = ".1px";
      estrella.style.top = Math.random() * 100 + "%";
      estrella.style.left = Math.random() * 100 + "%";
      container.appendChild(estrella);
    }
  }
  createEstrellas();
