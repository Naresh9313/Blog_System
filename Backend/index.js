const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const allRoutes = require('./routes/allRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('',allRoutes);

app.listen(process.env.PORT,() => {
    console.log(`Server Running On Port ${process.env.PORT}`)
})


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));
