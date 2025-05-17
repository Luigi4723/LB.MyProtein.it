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





/*menu a scomparsa*/
const menuData = {
  "Proteine": {
    columns: [
      {
        heading: "Proteine in polvere",
        links: [
          { text: "Proteine Whey", url: "#" },
          { text: "Proteine Isolate", url: "#" },
          { text: "Proteine vegane", url: "#" }
        ]
      },
      {
        heading: "Barrette e snak proteici",
        links: [
          { text: "Barrette proteiche", url: "#" },
          { text: "Snack proteici", url: "#" },
          { text: "Cookies proteici", url: "#" },
          { text: "Snack proteici", url: "#" }
        ]
      }
    ]
  },
  "Nutrizione": {
    columns: [
      {
        heading: "Creatina",
        links: [
          { text: "Creatina monoidrato", url: "#" },
          { text: "che cos'è la creatina?", url: "#" }
        ]
      },
      {
        heading: "Amminoacidi",
        links: [
          { text: "BCAA", url: "#" },
          { text: "EAA", url: "#" },
          {text: "L-Carnitina", url:"#"}
        ]
      },
      {
        heading: "Gestione del peso",
        links: [
          { text: "Perdita di peso", url: "#" },
          { text: "Aumento del peso", url: "#" },
          {text: "Frullati dietetici", url:"#"},
          {text: "Sostituti del pasto", url:"#"}
        ]
      },
      {
        heading: "Energia",
        links: [
          { text: "Intra-workout", url: "#" },
          { text: "Post-workout", url: "#" },
          { text: "Pre-workout", url: "#" }
        ]
      }
    ]
  },
   "Activewear": {
    columns: [
      {
        heading: "Abbigliamento Uomo",
        links: [
          { text: "Giacche", url: "#" },
          { text: "Felpe", url: "#" },
          { text: "T-shirt", url: "#" },
          { text: "Canotte", url: "#" },
          { text: "Pantaloncini", url: "#" },
          { text: "Capi termici", url: "#" }
        ]
      },
      {
        heading: "Abbigliamento Donna",
        links: [
          { text: "Giacche", url: "#" },
          { text: "Felpe", url: "#" },
          { text: "T-shirt & Top", url: "#" },
          { text: "Crop top", url: "#" },
          { text: "Reggiseni sportivi", url: "#" },
          { text: "Leggins", url: "#" },
          { text: "Joggers", url: "#" },
          { text: "Pantaloncini", url: "#" },
          { text: "Capi termici", url: "#" }
        ]
      },
      {
        heading: "Accessori",
        links: [
          { text: "Zaini e borsoni", url: "#" },
          { text: "Cappelli e guanti", url: "#" },
          {text: "Shaker e borracce", url:"#"},
          {text: "Asciugamani", url:"#"},
          {text: "Ciabatte", url:"#"}
        ]
      }
    ]
   },
  "Snack & Drink": {
    columns: [
      {
        heading: "Drink",
        links: [
          { text: "Energy drink", url: "#" },
          { text: "Bevande Proteiche", url: "#" }
        ]
      },
      {
        heading: "Barrette e snak proteici",
        links: [
          { text: "Barrette proteiche", url: "#" },
          { text: "Snack proteici", url: "#" },
          { text: "Cookies proteici", url: "#" },
          { text: "Snack proteici", url: "#" }
        ]
      }
    ]
  },
  "Alimentazione Vegana": {
    columns: [
      {
        heading: "Proteine",
        links: [
          { text: "Vegan Clear Protein", url: "#" },
          { text: "Proteine Vegane", url: "#" },
          { text: "Sostituti del pasto vegani", url: "#" }
        ]
      },
      {
        heading: "Barrette alimenti e drink",
        links: [
          { text: "Barrette proteiche vegane", url: "#" },
          { text: "Snack proteici vegani ", url: "#" },
          { text: "Cookies proteici vegani", url: "#" },
          { text: "Drink vegani", url: "#" }
        ]
      }
    ]
  },
  "Performance": {
    columns: [
      {
        heading: "Proteine",
        links: [
        ]
      },
      {
        heading: "Amminoacidi e Pre-Workout",
        links: [
        ]
      },
      {
        heading: "Recupero",
        links: [
        ]
      },
      {
        heading: "Linea Pro",
        links: [
        ]
      }
     ]
  },
      "Gestione del Peso": {
    columns: [
      {
        heading: "Definisci il tuo obbiettivo",
        links: [
        ]
      },
      {
        heading: "Perdita di peso",
        links: [
        ]
      },
      {
        heading: "Aumento del peso",
        links: [
        ]
      }
     ]
    },
  // Aggiungi le altre categorie se vuoi
};


function generateDropdownContent(name) {
  const content = document.getElementById("dropdown-content");
  content.innerHTML = "";
  const data = menuData[name];
  if (!data) return;

  data.columns.forEach(col => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("column");

    if (col.heading) {
      const heading = document.createElement("h3");
      heading.textContent = col.heading;
      colDiv.appendChild(heading);
    }

    col.links.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.text;
      colDiv.appendChild(a);
    });

    content.appendChild(colDiv);
  });
}

function showDropdown(name) {
  generateDropdownContent(name);
  document.getElementById("dropdown-menu").classList.add("active");
}

function hideDropdown() {
  document.getElementById("dropdown-menu").classList.remove("active");
}

const links = document.querySelectorAll(".nav-menu a");
links.forEach(link => {
  const name = link.textContent.trim();
  link.addEventListener("mouseover", () => {
    if (window.innerWidth > 768) showDropdown(name);
  });

  link.addEventListener("mouseout", () => {
    setTimeout(() => {
      if (!document.getElementById("dropdown-menu").matches(":hover")) {
        hideDropdown();
      }
    }, 200);
  });
});

const dropdown = document.getElementById("dropdown-menu");
dropdown.addEventListener("mouseover", () => dropdown.classList.add("active"));
dropdown.addEventListener("mouseout", () => hideDropdown());







function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");

  menu.classList.toggle("active");
  hamburger.classList.toggle("hidden");
}

function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
}


function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
}










/*API*/
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

