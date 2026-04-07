import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;

  const [products, setProducts] = useState([]); // products from backend
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("http://localhost:3000/category", {
  withCredentials: true
}); 
        if(result.status === 200){
        setProducts(result.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    showSearch,
    setShowSearch,
    setSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

// import { createContext, useState } from "react";
// import { products } from "../assets/data";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '$';
//     const delivery_fee = 10;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
    
//     const value = {
//         products, currency, delivery_fee,
//         search, showSearch,setShowSearch, setSearch

//     }
//     return(
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;

