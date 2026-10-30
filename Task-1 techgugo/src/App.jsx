import { useState } from "react";

import {
  products,
  getInStockProducts,
  filterByCategory,
  sortByPrice,
  getTotalInStockPrice,
} from "../data/product";

import "./App.css";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Calculate total quantity of items in the cart
  const getCartItemCount = (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price of items in the cart
  const getCartTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get products that are in stock
  const inStockProducts = getInStockProducts(products);

  // Filter products by category
  const categoryProducts = filterByCategory(products, category);

  // Sort products by price
  const displayedProducts = sortByPrice(categoryProducts, sortOrder);

  // Calculate total price of all in-stock products
  const inStockTotal = getTotalInStockPrice(products);

  // Add product to cart
  const addToCart = (product) => {
    if (!product.inStock) {
      return;
    }

    setCart((previousCart) => {
      console.log("Previous", previousCart);
      const existingProduct = previousCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId),
    );
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Mini Shopping Cart</h1>

        <div className="header-cart">Cart ({getCartItemCount(cart)})</div>
      </header>

      <main className="main-container">
        {/* Products section */}
        <section className="products-section">
          <div className="section-header">
            <h2>Our Products</h2>

            <div className="filters">
              {/* Filter by category */}
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Footwear">Footwear</option>
              </select>

              {/* Sort by price */}
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
              >
                {/* <option value="default">Default</option> */}
                <option value="low-to-high">Price: Low to High</option>
              </select>
            </div>
          </div>

          {/* Product cards */}
          <ProductList products={displayedProducts} onAddToCart={addToCart} />

          {/* In-stock product summary */}
          <p className="cart-summary">
            In-stock products: {inStockProducts.length}
          </p>

          <p className="cart-summary">
            Total price of in-stock products: ₹
            {inStockTotal.toLocaleString("en-IN")}
          </p>
        </section>
        {/* ///cart section */}
        <aside className="cart-section">
          <Cart
            cart={cart}
            onRemoveFromCart={removeFromCart}
            totalItems={getCartItemCount(cart)}
            totalPrice={getCartTotal(cart)}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
