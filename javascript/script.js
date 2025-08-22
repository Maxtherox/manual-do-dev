// 🔎 Filtro de busca
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("dt").innerText.toLowerCase();
    const desc = card.querySelector("dd").innerText.toLowerCase();

    if (title.includes(query) || desc.includes(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// 🌙 Alternar Tema
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
