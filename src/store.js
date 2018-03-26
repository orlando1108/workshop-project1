import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const query_getCollections =  "http://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/collections"
const query_getProducts =  "http://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/produits/"
 
const state = {
    
    collections:[

     ],
     products: [

     ],
     list_addedCollections:[
     ],
     list_addedProducts:[
    ],
    isProductsPage:false
 }

 
const getters = {
     collections: state => state.collections,
     products: state => state.products,
     isOnProducts: state => state.isProductsPage
     /*isCollectionSelected: (id) => state.list_addedCollections.indexOf(id),
     isProductSelected: (id) => state.list_addedProducts.indexOf(id)*/
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
    fetchCollections:(state)=>{
        console.log('api 1 !!! ' + JSON.stringify(query_getCollections))
        axios
        .get(query_getCollections, {
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
        .get(query_getProducts.concat(idCollection), {
          headers: {
            "Access-Control-Allow-Origin": true,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          store.commit('CREATE_PRODUCTS', response.data.Produits)
        })
        .catch(error => console.error(error));
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