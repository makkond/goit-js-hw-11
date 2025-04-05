export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  if (!galleryContainer) {
    console.error('Gallery container not found!');
    return;
  }

  const markup = images
    .map(image => {
      return `
      <div class="gallery-item">
        <a href="${image.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${image.webformatURL}" 
            alt="${image.tags}" 
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${image.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${image.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${image.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${image.downloads}
          </p>
        </div>
      </div>
    `;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  try {
    const lightbox = new window.SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  } catch (error) {
    console.error('Error initializing SimpleLightbox:', error);
  }
}

export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }
}

export function showLoader() {
  const loader = document.querySelector('.loader-container');
  if (loader) {
    loader.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader-container');
  if (loader) {
    loader.classList.add('is-hidden');
  }
}
