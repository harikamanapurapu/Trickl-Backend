const express = require('express');
const mongoose = require('mongoose');
const dotEnv=require("dotenv")
dotEnv.config()
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
  });
  
const Trickl = mongoose.model('Trickl', itemSchema);

// POST a new item
app.post('/api/item', async (req, res) => {
  try {
    const { name , description } = req.body;
    const newTask = await Trickl.create({ name, description});
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Failed to create task' });
  }
});

// GET all items
app.get('/items', async (req, res) => {
    try {
      const items = await Trickl.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


// PUT (update) an existing item by ID
app.put('/items/:id', async (req, res) => {
    const itemId = req.params.id;
  
    try {
      // Find the item by ID
      const item = await Trickl.findById(itemId);
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      // Update the item properties
      if (req.body.name) {
        item.name = req.body.name;
      }
  
      if (req.body.description) {
        item.description = req.body.description;
      }
  
      // Save the updated item
      const updatedItem = await item.save();
  
      res.json(updatedItem);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  // DELETE an item by ID
app.delete('/items/:id', async (req, res) => {
    const itemId = req.params.id;
  
    try {
      // Find the item by ID
      const item = await Trickl.findById(itemId);
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      // Delete the item
      await item.deleteOne()
  
      res.json({ message: 'Item deleted' });
    } catch (err) {
        console.log(err)
      res.status(500).json({ message: err.message });
    }
  });
  
  
app.get('/', (req,res)=>{
    res.send("everything is working fine")
})

app.listen(process.env.PORT, ()=>{
    mongoose.connect(process.env.MONGODB_URL)
      .then(()=>console.log(`Server running on http://localhost:${process.env.PORT}`))
      .catch((error)=>console.log(error))

})

