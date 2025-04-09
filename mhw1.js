document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "immagini/start/sales2.jpg",
        "immagini/start/sales3.jpg",
        "immagini/start/sales4.jpg",
        "immagini/start/start_images.jpg",
    ];

    let currentIndex = 0;
    const imageContainer = document.querySelector(".image-conteiner");
    const image = imageContainer.querySelector(".custom-image");
    const leftArrow = imageContainer.querySelector(".arrow-btn.left");
    const rightArrow = imageContainer.querySelector(".arrow-btn.right");

    

    // Funzione per aggiornare l'immagine
    function updateImage() {
        // Verifica se currentIndex è nell'intervallo valido
        if (currentIndex < 0) {
            currentIndex = images.length - 1; 
            console.log(currentIndex); // Se l'indice è negativo, passa all'ultima immagine
        } else if (currentIndex >= images.length) {
            currentIndex = 0; 
            console.log(currentIndex); // Se si supera l'array, torna alla prima immagine
        }
        image.src = images[currentIndex]; // Aggiorna l'immagine con il percorso corretto
    }

    // Scorrimento verso sinistra
    leftArrow.addEventListener("click", () => {
        currentIndex--; // Riduci l'indice
        updateImage();   // Aggiorna l'immagine
    });

    // Scorrimento verso destra
    rightArrow.addEventListener("click", () => {
        currentIndex++; // Incrementa l'indice
        updateImage();   // Aggiorna l'immagine
    });

    // Inizializzare la prima immagine all'avvio della pagina
});
