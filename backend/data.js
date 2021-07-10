import bcrypt from "bcrypt";
const data = {
  users: [
    {
      name: "Rramirous",
      email: "rramirous@iduslocus.com",
      password: bcrypt.hashSync("Basirismygod", 8),
      isAdmin: true,
    },
    {
      name: "jhon",
      email: "jhon@email.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
     
      name: "Slim",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 0,
      brand: "xx",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "Puma Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "xx",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "xx",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "Commun Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 0,
      brand: "xx",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "Tinny Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "xx",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "Nice",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "xx",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "Daddy",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      countInStock: 10,
      brand: "xx",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
