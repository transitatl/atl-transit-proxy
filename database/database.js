const mongoose = require("mongoose");
//const CONNECTION_STRING = process.env.DB_STRING;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://transitatl:Rg3o8MkHdu7MZY8W@cluster0.nkmqyiv.mongodb.net/TransitAtlTrain?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};


module.exports = connectDB; 


