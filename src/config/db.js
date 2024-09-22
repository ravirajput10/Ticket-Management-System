import mongoose from "mongoose";

export default async function connectToDatabase() {
  if (!process.env.DB_CONNECTION_STRING) {
    console.log("DB_CONNECTION_STRING is not defined");
    process.exit(1); // Exit the process since DB connection string is missing
  }

  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1); // Exit the process if DB connection fails
  }
}
