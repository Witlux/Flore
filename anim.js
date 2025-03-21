// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te amo y más de lo que puedes imaginar", time: 5 },
  { text: "Te amo además como nunca nadie jamás lo hará", time: 12 },
  { text: "En esta canción, va mi corazón", time: 19},
  { text: "Amor más que amor es el nuestro y te lo vengo a dar", time: 25 },
  
  { text: "Te miro y más y más y más te quiero mirar", time: 33 },
  { text: "Te amo y sabrás puro sentimiento y no hay nada más", time: 39 },
  { text: "Y sueño llegar a tu alma tocar", time: 46 },
  { text: "Amor más que amor es el nuestro y te lo vengo a dar", time: 53 },

  { text: "Ruego a Dios tenerte a mi lado", time: 60 },
  { text: "Y entonces poderte abrazar", time:  68},
  { text: "Si no estás aquí algo falta", time:  74},
  { text: "Yo por ti pelearé hasta el final", time: 80 },

  { text: "Y sueño llegar a tu alma tocar", time: 103},
  { text: "Amor más que amor es el nuestro y te lo vengo a dar", time: 107 },

  { text: "Te amo ¡y más!", time: 115 },
  { text: "Te amo y sabrás que nadie como yo te amará", time:  122},
  { text: "En esta canción yo veo quien soy", time:  130},

  { text: "Amor más que amor es el mío y lo siento", time:  138},
  { text: "Amor más que amor es el tuyo y presiento", time:  139},
  { text: "Amor más que amor es el nuestro si tú me lo das", time: 142}
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 9
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Usamos el evento timeupdate para actualizaciones más eficientes
audio.addEventListener('timeupdate', updateLyrics);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
