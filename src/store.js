 class Store {

    constructor(){
        this.state = {
            list_products: [],
            list_collections: []
        }

    }

/*    addProduct(p){
        this.state.list_products.push(p);

    }

    removeProduct(p){
        this.state.list_products.splice(0,0,p);

    }

    addCollection(c){
        this.state.list_products.push(c);

    }

    removeCollection(c){
        this.state.list_products.splice(0,0,c);
    }
*/
    
}

var store  = new Store();

export default{
  state : store.state
} 

//var store = new Store();
/*export default{
    store
}*/


//exports.store =  store;
//.store =  store;