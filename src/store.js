import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const QUERY_GET_COLLECTIONS =  "http://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/collections"
const QUERY_GET_PRODUCTS =  "http://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/produits/"
const QUERY_POST_COMMANDE = "http://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/commande"

const _initialState = {
   // collections:[],
     products: [],
     list_addedCollections:[],
     list_addedProducts:[],
    isProductsPage:false
 }

const state = {
    retailer_name:'',
    retailer_email:'',
    collections:[],
     products: [],
     list_addedCollections:[],
     list_addedProducts:[],
    isProductsPage:false
 }

 
const getters = {
     collections: state => state.collections,
     products: state => state.products,
     isOnProducts: state => state.isProductsPage
}

const mutations = {
     ADD_PRODUCT: (state, payload) =>{
        console.log(payload);
        if(!(state.list_addedProducts.indexOf(payload.id) > -1)){
            state.list_addedProducts.push(payload.id);
            state.products[payload.index].selected = true;
        }
     },
     DELETE_PRODUCT: (state, payload) =>{
        if((state.list_addedProducts.indexOf(payload.id) > -1)){
            state.list_addedProducts.splice(state.list_addedProducts.indexOf(payload.id), 1);
            state.products[payload.index].selected = false;
           }
    },
     ADD_COLLECTION: (state, payload) =>{
        console.log(payload);
        if(!(state.list_addedCollections.indexOf(payload.id) > -1)){
            state.list_addedCollections.push(payload.id);
            state.collections[payload.index].selected = true;
        }
        
    },
    DELETE_COLLECTION: (state, payload) =>{
       if((state.list_addedCollections.indexOf(payload.id) > -1)){
        state.list_addedCollections.splice(state.list_addedCollections.indexOf(payload.id), 1);
        state.collections[payload.index].selected = false;
       }
    },
    SHOW_PRODUCT_DETAIL:(state, index) =>{
        state.products[index].showInfo = true
    },
    HIDE_PRODUCT_DETAIL: (state, index)=>{
        state.products[index].showInfo = false;
    },
    CREATE_COLLECTIONS:(state, collections)=>{
        let collectionList = collections.map(c => {
            let obj = {
              id: c.id,
              name: c.nom,
              selected: false,
              img_path: c.img_path
            };
            return obj;
          });
          state.collections = collectionList;
        //  this.fetchCollectionResults = collectionList;
    },
    CREATE_PRODUCTS:(state, products)=>{
        let productList = products.map(p => {
            let obj = {
              id: p.id,
              name: p.nom,
              description: p.description,
              composition: p.composition,
              selected: false,
              img_path: p.img_path,
              showInfo: false
            };
            return obj;
          });
          state.products = productList;
        //  this.fetchCollectionResults = collectionList;
    },
    SWITCH_PAGE:()=>{
        if(!state.isProductsPage){
            state.isProductsPage = true;
            return
        }
        state.isProductsPage = false;
    },
    UPDATE_NAME:(state, value)=>{
        console.log(value);
        state.retailer_name = value;
    },
    UPDATE_EMAIL:(state, value)=>{
        console.log(value);
        state.retailer_email = value;
    },
    RESET_STATE:(state) =>{
        if(state.collections.length > 0){
            state.collections.map(elem => elem.selected = false);

        }
        if(state.products.length > 0){
            state.products.map(elem => elem.selected = false);
        }
        state.list_addedCollections =[];
        state.list_addedProducts =[];
        state.isProductsPage = false;
        console.log(state);
    }

 }


const actions = {
    addCollection: (state, payload) => {
        //console.log(index);
        store.commit('ADD_COLLECTION', payload)
    },
    deleteCollection: (state, payload) => {
        store.commit('DELETE_COLLECTION', payload)
    },
    addProduct: (state, payload) => {
        store.commit('ADD_PRODUCT', payload)
    },
    deleteProduct: (state, payload) => {
        store.commit('DELETE_PRODUCT', payload)
    },
    showProductDetail:(state, index)=>{
        store.commit('SHOW_PRODUCT_DETAIL', index)
    },
    hideProductDetail:(state, index)=>{
        store.commit('HIDE_PRODUCT_DETAIL', index)
    },
    switchPage:(state)=>{
        store.commit('SWITCH_PAGE')
    },
    fetchCollections:()=>{
        //console.log('api 1 !!! ' + JSON.stringify(query_getCollections))
        axios
        .get(QUERY_GET_COLLECTIONS, {
          headers: {
            "Access-Control-Allow-Origin": true,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          store.commit('CREATE_COLLECTIONS', response.data.Collections)
        })
        .catch(error => console.error(error));
    },
    fetchProducts:(state, idCollection)=>{
        axios
        .get(QUERY_GET_PRODUCTS.concat(idCollection), {
          headers: {
            "Access-Control-Allow-Origin": true,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          store.commit('CREATE_PRODUCTS', response.data.Produits)
        })
        .catch(error => console.error(error));
    },
    sendOrder:() => {

        console.log(state.retailer_name)
            console.log( state.retailer_email)
                console.log(state.list_addedProducts)
           console.log( state.list_addedCollections)

        axios.post(QUERY_POST_COMMANDE, {
            name: state.retailer_name,
            email: state.retailer_email,
            list_produits: state.list_addedProducts,
            list_collections: state.list_addedCollections
          })
          .then(function (response) {
           store.commit('RESET_STATE');
           console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
let store = new Vuex.Store({
     state: state,
     mutations: mutations,
     getters: getters,
     actions: actions,
     strict: true
 })

 global.store = store;
 export default store

 // store
 
 /*class Store {

    constructor(){
        this.state = {
            list_products: [],
            list_collections: []
        }

    }
    
}

var store  = new Store();

export default{
  state : store.state
} */