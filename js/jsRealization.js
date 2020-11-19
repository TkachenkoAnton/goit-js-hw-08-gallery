import galleryImg from './gallery-items.js';

const refs = {
    jsGallery: document.querySelector('.js-gallery'),
}

const addImg = refs.jsGallery.insertAdjacentHTML('beforeend', galleryImg.map(({ preview }, { description }) => 
    `<li class="gallery__item">
     <a class="gallery__link" href="#">
     <img class="gallery__image"
      src="${preview}"
      data-source="#"
      alt="${description}">
    </a>
    </li>`).join(''))

console.log(refs.jsGallery)

