import * as Yup from 'yup';

const profileSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Name must be at least 3 characters.')
      .max(50, 'Name cannot exceed 50 characters.'),
    designation: Yup.string()
      .trim()
      .min(5, 'Designation must be at least 5 characters.')
      .max(50, 'Designation cannot exceed 50 characters.'),
    summary: Yup.string()
      .trim()
      .min(50, 'Summary must be at least 50 characters.')
      .max(250, 'Summary cannot exceed 250 characters.'),
    description: Yup.string()
      .trim()
      .min(100, 'Description must be at least 100 characters.')
      .max(1000, 'Description cannot exceed 1000 characters.'),
    quote: Yup.object().shape({
      message: Yup.string()
        .trim()
        .min(5, 'Quote message must be at least 5 characters.')
        .max(250, 'Quote message cannot exceed 250 characters.'),
      author: Yup.string()
        .trim()
        .min(3, 'Quote author name must be at least 3 characters.')
        .max(50, 'Quote author name cannot exceed 50 characters.'),
      source: Yup.string()
        .trim()
        .max(100, 'Quote source cannot exceed 100 characters.'),
    }),
    currentProject: Yup.object().shape({
      projectName: Yup.string()
        .trim()
        .min(3, 'Project name must be at least 3 characters.')
        .max(50, 'Project name cannot exceed 50 characters.'),
      projectUrl: Yup.string()
        .trim()
        .min(10, 'Current project url must be at least 10 characters long.')
        .max(200, 'Current project url cannot exceed 200 characters.'),
    }),
    skills: Yup.object().shape({
      programmingLanguages: Yup.array()
        .of(Yup.string())
        .max(15, 'Programming languages list cannot exceed 10 items.'),
      frameworksAndLibraries: Yup.array()
        .of(Yup.string())
        .max(15, 'Frameworks and libraries list cannot exceed 10 items.'),
      database: Yup.array()
        .of(Yup.string())
        .max(5, 'Database list cannot exceed 10 items.'),
      tools: Yup.array()
        .of(Yup.string())
        .max(20, 'Tools list cannot exceed 10 items.'),
      collaborations: Yup.array()
        .of(Yup.string())
        .max(15, 'Collaborations list cannot exceed 10 items.'),
      others: Yup.array()
        .of(Yup.string())
        .max(25, 'others list cannot exceed 10 items.'),
    }),
    contact: Yup.object().shape({
      email: Yup.string().email('Invalid email format.').trim().lowercase(),
      phone: Yup.string()
        .trim()
        .min(7, 'phone number must be at least 7 characters long.')
        .max(15, 'phone number cannot exceed 15 characters.'),
      discordId: Yup.string()
        .trim()
        .min(2, 'discordId or username must be at least 2 characters long.')
        .max(32, 'discordId or username cannot exceed 32 characters.'),
      skypeId: Yup.string()
        .trim()
        .min(2, 'skypeId or username must be at least 2 characters long.')
        .max(32, 'skypeId or username cannot exceed 32 characters.'),
    }),
    media: Yup.object().shape({
      githubUrl: Yup.string()
        .trim()
        .min(10, 'github url must be at least 10 characters long.')
        .max(200, 'github url cannot exceed 200 characters.'),
      linkedInUrl: Yup.string()
        .trim()
        .min(10, 'linkedIn url must be at least 10 characters long.')
        .max(200, 'linkedIn url cannot exceed 200 characters.'),
      mediumUrl: Yup.string()
        .trim()
        .min(10, 'medium url must be at least 10 characters long.')
        .max(200, 'medium url cannot exceed 200 characters.'),
    }),
  });
};

export { profileSchema };
