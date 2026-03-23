const express = require("express");
const mongoose = require("mongoose")
// import and install your mongoose

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// add the middleware for reading JSONs from client request bodies
app.use(express.json())
// create a catSchema with name, age, color, adopted (boolean), and hasShots (boolean)
const catSchema = new mongoose.Schema ({
  name: {type: String, require: true, default: "Mogged"},
  age:{type: Number, require: true},
  color:{type: String, require: true},
  adopted:{type: Boolean, default:false},
  hasShots:{type: Boolean, default: false}
})
// connect your schema to a model called Cat
const Cat = mongoose.model("Cat", catSchema, "Cats")
// write an async function called startServer
// inside make sure to connect to mongoose w/ your SRV string with the database animalShelter
// inside start your server at port 3000
async function startServer() {
  await mongoose.connect("monogodb+srv://SE12:CSH2026@cluster0.sjzxqil.mongodb.net/?appName=Cluster0")

  app.listen(3000, () => {
    console.log("server is starting")
  })
    // The first time you run your code, uncomment the following once to add some cats to your DB
    await new Cat({
        name: "Whiskers",
        age: 1,
        color: "orange",
        adopted: false,
        hasShots: true
    }).save();

    await new Cat({
        name: "Pawlina",
        age: 3,
        color: "black",
        adopted: true,
        hasShots: true
    }).save();

}
// call startServer
startServer()
// create a route handler for /cats that returns all cats

// create a route handler for /cats/adopt that returns only cats that haven't been adopted

// create a route handler for /cats/add to saves a new cat to the collection
// test it in Postman to make sure you can add new cats


// set up the schema, model, and get + post routes for the shelter's volunteers
