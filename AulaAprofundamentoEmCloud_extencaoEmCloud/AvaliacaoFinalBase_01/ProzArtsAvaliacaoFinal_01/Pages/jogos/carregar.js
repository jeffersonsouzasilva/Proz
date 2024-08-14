 const verMaisJogos = document.getElementById('verMaisJogos');
 const maisJogosDiv = document.getElementById('maisJogos');

 verMaisJogos.addEventListener('click', () => {    
     maisJogosDiv.classList.toggle('hidden');    
     verMaisJogos.classList.toggle('hidden');
 });
