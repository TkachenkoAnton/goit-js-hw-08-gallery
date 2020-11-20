import galleryImg from './gallery-items.js';

const refs = {
    jsGallery: document.querySelector('ul.js-gallery'),
    jsLightbox: document.querySelector('.js-lightbox'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    jsLightboxImage: document.querySelector('.lightbox__image'),
    closeLightbox: document.querySelector('button[data-action="close-lightbox"]'),
}

refs.jsGallery.insertAdjacentHTML('beforeend', galleryImg.map(({ preview, original, description }, i) =>
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      data-index="${i}">
    </a>
    </li>`)
    .join(''));

function addModalSrc(event) {
    refs.jsLightboxImage.src = event.target.dataset.source;
    refs.jsLightboxImage.alt = event.target.alt;
    refs.jsLightboxImage.setAttribute('data-index', `${event.target.dataset.index}`);
}; 

function cleanModalSrc() {
    refs.jsLightboxImage.src = '#';
    refs.jsLightboxImage.alt = '';
    refs.jsLightboxImage.removeAttribute('data-index');
};

function modalIsOpen(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;   
    };

    refs.jsLightbox.classList.add('is-open');

    addModalSrc(event);

} 

function modalIsClose() {

    refs.jsLightbox.classList.remove('is-open');

    cleanModalSrc();
} 

function keyModalIsClose(event) {

    if (refs.jsLightbox.classList.contains('is-open') && event.code === 'Escape') {
        modalIsClose();
    }
    
}; 

function keyPressNext(event) {
    let jsGalleryImg = document.querySelectorAll('.gallery__image');
    let currentIndex = refs.jsLightboxImage.dataset.index;
    let nextImg = Number(currentIndex);

    if (refs.jsLightbox.classList.contains('is-open') && event.code === 'ArrowRight') {
        refs.jsLightboxImage.src = `${(jsGalleryImg[`${nextImg += 1}`]).dataset.source}`;
    }
    
};

// function keyPressPrev(event) {

//     if (refs.jsLightbox.classList.contains('is-open') && event.code === 'ArrowLeft') {
//         console.log('left')
//     }
    
// };

refs.jsGallery.addEventListener('click', modalIsOpen);

refs.lightboxOverlay.addEventListener('click', modalIsClose);

refs.closeLightbox.addEventListener('click', modalIsClose);

window.addEventListener('keydown', keyModalIsClose);

window.addEventListener('keydown', keyPressNext);

// window.addEventListener('keydown', keyPressPrev);

