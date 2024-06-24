

// gallery
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");
    const caption = document.getElementById("caption");
    const close = document.getElementById("close");

    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            console.log('workin')
            lightbox.style.display = "block";
            close.style.display = 'block'
            lightboxContent.src = this.srcset;
            caption.textContent = this.alt;
        });
    });

    close.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target !== lightboxContent && event.target !== caption) {
            lightbox.style.display = "none";
        }
    });
});

