const { REACT_APP_BASE_URL } = process.env;

export const GET_CATEGORIES_URL = `${REACT_APP_BASE_URL}/api/categories?populate=*`;
