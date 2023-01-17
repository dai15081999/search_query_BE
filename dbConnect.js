const mongoose = require("mongoose");

const dbConnect = () => {
    const connectionParams = { useNewUrlParser: true };
    mongoose.connect('mongodb+srv://daidandy99:15081999@cluster0.rsoaz.mongodb.net/daiok?retryWrites=true&w=majority', connectionParams);

    mongoose.connection.on("connected", () => {
		console.log("Connected to database sucessfully");
	});

	mongoose.connection.on("error", (err) => {
		console.log("Error while connecting to database :" + err);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Mongodb connection disconnected");
	});
};

module.exports = dbConnect;