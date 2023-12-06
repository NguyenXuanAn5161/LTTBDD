import React, { useState } from "react";

// Tạo một Context cho giỏ hàng
const CartContext = createContext();

// Tạo một Component cung cấp giỏ hàng
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Tạo một Hook để truy cập giỏ hàng từ bất kỳ Component nào
function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
