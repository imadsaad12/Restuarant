const { REACT_APP_BASE_URL } = process.env;

export const GET_CATEGORIES_URL = `${REACT_APP_BASE_URL}/api/categories?populate=*&sort=priority:asc`;
export const GET_PRODUCTS_URL = `${REACT_APP_BASE_URL}/api/products?populate=*&sort=priority:asc`;
