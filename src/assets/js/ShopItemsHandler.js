import axios from 'axios';
import { ref } from 'vue';

export function getShopItems() {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  async function fetchData() {
    try {
      loading.value = true;
      const response = await axios.get('https://api.dev.skiercon.pl/shop-items');
      data.value = response.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    error,
    loading,
    fetchData
  };
}