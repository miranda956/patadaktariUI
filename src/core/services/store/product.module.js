
import ApiService from "@/core/services/api.service";

// action types 


export const GET_PRODUCT = "getProduct";
export const ADD_PRODUCT = "addProduct";
export const UPDATE_PRODUCT = "updateProduct";
export const REMOVE_PRODUCT="removeProduct";
  
// mutation typess

export const ALL_PRODUCTS = 'ALL_PRODUCTS'
export const ALL_PRODUCTS_SUCCESS = 'ALL_PRODUCTS_SUCCESS'

export const PRODUCT_BY_ID = 'PRODUCT_BY_ID'
export const PRODUCT_BY_ID_SUCCESS = 'PRODUCT_BY_ID_SUCCESS'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS'

const state={
    errors:null,
    product:{},
};

const getters ={
    allproducts: (state, getters) => {
        return state.products
      },

      getProductById: (state, getters) => (id) => {
        return state.products.find(product => product.id === id)
      }


}

const actions ={

    [UPDATE_PRODUCT](context, payload) {
        const { productName, ProductImage, price, quantity, description} = payload;
        const user = { email, username, bio, image };
        if (password) {
          user.password = password;
        }
    
        return ApiService.put("user", user).then(({ data }) => {
          context.commit(SET_AUTH, data);
          return data;
        });
      }



}


