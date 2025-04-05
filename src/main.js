import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');

  const form = document.querySelector('.form');
  const searchButton = document.querySelector('.form button');
  const searchInput = document.querySelector('input[name="search-text"]');

  console.log('Form element:', form);
  console.log('Search button:', searchButton);
  console.log('Search input:', searchInput);

  if (!form || !searchButton || !searchInput) {
    console.error('Required elements not found!');
    return;
  }

  searchButton.addEventListener('click', async () => {
    console.log('Search button clicked');

    const searchQuery = searchInput.value.trim();
    console.log('Search query:', searchQuery);

    if (!searchQuery) {
      window.iziToast.error({
        title: 'Помилка',
        message: 'Будь ласка, введіть пошуковий запит',
        position: 'topRight',
      });
      return;
    }

    clearGallery();

    showLoader();

    try {
      const data = await getImagesByQuery(searchQuery);
      console.log('Data received:', data);

      hideLoader();

      if (data.hits.length === 0) {
        window.iziToast.info({
          title: 'Інформація',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    } catch (error) {
      console.error('Error in search handler:', error);

      hideLoader();

      window.iziToast.error({
        title: 'Помилка',
        message: error.message,
        position: 'topRight',
      });
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Form submitted via Enter key');
    searchButton.click();
  });
});
