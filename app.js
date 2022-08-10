const express =require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// MongoDB
const password = process.env.password;

mongoose.connect(`mongodb+srv://user:${password}@authcluster.gyf7vaf.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

// Ejs
app.use(expressLayouts);
app.set('view engine', 'ejs')

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server stardet on  ${PORT}`));