document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("banner");
  const bannerImage = document.getElementById("bannerImage");
  const videoPlayer = document.getElementById("videoPlayer");
  const verTrailerButton = document.getElementById("verTrailerButton");
  const topo = document.querySelector(".topo");
  const nextSection = document.getElementById("nextSection");
  let videoPlaying = false;

  // Ouvir botão "Ver Trailer"
  verTrailerButton.addEventListener("click", function() {
    if (!videoPlaying) {
      // Troca imagem e video
      bannerImage.style.display = "none";
      videoPlayer.style.display = "block";
      // Play video
      videoPlayer.play();
      videoPlaying = true;
      // Troca icone
      verTrailerButton.innerHTML = '<i class="fas fa-pause"></i> Pausar Trailer';
      // Ajusta a altura
      topo.style.height = "auto";
    } else {
      // Troca video e imageem
      videoPlayer.pause();
      bannerImage.style.display = "block";
      videoPlayer.style.display = "none";
      videoPlaying = false;
      // troca icone
      verTrailerButton.innerHTML = '<i class="fas fa-play"></i> Ver Trailer';
      // Altera topo para 549px
      topo.style.height = "549px";
    }
  });

  // Adiciona um ouvinte de evento para pausar o vídeo
  videoPlayer.addEventListener("pause", function() {
    // Mostra a imagem e esconde o vídeo
    bannerImage.style.display = "block";
    videoPlayer.style.display = "none";
    videoPlaying = false;
    // Altera o ícone para play
    verTrailerButton.innerHTML = '<i class="fas fa-play"></i> Ver Trailer';
    // Reseta a altura da topo para 549px
    topo.style.height = "549px";
  });

  // Evento para play início
  videoPlayer.addEventListener('play', () => {
    // Reajuste da altura
    nextSection.style.marginTop = 0;
  });

  // Evento para play pausa
  videoPlayer.addEventListener('pause', () => {
    // Define a altura da próxima seção para 0
    nextSection.style.marginTop = '0';
  });
});

