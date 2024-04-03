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
