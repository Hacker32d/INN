// function enviarMensaje() {
//     // Obtén los valores del formulario
//     var nombre = document.getElementById('nombre').value;
//     var telefono = document.getElementById('telefono').value;
//     var mensaje = document.getElementById('mensaje').value;

//     // Crea el enlace de WhatsApp con los datos del formulario
//     var url = 'https://api.whatsapp.com/send?phone=' + 50576623177 + '&text=Hola, soy ' + nombre + '. ' + mensaje;

//    
// }



    function enviarMensaje() {
        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var mensaje = document.getElementById("mensaje").value;

        // Validar que los campos no estén vacíos
        if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return false;
        }

        // Validar el formato del correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return false;
        }

        // Validar el formato del número de teléfono (puedes ajustar según tus necesidades)
        var telefonoRegex = /^\d{8}$/; // Este ejemplo asume un número de 8 dígitos
        if (!telefonoRegex.test(telefono)) {
            alert("Por favor, introduce un número de teléfono válido.");
            return false;
        }

        // Si todas las validaciones pasan, el formulario se envía
                 // Crea el enlace de WhatsApp con los datos del formulario
        var url = 'https://api.whatsapp.com/send?phone=' +50581721759+ '&text=Hola, soy ' + nombre + '. ' + mensaje;
         // Redirige a WhatsApp
        window.location.href = url;
        alert("Mensaje enviado correctamente.");
        return true;
    }

  // Captura de eventos táctiles y evita el desplazamiento
  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  });

  function openLightbox(videoSrc, caption) {
    const lightbox = document.getElementById("light-box");
    const lightboxVideo = document.getElementById("lightbox-video");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const videoSource = document.getElementById("video-source");
    
    videoSource.src = videoSrc;
    lightboxVideo.load();
    lightboxCaption.textContent = caption;

    lightbox.style.display = "block";
    document.body.classList.add("modal-open");
}

function closeLightbox() {
    const lightbox = document.getElementById("light-box");
    const lightboxVideo = document.getElementById("lightbox-video");
    
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;

    lightbox.style.display = "none";
    document.body.classList.remove("modal-open");
}

//galeria
function openLightbox(imageSrc, caption) {
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('lightbox-caption').innerHTML = caption;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    lightbox.style.display = "none";
    document.body.classList.remove("body");
}

function openLightbox(videoSrc, caption) {
    const lightbox = document.getElementById("lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const videoSource = document.getElementById("video-source");
    
    videoSource.src = videoSrc;
    lightboxVideo.load();
    lightboxCaption.textContent = caption;

    lightbox.style.display = "block";
    document.body.classList.add("modal-open");
    document.body.style.overflow = 'hidden'; // Desactivar el scroll
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");
    
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;

    lightbox.style.display = "none";
    document.body.classList.remove("modal-open");
    document.body.style.overflow = 'auto'; // Reactivar el scroll
}

//swipper

const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const slideWidth = carousel.children[0].offsetWidth;
  carousel.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}


