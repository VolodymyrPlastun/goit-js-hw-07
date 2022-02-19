import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
     return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
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

function onImgClick(evt) {
  const imgUrl = evt.target.dataset.source;
  const instance = basicLightbox.create(`
 <img src="${imgUrl}" width="800" height="600">
    
`)
  instance.show()
  // {
  //   onShow: (instance) => {
      window.addEventListener('keydown', onModalClose, { once: true });
      function onModalClose(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
      
          instance.close()
        }
      }
    }
// }
// }


  
// {
//   onClose: (instance) => {
//     window.removeEventListener('keydown', onModalClose);
//   }
// }




