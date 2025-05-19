import mongoose from "mongoose";
import app from "./app.js";

(async () => {
  try {
    // Fixed connection string (corrected 'mongodb :')
    await mongoose.connect("mongodb://localhost:27017/gitsetup");
    console.log("DB CONNECTED");

    // Fixed incorrect declaration (used '==' instead of '=' and invalid identifier spacing)
    const onListening = () => {
      console.log("Listening on PORT 5000");
    };

    // Fixed typo and spacing in function call
    app.listen(5000, onListening);

  } catch (error) {
    // Fixed variable name typo (used 'err' instead of 'error')
    console.error("Error:", error);
    throw error;
  }
})();
