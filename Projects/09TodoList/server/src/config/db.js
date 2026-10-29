import mongoose from "mongoose";

const connToDB = async () => {
    try {
        let connInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(connInstance.connection.host);
    } catch (error) {
        console.log("Error in connecting DB", error.message);
        return;
    }
};

export default connToDB;
