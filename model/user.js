const mongoose = require("mongoose");
const MONGO_DB_URL =
  process.env.MONGO_URI;
mongoose
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
});

const USER = mongoose.model("USER", userSchema);

module.exports = USER;
