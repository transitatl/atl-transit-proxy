const mongoose = require("mongoose");
const Stations = require('./models/station')
const CONNECTION_STRING = "mongodb+srv://transitatl:Rg3o8MkHdu7MZY8W@cluster0.nkmqyiv.mongodb.net/TransitAtlTrain?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};



const getAllStations = async () => {
  try {
    const stations = await Stations.find({});
    return stations;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  getAllStations
};

module.exports = connectDB; 


