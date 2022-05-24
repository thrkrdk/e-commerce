import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preivew/category-preivew.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoiresMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoiresMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
