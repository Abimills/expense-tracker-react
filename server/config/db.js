const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongoose is up and running on ${con.connection.host}`);
  } catch (err) {
    console.log(`Error : ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
