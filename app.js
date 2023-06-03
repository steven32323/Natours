const morgan = require('morgan');
const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1 - MIDDLEWARE
app.use(morgan('dev'));

app.use(express.json());

// 3 - ROUTES

app.use('/api/v1/tours', tourRouter);

app.use('/api/v1/users', userRouter);

// 4 -  START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
