import "dotenv/config";
import app from "./src/app.js";
import connToDB from "./src/config/db.js";

const PORT = process.env.PORT || 8080;

try {
    connToDB();
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    });
} catch (error) {
    console.log("Error in running server", error.message);
}
