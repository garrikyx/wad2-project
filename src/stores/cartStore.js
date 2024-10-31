import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);

  // Load cart items from localStorage on initialization
  if (localStorage.getItem('cartItems')) {
    cartItems.value = JSON.parse(localStorage.getItem('cartItems'));
  }

  function addItem(event) {
    const itemIndex = cartItems.value.findIndex(item => item.id === event.id);
    if (itemIndex !== -1) {
      cartItems.value[itemIndex].quantity += 1;
    } else {
      cartItems.value.push({
        id: event.id,
        eventName: event.name,
        eventDate: event.datetime_summary,
        eventTime: event.time,
        seatNumber: Math.floor(Math.random() * 100) + 1, 
        pricePerItem: event.price || 50.00, 
        quantity: 1,
        imageUrl: event.images?.images[0]?.original_url || '/images/noimage.png',
      });
    }
  }

  function deleteItem(index) {
    cartItems.value.splice(index, 1);
  }

  function clearCart() {
    cartItems.value = [];
    localStorage.removeItem('cartItems'); // Clear local storage
  }

  // Watch for changes in cartItems and save to localStorage
  watch(cartItems, (newItems) => {
    localStorage.setItem('cartItems', JSON.stringify(newItems));
  }, { deep: true });

  return { cartItems, addItem, deleteItem, clearCart };
});