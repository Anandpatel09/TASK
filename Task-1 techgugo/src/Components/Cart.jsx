const Cart = ({
  cart,
  onRemoveFromCart,
  totalItems,
  totalPrice,
}) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <p className="cart-summary">
        Total Items: {totalItems}
      </p>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty. Start shopping!
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>
                    ₹{item.price.toLocaleString("en-IN")} ×{" "}
                    {item.quantity}
                  </p>
                </div>

                <button
                  className="remove-button"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>
              Total: ₹{totalPrice.toLocaleString("en-IN")}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
