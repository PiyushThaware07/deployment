const mongoose = require("mongoose");
const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    address: { type: String, required: true },
    type: { type: String, enum: ['Apartment', 'House', 'Villa', 'Condo', 'Townhouse'], required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    price: { type: Number, required: true },
    area: { type: Number },
    amenities: [{ type: String }],
    image: { type: String,required:false },
    available: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});
const PropertyModel = mongoose.model("properties", PropertySchema);
module.exports = PropertyModel;
