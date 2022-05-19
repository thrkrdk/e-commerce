import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";

// import { addCollectionAndDocuments } from "../utils/firebase.utils.js";

// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  /*   
 ** it used for add datas to the firebase 
useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
 */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
