const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.js');
const usersRouter = require('./routes/users.router');
const adoptionRouter = require('./routes/adoption.router');

app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/adoption', adoptionRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
