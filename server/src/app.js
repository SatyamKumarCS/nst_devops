const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to ShopSmart API' });
});

module.exports = app;
