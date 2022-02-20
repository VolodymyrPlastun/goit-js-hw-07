import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
     return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`     
    }).join('');
}

galleryContainer.addEventListener('click', onImgClick);

const instance = basicLightbox.create(`
 <img class="modal-img" src="">`,
 {
  onShow: (instance) => {
   window.addEventListener('keydown', onEscBtnClose);
},
},
    {
  onClose: (instance) => {
    window.removeEventListener('keydown', onEscBtnClose);
  },
},
);

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('.modal-img').src = evt.target.dataset.source;

  instance.show();

    }

      function onEscBtnClose(evt) {
        
        if (evt.code === 'Escape') {
          instance.close();
          return;
        }
      }

  




