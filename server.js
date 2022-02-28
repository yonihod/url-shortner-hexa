const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const routes = require('./routes/routes')
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`Server is listeneing at http://localhost:${PORT}`);
})
