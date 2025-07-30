import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  website: { type: String, required: true },
  openingHours: [String],
  photos: [String],
  reviews: [
    {
      authorName: String,
      rating: String,
      text: String,
    },
  ],
  types: [String],
  formatted_address: {
    type: String,
    required: true,
  },
  briefDescription: {
    type: String,
    required: true,
  },
  geometry: {
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    viewport: {
      northeast: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
      southwest: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
    },
  },
});

const itinerarySchema = new mongoose.Schema({
  date: { type: String, required: true },
  activities: [activitySchema],
});

const placesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  website: { type: String, required: true },
  openingHours: [String],
  photos: [String],
  reviews: [
    {
      authorName: String,
      rating: String,
      text: String,
    },
  ],
  types: [String],
  formatted_address: {
    type: String,
    required: true,
  },
  briefDescription: {
    type: String,
    required: true,
  },
  geometry: {
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    viewport: {
      northeast: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
      southwest: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
    },
  },
});

const expensesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  splitBy: {
    type: String,
    required: true,
  },
  paidBy: {
    type: String,
    ref: "User",
  },
});

const tripSchema = new mongoose.Schema({
  tripName: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  startDay: {
    type: String,
    required: true,
  },
  endDay: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  travelers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  budget: {
    type: Number,
    required: true,
  },
  expenses: { expensesSchema },
  placesToVisit: { placesSchema },
  itinerary: { itinerarySchema },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Trip", tripSchema);
