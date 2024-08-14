const valoresContainers = [...document.querySelectorAll('.cardsValores')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

valoresContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




// const scrollableCards = document.querySelector('.scrollable-cards');
// const scrollbar = document.querySelector('.scrollbar');

// const nextBtn = document.querySelector('.nxt-btn');
// const prevBtn = document.querySelector('.pre-btn'); // If you have a previous button

// nextBtn.addEventListener('click', nextCard);
// prevBtn.addEventListener('click', prevCard); // If you have a previous button


// function nextCard() {
//     // Check if the scrollable container can scroll further to the right
//     if (scrollableCards.scrollWidth > scrollableCards.scrollLeft + scrollableCards.clientWidth) {
//       scrollableCards.scrollLeft += 300; // Adjust the scroll amount as needed
//     }
//   }
  
//   function prevCard() {
//     // Check if the scrollable container can scroll further to the left
//     if (scrollableCards.scrollLeft > 0) {
//       scrollableCards.scrollLeft -= 300; // Adjust the scroll amount as needed
//     }
//   }




// document.querySelector('.nxt-btn').addEventListener('click', () => {
//     const cardsContainer = document.querySelector('.cardsValores');
//     cardsContainer.scrollLeft += 320; // Ajuste o valor conforme a largura dos cartões
// });

// document.querySelector('.pre-btn').addEventListener('click', () => {
//     const cardsContainer = document.querySelector('.cardsValores');
//     cardsContainer.scrollLeft -= 320; // Ajuste o valor conforme a largura dos cartões
// });




let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 0;

loadMoreBtn.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(
      ".noticiasRecentes .cardsNoticias .cardNoticia"
    ),
  ];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};

// <!-- //quero acrescentar load more usando Java Script e mostre o clone dos 3 cartõesNoticia ao clicar no load more:
// let loadMoreBtn = document.querySelector("#load-more");
// let currentItem = 0;

// loadMoreBtn.onclick = () => {
//   let boxes = [
//     ...document.querySelectorAll(
//       ".noticiasRecentes .cardsNoticias .cardNoticia"
//     ),
//   ];
//   for (var i = currentItem; i < currentItem + 3; i++) {
//     boxes[i].style.display = "inline-block";
//   }
//   currentItem += 3;

//   if (currentItem >= boxes.length) {
//     loadMoreBtn.style.display = "none";
//   }
// };
//-->

// <!-- quero acrescentar load more usando Java Script e mostre o clone dos 3 cartõesNoticia ao clicar no load more: -->
//
//   // Select the container and the load more button
//   const cardNoticiasContainer = document.getElementById("cardNoticiasContainer");
//   const loadMoreButton = document.getElementById("load-more");

//   // Set the number of initially loaded cardNoticia elements
//   const initialLoadCount = 3;

//   // Clone the first initialLoadCount cardNoticia elements and append them to the container
//   for (let i = 0; i < initialLoadCount; i++) {
//     const clone = cardNoticiasContainer.children[i].cloneNode(true);
//     cardNoticiasContainer.appendChild(clone);
//   }

//   // Add a click event listener to the load more button
//   loadMoreButton.addEventListener("click", () => {
//     // Clone the first initialLoadCount cardNoticia elements and append them to the container
//     for (let i = 0; i < initialLoadCount; i++) {
//       const clone = cardNoticiasContainer.children[i].cloneNode(true);
//       cardNoticiasContainer.appendChild(clone);
//     }

//     // Disable the load more button after clicking
//     loadMoreButton.disabled = true;
//   });
//



// <!-- <script>
// const valoresContainers = [...document.querySelectorAll(".cardsValores")];
// const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
// const preBtn = [...document.querySelectorAll(".pre-btn")];

// valoresContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth;
//   });

//   preBtn[i].addEventListener("click", () => {
//     item.scrollLeft -= containerWidth;
//   });
// });
// </script> -->

// <!-- barra de rolagem  1-->
// <!-- <script>
// const valoresContainers = [...document.querySelectorAll(".cardsValores")];
// const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
// const preBtn = [...document.querySelectorAll(".pre-btn")];

// valoresContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth;
//   });

//   preBtn[i].addEventListener("click", () => {
//     item.scrollLeft -= containerWidth;
//   });
// });
// </script> -->