const API_KEY = '49650448-036e738118328f32db28a86cb';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await window.axios.get(BASE_URL, { params });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Помилка при отриманні даних з Pixabay API');
  }
}
