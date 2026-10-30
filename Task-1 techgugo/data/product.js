export const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        inStock: true

    },
    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        category: "Electronics",
        inStock: true

    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        category: "Electronics",
        inStock: false

    },
    {
        id: 4,
        name: "T-shirt",
        price: 730,
        category: "Clothing",
        inStock: true

    },
    {
        id: 5,
        name: "jeans",
        price: 1500,
        category: "Clothing",
        inStock: true

    },
    {
        id: 6,
        name: "shoes",
        price: 3000,
        category: "Footwear",
        inStock: false

    },
]


// four function

// Find all products that are in stock.
export const getInStockProducts = (products) => {
  return products.filter((product) => product.inStock);
};

// Filter products by category
export const filterByCategory = (products, category) => {
  if (category === "All") {
    return products;
  }

  return products.filter((product) => product.category === category);
};

// Sort products by price
export const sortByPrice = (products, order) => {
  if (order === "low-to-high") {
    return [...products].sort((a, b) => a.price - b.price);
  }
  return products;
};

// Calculate total price of in-stock products
export const getTotalInStockPrice = (products) => {
  return products
    .filter((product) => product.inStock)
    .reduce((total, product) => total + product.price, 0);
};

  

// // Find all products that are in stock.
// export const getInStockProducts = () => {
//     return products.filter((product) => product.inStock);
// }

// //Filter products by category.
// export const filterByCategory = (category) => {
//     return products.filter((product) => product.category === category);

// }

// //sort products by price(low to high)

// export const sortByPrice = () => {
   
//     return [...products].sort((a, b) => a.price - b.price)
// }

// //calculate total price of all instock products

// export const getTotalInStockPrice = () => {
//     return pruducts.filter((product) => product.inStock).reduce((total, product) => total + product.price, 0)
// }



// // console.log(getInStockProducts());
// // console.log(filterByCategory("Electronics"));
// // console.log(sortByPrice());
// // console.log(getTotalInStockPrice());