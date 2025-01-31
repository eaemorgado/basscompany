// Selecionando os elementos
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

// Função para alternar o menu aberto/fechado
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open"); // Abre/fecha o menu
    menuToggle.classList.toggle("open"); // Alterna o ícone hambúrguer para X
});