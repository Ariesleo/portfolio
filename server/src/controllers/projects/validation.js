import * as Yup from 'yup';

const projectSchema = () => {
  return Yup.object().shape({
    title: Yup.string()
      .trim()
      .required('Title is required.')
      .min(3, 'Title must be at least 3 characters.')
      .max(50, 'Title cannot exceed 50 characters.'),
    description: Yup.string()
      .trim()
      .min(100, 'Description must be at least 100 characters.')
      .max(1000, 'Description cannot exceed 1000 characters.'),
    technologies: Yup.array()
      .of(Yup.string())
      .min(1, 'At least one technology is required.'),
    image: Yup.string().nullable(),
    githubUrl: Yup.string().url('Invalid URL format for GitHub.').nullable(),
    demoUrl: Yup.string().url('Invalid URL format for demo.').nullable(),
    isPersonalProject: Yup.boolean()
      .required('Please specify if it is a personal project or not.')
      .default(false),
    startDate: Yup.date().nullable(),
    endDate: Yup.date().nullable(),
  });
};

// Validate the partial data or payload for the project
const patchProjectSchema = () => {
  return Yup.object().shape({
    title: Yup.string()
      .trim()
      .min(3, 'Title must be at least 3 characters.')
      .max(50, 'Title cannot exceed 50 characters.'),
    description: Yup.string()
      .trim()
      .min(100, 'Description must be at least 100 characters.')
      .max(1000, 'Description cannot exceed 1000 characters.'),
    technologies: Yup.array()
      .of(Yup.string())
      .min(1, 'At least one technology is required.'),
    image: Yup.string().nullable(),
    githubUrl: Yup.string().url('Invalid URL format for GitHub.').nullable(),
    demoUrl: Yup.string().url('Invalid URL format for demo.').nullable(),
    isPersonalProject: Yup.boolean().default(false),
    startDate: Yup.date().nullable(),
    endDate: Yup.date().nullable(),
  });
};

export { projectSchema, patchProjectSchema };
