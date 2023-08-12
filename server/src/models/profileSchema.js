import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: [3, 'Name must be at least 3 characters long.'],
      maxlength: [50, 'Name cannot exceed 50 characters.'],
    },
    designation: {
      type: String,
      trim: true,
      minlength: [5, 'Designation must be at least 5 characters long.'],
      maxlength: [50, 'Designation cannot exceed 50 characters.'],
    },
    summary: {
      type: String,
      trim: true,
      minlength: [50, 'Summary must be at least 50 characters long.'],
      maxlength: [250, 'Summary cannot exceed 250 characters.'],
    },
    description: {
      type: String,
      trim: true,
      minlength: [100, 'Description must be at least 100 characters long.'],
      maxlength: [1000, 'Description cannot exceed 1000 characters.'],
    },
    quote: {
      message: {
        type: String,
        trim: true,
        minlength: [5, 'Quote message must be at least 5 characters long.'],
        maxlength: [250, 'Quote message cannot exceed 250 characters.'],
      },
      author: {
        type: String,
        trim: true,
        minlength: [3, 'Quote author name must be at least 3 characters long.'],
        maxlength: [50, 'Quote author name cannot exceed 50 characters.'],
      },
      source: {
        type: String,
        trim: true,
        maxlength: [100, 'Quote source cannot exceed 100 characters.'],
      },
    },
    currentProject: {
      projectName: {
        type: String,
        minlength: [3, 'projectName must be at least 3 characters long.'],
        maxlength: [50, 'projectName cannot exceed 50 characters.'],
      },
      projectUrl: {
        type: String,
      },
    },
    skills: {
      programmingLanguages: {
        type: [String],
      },
      frameworksAndLibraries: {
        type: [String],
      },
      database: {
        type: [String],
      },
      tools: {
        type: [String],
      },
      collaborations: {
        type: [String],
      },
      others: {
        type: [String],
      },
    },
    contact: {
      email: {
        type: String,
        required: [true, 'Email is required.'],
        trim: true,
        lowercase: true,
      },
      phone: {
        type: String,
        trim: true,
        maxlength: 20,
      },
      discordId: {
        type: String,
        trim: true,
        maxlength: 32,
      },
      skypeId: {
        type: String,
        trim: true,
        maxlength: 32,
      },
    },
    media: {
      githubUrl: {
        type: String,
        trim: true,
      },
      linkedInUrl: {
        type: String,
        trim: true,
      },
      mediumUrl: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

export const ProfileModel = model('profiles', profileSchema);
