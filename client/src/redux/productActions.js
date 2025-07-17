export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_PRODUCTS_REQUEST});

        try {
            const res = await fetch('/api/products');
            const data = await res.json();
            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: FETCH_PRODUCTS_FAILURE, payload: error.message});
        }
    };
}