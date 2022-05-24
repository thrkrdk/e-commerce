import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCart from "../../components/product-cart/product-cart.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoiresMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";

import * as Styled from './category.styles';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoiresMap);
  const isLoading = useSelector(selectIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  console.log("category", category);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Styled.CategoryTitle>{category.toLocaleUpperCase()
      }</Styled.CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <Styled.CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
        </Styled.CategoryContainer>
      )}
    </Fragment>
  );
};
export default Category;
