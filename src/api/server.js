const app = require('./index');
require('dotenv').config();

const { PORT = 3000 } = process.env;

app.listen(PORT, console.log(`Online na porta ${PORT}`));