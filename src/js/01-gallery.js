
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem => `<a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}"
     alt="${galleryItem.description}" />
    </a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

let stern = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
});