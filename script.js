document.addEventListener('DOMContentLoaded', () => {
    // 1. التفاعل عند الضغط على زر التحميل
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadNotice = document.getElementById('downloadNotice');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            downloadNotice.textContent = 'Le téléchargement a commencé...';
            downloadNotice.style.display = 'block';

            setTimeout(() => {
                downloadNotice.style.display = 'none';
            }, 5000);
        });
    }

    // 2. تكبير الصور عند الضغط عليها (Lightbox feature)
    const images = document.querySelectorAll('.preview-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
});

