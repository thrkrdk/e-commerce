import { createContext, useState /* useEffect */ } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase.utils.js";

// import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProdcuts] = useState([]);

  /*   
 ** it used for add datas to the firebase 
useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
 */
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
