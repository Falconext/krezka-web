import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
  stock: number | null; // null means infinite
};

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          
          if (existingItem) {
            // Check stock limit if applicable
            const newQuantity = existingItem.quantity + quantity;
            const finalQuantity = product.stock !== null && newQuantity > product.stock 
              ? product.stock 
              : newQuantity;
              
            return {
              items: state.items.map((item) =>
                item.id === product.id ? { ...item, quantity: finalQuantity } : item
              ),
              isOpen: true,
            };
          }
          
          return {
            items: [...state.items, { ...product, quantity }],
            isOpen: true,
          };
        });
      },
      
      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        
        set((state) => {
          const item = state.items.find(i => i.id === id);
          if (!item) return state;
          
          const finalQuantity = item.stock !== null && quantity > item.stock ? item.stock : quantity;
          
          return {
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: finalQuantity } : i
            ),
          };
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'krezka-cart-storage',
      partialize: (state) => ({ items: state.items }), // Only persist items, not UI state (isOpen)
    }
  )
);
