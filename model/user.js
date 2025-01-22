const mongoose = require("mongoose");
const MONGO_DB_URL =
  process.env.MONGO_URI ||
  "mongodb+srv://vijithshekha:lucidatech@cluster0.a0mg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
