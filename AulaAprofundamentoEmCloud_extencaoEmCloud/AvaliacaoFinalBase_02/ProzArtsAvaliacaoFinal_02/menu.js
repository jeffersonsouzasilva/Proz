// No seu arquivo script.js

document.addEventListener("DOMContentLoaded", function() {
  // Elementos do menu
  var jogosMenu = document.getElementById("jogosMenu");
  var dlcMenu = document.getElementById("dlcMenu");

  // Elementos de conteúdo
  var jogosContent = document.getElementById("jogosContent");
  var dlcContent = document.getElementById("dlcContent");

  // Função para mostrar conteúdo de jogos e ocultar conteúdo de DLC
  function mostrarJogos() {
    jogosContent.style.display = "grid";
    dlcContent.style.display = "none";
  }

  // Função para mostrar conteúdo de DLC e ocultar conteúdo de jogos
  function mostrarDLC() {
    jogosContent.style.display = "none";
    dlcContent.style.display = "grid";
  }

  // Adicionar eventos de clique aos menus
  jogosMenu.addEventListener("click", function() {
    mostrarJogos();
    // Adicione classes ativas aos elementos de menu conforme necessário
    jogosMenu.classList.add("active");
    dlcMenu.classList.remove("active");
  });

  dlcMenu.addEventListener("click", function() {
    mostrarDLC();
    // Adicione classes ativas aos elementos de menu conforme necessário
    dlcMenu.classList.add("active");
    jogosMenu.classList.remove("active");
  });

  // Por padrão, mostre o conteúdo de jogos quando a página é carregada
  mostrarJogos();
});
