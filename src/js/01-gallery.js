import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRew = document.querySelector('.gallery');

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  )
  .join(' ');

galleryRew.insertAdjacentHTML('afterbegin', markupGallery);
console.log(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
