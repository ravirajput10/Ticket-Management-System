import Joi from "joi";
import mongoose from "mongoose";
import ticketModel from "./model.js";
import generateUniqueId from "../utils/generate-unique-id.js";

const createTicket = async (req, res) => {
  const { title, description, status } = req.body;

  // Joi validation schema
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid("sold", "available").required(),
  });

  // Validate request body
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const ticketId = await generateUniqueId();
  try {
    const ticket = await ticketModel.create({
      ticketId: ticketId,
      title: title,
      description: description,
      status: status,
    });

    if (ticket) {
      return res
        .status(201)
        .json({ message: "Ticket has been created", ticket });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const getTicket = async (req, res) => {
  const { id } = req.params;

  // Check if the provided id is a valid ObjectId
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

  try {
    // Query for find ticket based on unique identifier (id or ticketId)
    const query = {};
    if (isValidObjectId) {
      query._id = id;
    } else {
      query.ticketId = id;
    }

    const ticket = await ticketModel.findOne(query);
    if (ticket) {
      return res.json({ message: "Your Ticket", ticket });
    } else {
      return res.status(404).json({ message: "Ticket not found" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  // Check if the provided id is a valid ObjectId
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
  try {
    // Query for update ticket based on unique identifier (id or ticketId)
    const query = {};
    if (isValidObjectId) {
      query._id = id;
    } else {
      query.ticketId = id;
    }

    const ticket = await ticketModel.findOneAndUpdate(
      query,
      { title, description, status },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    return res.status(200).json({ message: "Ticket has been updated", ticket });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const deleteTicket = async (req, res) => {
  const { id } = req.params;
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

  try {
    // Query for delete ticket based on unique identifier (id or ticketId)
    const query = {};
    if (isValidObjectId) {
      query._id = id;
    } else {
      query.ticketId = id;
    }

    const ticket = await ticketModel.findOneAndDelete(query);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    } else {
      return res
        .status(200)
        .json({ message: "Ticket has been deleted", ticket });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const tickets = await ticketModel.find();
    if (tickets.length === 0) {
      return res.status(400).json({ message: "Tickets not found" });
    } else {
      return res.status(200).json({ message: "All tickets", tickets });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

export { createTicket, getTicket, updateTicket, deleteTicket, getAllTickets };
