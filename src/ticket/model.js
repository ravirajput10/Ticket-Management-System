import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    ticketId: { type: String, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    status: { 
      type: String, 
      required: true,
      enum: ["sold", "available"], // Only "sold" or "available" allowed
      default: "available" // Set default status to "available"
    },
  },
  { timestamps: true }
);

const ticketModel =
  mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);
export default ticketModel;
