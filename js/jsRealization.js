import galleryImg from './gallery-items.js';

const refs = {
    jsGallery: document.querySelector('ul.js-gallery'),
    jsLightbox: document.querySelector('.js-lightbox'),
    jsLightboxImage: document.querySelector('.lightbox__image'),
    closeLightbox: document.querySelector('button[data-action="close-lightbox"]'),
}

const addImg = refs.jsGallery.insertAdjacentHTML('beforeend', galleryImg.map(({ preview, original, description }) =>
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}">
    </a>
    </li>`)
    .join(''));

function addModalSrc(event) {
    refs.jsLightboxImage.src = event.target.dataset.source; 
}; 

function cleanModalSrc() {
    refs.jsLightboxImage.src = ''; 
};

function modalIsOpen(event) {
    event.preventDefault();
    
    if (event.target.nodeName === 'IMG') {
        refs.jsLightbox.classList.add('is-open')
    };

    addModalSrc(event);
} 

function modalIsClose() {
    refs.jsLightbox.classList.remove('is-open');

    cleanModalSrc();
} 

refs.jsGallery.addEventListener('click', modalIsOpen);

refs.closeLightbox.addEventListener('click', modalIsClose);
