import * as Yup from 'yup';

const projectSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required('Title is required.')
    .min(3, 'Title must be at least 3 characters long.')
    .max(50, 'Title cannot exceed 50 characters.'),
  description: Yup.string()
    .trim()
    .min(100, 'Description must be at least 100 characters long.')
    .max(1000, 'Description cannot exceed 1000 characters.'),
  technologies: Yup.array().of(Yup.string()), // Array of strings
  image: Yup.mixed().test('isImage', 'Invalid image format.', (value) => {
    if (!value) return true; // Allow empty image
    return (
      value &&
      value.data instanceof Buffer &&
      typeof value.contentType === 'string'
    );
  }),
  githubUrl: Yup.string().url('Invalid URL format for GitHub.'),
  demoUrl: Yup.string().url('Invalid URL format for demo.'),
  isPersonalProject: Yup.boolean().required(
    'Please specify if it is a personal project or not.'
  ),
  startDate: Yup.date(),
  endDate: Yup.date(),
});

export { projectSchema };
