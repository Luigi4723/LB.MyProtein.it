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


document.addEventListener('DOMContentLoaded', () => {
    // ===== CHATBOT OPENAI =====
    const apiKey = localStorage.getItem('openai_key');//sostituire apikey
    const sendBtn  = document.getElementById('sendBtn');
    const userInput= document.getElementById('userInput');
    const chatBox  = document.getElementById('chatBox');
  
    sendBtn.addEventListener('click', async () => {
      const userMessage = userInput.value.trim();
      if (!userMessage) return;
      appendMessage('Tu', userMessage);
      userInput.value = '';
  
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
          })
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const botReply = data.choices[0].message.content.trim();
        appendMessage('Bot', botReply);
      } catch (err) {
        console.error(err);
        appendMessage('Bot', 'Ops! Qualcosa è andato storto. Riprova più tardi.');
      }
    });
  
    function appendMessage(sender, text) {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${sender}:</strong> ${text}`;
      chatBox.appendChild(p);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  
    // ===== NEWSLETTER MAILERLITE (via Make.com webhook) =====
    const overlay       = document.getElementById('overlay');
    const newsletterBox = document.getElementById('newsletterBox');
    const closeBtn      = document.getElementById('closeNewsletter');
    const form          = document.getElementById('newsletterForm');
    const emailInput    = document.getElementById('emailInput');
    const responseBox   = document.getElementById('newsletterResponse');
    let   inactivityTimer;
  
    // inizialmente nascosti
    overlay.classList.remove('show');
    newsletterBox.classList.remove('show');
  
    // Mostra popup + overlay con fade-in
    function showPopup() {
      overlay.classList.add('show');
      newsletterBox.classList.add('show');
    }
  
    // Nascondi popup + overlay
    function hidePopup() {
      overlay.classList.remove('show');
      newsletterBox.classList.remove('show');
    }
  
    // Timer inattività di 10s
    function resetTimer() {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(showPopup, 10000);
    }
    ['mousemove','keydown','scroll','click'].forEach(evt =>
      window.addEventListener(evt, resetTimer)
    );
    resetTimer();
  
    // Chiudi popup
    closeBtn.addEventListener('click', () => {
      hidePopup();
      clearTimeout(inactivityTimer);
    });
    overlay.addEventListener('click', () => {
      hidePopup();
      clearTimeout(inactivityTimer);
    });
  
    // Invia iscrizione newsletter
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email) {
        responseBox.textContent = 'Inserisci un\'email valida.';
        responseBox.style.color = 'red';
        return;
      }
      responseBox.textContent = 'Invio in corso…';
      responseBox.style.color = '#000';
  
      try {
        const res = await fetch('https://hook.eu2.make.com/8d6jbatifpzqt9nsu8xui03yz8s7tgeo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email})
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        responseBox.textContent = '✅ Iscrizione avvenuta con successo!';
        responseBox.style.color = 'green';
        form.reset();
      } catch (err) {
        console.error(err);
        responseBox.textContent = '❌ Si è verificato un errore. Riprova.';
        responseBox.style.color = 'red';
      }
    });
  });
  