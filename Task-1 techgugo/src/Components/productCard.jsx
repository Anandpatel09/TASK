
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-category">
          {product.category}
        </p>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>

      {product.inStock ? (
        <button
          className="add-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      ) : (
        <button className="out-of-stock-button" disabled>
          Out of Stock
        </button>
      )}
    </div>
  );
}

export default ProductCard;
