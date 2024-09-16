import mongoose, { Schema } from "mongoose";

const contactForm = new Schema({
  name: {
    type: String,
    required: true,
  },
  mob_Number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const ContactForm = mongoose.models.ContactForm || mongoose.model('ContactForm', contactForm);

export default ContactForm;