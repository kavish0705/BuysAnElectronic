const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const Router = require('express-router');
const app = express();
// app.use(Router);
app.set('views', path.join(__dirname, 'views')); // this tells where files to render are
app.set('view engine', 'ejs'); // view engine set karne ke liye

const firstRoutes = require('./routes/first');
const supportRoute = require('./routes/renderSupport');
const laptopRoutes = require('./routes/renderLaptop');
const cctvRoutes = require('./routes/renderCCTV');
const accessoriesRoutes = require('./routes/renderAccessories');
const desktopRoutes = require('./routes/renderDesktop');

// const router = require('./routes/first');
// const secondRouter = require('./routes/support');
//const supportRoutes = require('./routes/support');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // This line tells resources like stylesheets and js , imgs are located where
app.use(firstRoutes);
app.use(supportRoute);
app.use(laptopRoutes);
app.use(cctvRoutes);
app.use(accessoriesRoutes);
app.use(desktopRoutes);

// router.get('/support',(req,res,next) => {
//     res.send(supportRoute);
// });
//app.use(supportRoutes);

const mongoose = require('mongoose');

app.use(express.json());

var db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', function (callback) {
  console.log('connection succeeded');
});
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedToplogy: true,
    useNewUrlParser: true,
  });
  console.log('Db connected!');
};
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/first.ejs');
});
app.post('/support', function (req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var phone = req.body.phone;
  var address = req.body.address;
  var city = req.body.city;
  var state = req.body.state;
  var postode = req.body.postcode;
  var tarea = req.body.tarea;
  var status = req.body.status;
  var data = {
    fname: fname,
    lname: lname,
    email: email,
    phone: phone,
    address: address,
    city: city,
    state: state,
    postcode: postode,
    tarea: tarea,
    status: status,
  };
  db.collection('supportform').insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log('Record inserted successfully');
    res.redirect('/');
  });
});
mongoose
  .connect(
    'mongodb+srv://kavish123:kavish123@cluster0.7x4q2.mongodb.net/vij?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('DB Connected');
    app.listen(5000, () => {
      console.log('Server is ready!');
    });
  });
