import { createSelector } from "reselect";

// Memoization
const selectcategoryReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoiresMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsLoading = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
