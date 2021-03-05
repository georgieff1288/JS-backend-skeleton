const express = require('express');

const routes = require('./routes');
const { PORT } = require('./config/config');
const errorHAndler = require('./middlewares/errorHandler'); 

const app = express();

require('./config/mongoose');
require('./config/express')(app);

app.use(routes);
app.use(errorHAndler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

