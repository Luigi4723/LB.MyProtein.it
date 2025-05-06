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

});


document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.search-bar');
  const products = document.querySelectorAll('.product');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    products.forEach(product => {
      const title = product.querySelector('h2').textContent.toLowerCase();

      if (title.includes(query)) {
        product.style.removeProperty('display'); // ripristina il display originale
      } else {
        product.style.display = 'none';
      }
    });
  });
});



const GNEWS_API_KEY = 'a828712fcda5a2a155a28be600517b59'; //  Inserisci la tua chiave qui
const GNEWS_ENDPOINT = `https://gnews.io/api/v4/search?q=fitness&lang=it&country=it&max=5&apikey=${GNEWS_API_KEY}`;
async function fetchNews() {
  const newsList = document.getElementById('news-list');
  try {
    const res = await fetch(GNEWS_ENDPOINT);
    const data = await res.json();
    console.log(data); // log per debug
    if (!data.articles) throw new Error('Nessun articolo ricevuto');
    newsList.innerHTML = '';
    data.articles.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${article.url}" target="_blank">${article.title}</a>
        <p>${new Date(article.publishedAt).toLocaleDateString('it-IT')}</p>
      `;
      newsList.appendChild(li);
    });
  } catch (error) {
    console.error('Errore GNews:', error);
    newsList.innerHTML = '<li>Errore durante il caricamento delle notizie.</li>';
  }
}
fetchNews();
setInterval(fetchNews, 300000); // aggiorna ogni 5 minuti


const API_KEY = '86afa08bedd71840399d6b0b23ea85e9';  // Inserisci API key Fixer

document.getElementById('convert-btn').addEventListener('click', () => {
  const targetCurrency = document.getElementById('currency').value;

  fetch(`https://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=${targetCurrency}`)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const rate = data.rates[targetCurrency];
        const prices = document.querySelectorAll('.price');

        prices.forEach(price => {
          const eurValue = parseFloat(price.getAttribute('data-eur'));
          const convertedValue = (eurValue * rate).toFixed(2);
          price.textContent = `${convertedValue} ${targetCurrency}`;
        });
      } else {
        alert('Errore nella conversione: ' + data.error.type);
      }
    })
    .catch(error => {
      console.error('Errore API:', error);
      alert('Errore nella richiesta alla Fixer API.');
    });
});

