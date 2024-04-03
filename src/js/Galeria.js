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
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");
    
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;

    lightbox.style.display = "none";
    document.body.classList.remove("modal-open");
}

  