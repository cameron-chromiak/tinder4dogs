const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')

//Load Routes
const profile = require('./routes/api/profile')

const app = express();

app.get('/',(req, res)=>{
  res.send('Home')
})

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



//connect to DB
const db = require('./config/keys').mongoURI
mongoose.connect(db,  { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

//app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use('/api/profile', profile)


const port = process.env.PORT || 5000

app.listen(port, () =>{
  console.log(`App running on port ${port}`);
})
