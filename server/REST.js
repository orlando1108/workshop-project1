var mysql = require("mysql");

var insertedCommande_ID;

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}
REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    
    router.post("/commande",function(req,res){

        

     /*   connection.query( 'SELECT * FROM some_table', ( err, rows ) => {
            connection.query( 'SELECT * FROM other_table', ( err, rows2 ) => {
              connection.close( err => {
                // ... do something with all the results
              }
            }
          }

*/
        var query = "INSERT INTO ??(??) VALUES (?)";
        var table = ["Commande","id_user",req.body.id_user]; //md5(req.body.password)
        
        var msg_collections;
        var msg_produits;
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                throw err;
            } else {
                insertedCommande_ID = rows.insertId;
                console.log("inserted id commande  " + insertedCommande_ID);
            }
            
            
        
            if(req.body.list_produits){
               /* console.log("list produits exists");
                console.log("inserted id commande  " + insertedCommande_ID);*/
                for (i = 0; i < req.body.list_produits.length; i++) { 
                    console.log("id PRODUIT before  " + req.body.list_produits[i]);
                    table = ["Produit_Commande","id_produit","id_commande",Number(req.body.list_produits[i]),insertedCommande_ID ]; //md5(req.body.password)
                    console.log("id PRODUIT after  " + table);
                    query = "INSERT INTO ??(??,??) VALUES (?,?)";
                    query = mysql.format(query,table);
                    connection.query(query,function(err,rows){
                    if(err) {
                        throw err;
                    }
                });
                }
                msg_produits = " products added ";
    
            }
            if(req.body.list_collections){
                console.log("list collections exists");
               // console.log("inserted id commande  " + insertedCommande_ID);
               for (i = 0; i < req.body.list_collections.length; i++) { 
                    table = ["Collection_Commande","id_collection","id_commande",Number(req.body.list_collections[i]),insertedCommande_ID ]; //md5(req.body.password)
                    query = "INSERT INTO ??(??,??) VALUES (?,?)";
                    query = mysql.format(query,table);
                    connection.query(query,function(err,rows){
                    if(err) {
                        throw err;
                    } else {
                        msg_collections = " collections added ";
                    }
                   });
               }
    
            }
        });
        res.json({"Error" : false, "msg_collections" : msg_collections, "msg_produits" : msg_produits });

    });

    router.post("/user",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["User","email","entreprise",req.body.email, req.body.factory]; //md5(req.body.password)
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query", "Detail": JSON.stringify(err)});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });

    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});

    });

    router.get("/collections",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["Collection"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Collections" : rows});
            }
        });
    });

    router.get("/produits/:id_collection",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["Produit","id_collection",req.params.id_collection];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    router.get("/users/:user_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["user_login","user_id",req.params.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

  /*  router.put("/users",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["user_login","user_password",md5(req.body.password),"user_email",req.body.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
            }
        });
    });*/

   /* router.delete("/users/:email",function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["user_login","user_email",req.params.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.email});
            }
        });
    });*/
}

module.exports = REST_ROUTER;