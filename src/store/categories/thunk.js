/* // thunk async function
export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  }; */