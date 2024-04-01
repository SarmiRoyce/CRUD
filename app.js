const mongoose1 = require ('mongoose');
const URL1 = "mongodb+srv://sarminaroyce22:Sr1223@cluster0.ihgxscv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const express = require('express');
const app = express ();
const User = require ("./User.model.js");
const Product = require ("./Product.model.js");
const Review = require ("./Review.model.js");
const Payment = require ("./Payment.model.js");
app.use(express.json())

mongoose1.connect(URL1)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });

app.listen(3000,()=>{
    console.log('sever is working')
});

// POST
app.post('/create-data', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } 
    catch (error) {
      res.status(400).send(error);
    }
}); 

// POST
app.post('/create-data', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } 
    catch (error) {
      res.status(400).send(error);
    }
}); 


// POST
app.post('/Review', async (req, res) => {
    try {
      const newUser = new Review(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } 
    catch (error) {
      res.status(400).send(error);
    }
});   

// POST
app.post('/Product', async (req, res) => {
    try {
      const newUser = new Product(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } 
    catch (error) {
      res.status(400).send(error);
    }
});  

// POST
app.post('/Payment', async (req, res) => {
    try {
      const newUser = new Payment(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } 
    catch (error) {
      res.status(400).send(error);
    }
});   

// GET
app.get('/Payment', async (req, res) => {
    try {
      const review = await Payment.find();
        res.status(201).json(review);
    } catch (error) {
      res.status(400).send(error);
    }
   });

// GET
app.get('/Review', async (req, res) => {
    try {
      const review = await Review.find();
        res.status(201).json(review);
    } catch (error) {
      res.status(400).send(error);
    }
   });

   app.get('/User', async (req, res) => {
    try {
      const review = await User.find();
        res.status(201).json(review);
    } catch (error) {
      res.status(400).send(error);
    }
   });

   // GET
    app.get('/Product', async (req, res) => {
    try {
      const review = await Product.find();
        res.status(201).json(review);
    } catch (error) {
      res.status(400).send(error);
    }
   });

//    UPDATE
   app.put('/User/:id', async (req, res) => {
    try {
      const {id} = req.params
      await User.findByIdAndUpdate(id, req.body);
      const user = await User.findById(id);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
   });

   //    UPDATE
   app.put('/Product/:id', async (req, res) => {
    try {
      const {id} = req.params
      await Product.findByIdAndUpdate(id, req.body);
      const user = await Product.findById(id);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
   });

//    DELETE
app.delete('/User/:id', async (req,res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      if (!User.findByIdAndDelete(req.params.id)) {
        res.status(404).send({message: "not found"})
      }
      res.status(201).json(await User.findById(id));
    }
    catch (error){
      res.status(400).send(error)
    }
   })

   //    DELETE
    app.delete('/Product/:id', async (req,res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      if (!Product.findByIdAndDelete(req.params.id)) {
        res.status(404).send({message: "not found"})
      }
      res.status(201).json(await Product.findById(id));
    }
    catch (error){
      res.status(400).send(error)
    }
   })

