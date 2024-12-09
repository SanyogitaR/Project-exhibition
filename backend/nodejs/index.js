const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON data
app.use(cors()); // Allow cross-origin requests

// Routes
const userRoutes = require('./routes/userRoutes'); // Link user routes
app.use('/api/users', userRoutes); // URL starts with /api/users

const orderRoutes = require('./routes/orderRoutes'); // Link order routes
app.use('/api/orders', orderRoutes); // URL starts with /api/orders

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));