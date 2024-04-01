// const express = require('express')
// const app = express ()

// app.get ('/home', (req,res) => {
//     res.send('hello world')
//     console.log(req)
// })

// app.get ('/about', (req,res) => {
//     res.send('hello world it is about page')
// })

// app.listen(3000,()=>{
//     console.log('sever is working')
// })



// const mongoose1 = require('mongoose');
// const URL1 = "mongodb+srv://sarminaroyce22:Sr1223@cluster0.1rwlvom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// // const user = require('./User.models.js');

// mongoose1.connect(URL1)
//     .then(() => {
//         console.log("Connected to the database!");
//     })
//     .catch((error) => {
//         console.log("Connection failed!", error);
//     });


// const express = require('express');
// const app = express();
// const Data = require("./Home.js");


// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


// app.get('/products', (request, response) => {
//     response.send(Data.products.map(product => product.name));
// });
// app.get('/products', (request, response) => {
//     response.send(Data.users.map(product => product.age));
// });

// app.get('/products', (request, response) => {
//     response.send(Data.products.map(product => product.price));
// });
// app.get('/products', (request, response) => {
//     response.send(Data.products.map(product => product.name));
// });

// app.get('/products/:id', (req, res) => {
//     // res.send(Data.products.find(product => product.id(2)));
// //    res.send(req.params.id)
//    const ID = req.params.id
//    const product = Data.products.find(product => product.id == ID)
//    res.send(product)
   
// });

// app.get('/products/:id', (req, res) => {
//     res.send(Data.products.find(product => product.id === parseInt(3)));
// });

// app.get('/product/:id', (req, res) => {
//     const productId = parseInt(req.params.id);
//     const product = Data.products.find(product => product.id === productId);
//     // console.log(product)
    
//     if (product) {
//        res.send(`Product Details: ${JSON.stringify(product)}`);
//     } 
//     else {
//        res.status(404).send('Product not found');
//     }
//  });