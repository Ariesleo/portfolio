import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
      minlength: [2, 'Name must be at least 2 characters long.'],
      maxlength: [50, 'Name cannot exceed 50 characters.'],
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      trim: true,
      lowercase: true,
      match: [
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Please provide a valid email address.',
      ],
    },
    //   phoneNumber: {
    //     tel: {
    //       type: String,
    //       required: [true, 'Telephone number is required.'],
    //       validate: {
    //         validator: function (value) {
    //           return /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
    //             value
    //           );
    //         },
    //         message: 'Please provide a valid telephone number.',
    //       },
    //     },
    //     mobile: [
    //       {
    //         type: String,
    //         required: [true, 'At least one mobile number is required.'],
    //         validate: {
    //           validator: function (value) {
    //             return value.every((phone) =>
    //               /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)
    //             );
    //           },
    //           message: 'Please provide a valid mobile number.',
    //         },
    //       },
    //     ],
    //   },
    message: {
      type: String,
      required: [true, 'Message is required.'],
      minlength: [10, 'Message must be at least 10 characters long.'],
      maxlength: [1000, 'Message cannot exceed 1000 characters.'],
    },
  },
  { timestamps: true }
);

export const ContactQueryModel = model('contacts', contactSchema);
