const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define your API endpoints here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/api/products', (req, res) => {
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      // Add more products here
    ];
  
    res.json(products);
  });
  