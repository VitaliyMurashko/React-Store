import {ProductApi} from '../api/api';



const initialState = {
    products: null,
    card: [],
    discountProducts: [],
    popularProducts: [],
    currentProduct: [],
    viewedProducts: [],
    successSend:false
};

const catalogReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SORT_LOW_PRICE':
            return {...state,
                products: state.products.sort((a,b)=>a.price - b.price )  
            }
        case 'SORT_HIGH_PRICE':
            return {...state,
                products:state.products.sort((a,b)=>b.price - a.price)
            }    
        case 'SORT_DISCOUNT':
            return {...state,
                products: state.products.sort((a, b)=> b.discount - a.discount)
            }
        case 'ADD_TO_CARD':
            return { ...state,
                card: [...state.card,...state.products.filter(p => p.id === action.productsId)]   
               }
        case 'ADD_TO_DISCOUNT_PRODUCTS' :
            return {
                ...state,
                discountProducts:[...state.products.filter(p => p.discount > 0)]
            }
            case 'ADD_TO_POPULAR_PRODUCTS' :
                    return {
                        ...state,
                        popularProducts:[...state.products.filter(p => p.popular === true)]
                    }                            
        case 'ADD_CURRENT_PRODUCT' :
            return {
               ...state,
               currentProduct: action.products
            }
        case 'ADD_PRODUCTS' :
            return {
                ...state,
                products: [...action.products]
            }
        case 'HANDLER_CARD' :
            return {
                ...state,
                products:[...state.products.map(p => p.id === action.productsId ? Object.assign({}, p, {
                    card: true
                  }) : p )],
            }
        case 'ADD_VIEWED_PRODUCTS' :
            return {
                ...state,
                viewedProducts:[action.products,...state.viewedProducts.filter(p => p.name !== action.products.name)]
            }
        case 'DESCRIPTION_HANDLER_BTN' :
            return {
                ...state,
                currentProduct: Object.assign({}, state.currentProduct, {
                    card: true
                  })
            }
        case 'REMOVE_PRODUCTS_FROM_CARD' :
            return {
                ...state,
                card: [],
                products:[...state.products.map(p => p.card ? Object.assign({}, p, {
                    card: false
                  }) : p )]
            }
        case 'SUCCESS_SEND' :
            return {
                ...state,
                successSend: !state.successSend
            }            
        default:
            return state;
   
    }

}


export const sortLowPrice = () => ({type: 'SORT_LOW_PRICE'});
export const sortHighPrice = () => ({type: 'SORT_HIGH_PRICE'});
export const sortDiscount = () => ({type: 'SORT_DISCOUNT'});
export const addToCard = (productsId) => ({type: 'ADD_TO_CARD', productsId});
export const addDiscountProducts = () => ({type: 'ADD_TO_DISCOUNT_PRODUCTS'});
export const addPopularProducts = () => ({type: 'ADD_TO_POPULAR_PRODUCTS'});
export const addcurrentProduct = (products) => ({type: 'ADD_CURRENT_PRODUCT', products}) ;
export const addProducts = (products) => ({type: 'ADD_PRODUCTS', products});
export const HandlerCard = (productsId) => ({type: 'HANDLER_CARD', productsId});
export const addViewedProducts = (products) => ({type: 'ADD_VIEWED_PRODUCTS', products});
export const DescriptionHandlerBtn = () => ({type: 'DESCRIPTION_HANDLER_BTN'});
export const removeProductsFromCard = () => ({type: 'REMOVE_PRODUCTS_FROM_CARD'})
export const handlerSuccessSend = () => ({type: 'SUCCESS_SEND'})

export const getCurrentProduct = (matchParamsId) => {
    return (dispatch) => {
        ProductApi.getCurrentProduct(matchParamsId)
        .then((response) => dispatch(addcurrentProduct(response.data))).catch(err => alert(`Ошибка,поробуйте перезагрузить страницу`)) 
    }
};

export const getProduct = () => {
    return (dispatch) => {
        ProductApi.getProducts().then((response) => dispatch(addProducts(response.data.products))).catch(err => alert(`Ошибка,поробуйте перезагрузить страницу`))
    }
};

export default catalogReducer;