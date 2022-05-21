import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCart from "../../components/product-cart/product-cart.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoiresMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoiresMap);
  const isLoading = useSelector(selectIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  console.log("category", category);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};
export default Category;
