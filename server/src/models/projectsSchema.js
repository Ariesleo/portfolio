import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required.'],
      minlength: [3, 'Name must be at least 2 characters long.'],
      maxlength: [50, 'Name cannot exceed 50 characters.'],
    },
    description: {
      type: String,
      trim: true,
      minlength: [100, 'Description must be at least 100 characters long.'],
      maxlength: [1000, 'Description cannot exceed 1000 characters.'],
    },
    technologies: {
      type: [String],
    },
    image: {
      data: Buffer, // Binary image data
      contentType: String, // MIME type of the image
    },
    githubUrl: {
      type: String,
    },
    demoUrl: {
      type: String,
    },
    isPersonalProject: {
      type: Boolean,
      required: true,
      default: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const ProjectModel = model('projects', projectSchema);
