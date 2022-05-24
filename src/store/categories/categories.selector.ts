import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";

// Memoization
const selectcategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

const selectCategories = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoiresMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectIsLoading = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
