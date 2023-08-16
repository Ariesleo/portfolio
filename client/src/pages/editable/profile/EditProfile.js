import React, { useState, useEffect } from 'react';
import Button from '../../../components/atoms/button';
import FormRow from '../../../components/atoms/formRow';
import { fetchProfile, updateProfile } from '../../../services/profileService';

const initialState = {
  name: '',
  designation: '',
  summary: '',
  description: '',
  quote: {
    message: '',
    author: '',
    source: '',
  },
  currentProject: {
    projectName: '',
    projectUrl: '',
  },
  skills: {
    programmingLanguages: [],
    frameworksAndLibraries: [],
    database: [],
    tools: [],
    collaborations: [],
    others: [],
  },
  contact: {
    email: '',
    phone: '',
    discordId: '',
    skypeId: '',
  },
  media: {
    githubUrl: '',
    linkedInUrl: '',
    mediumUrl: '',
  },
};
const EditProfile = () => {
  const [profileData, setProfileData] = useState(initialState);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, parentKey, childKey) => {
    const { value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [parentKey]: {
        ...prevData[parentKey],
        [childKey]: value,
      },
    }));
  };

  const handleSkillsChange = (e, category) => {
    const { value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [category]: value.split(',').map((item) => item.trim()),
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform PATCH request to update the profile data on the backend
      const response = await updateProfile(profileData);
      if (response.data.message) {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error updating profile data:', error);
    }
  };

  useEffect(() => {
    // Fetch the profile data from the backend using a GET request
    // and populate the form fields with the fetched data
    const fetchData = async () => {
      const fetchedData = await fetchProfile();
      if (fetchedData.data.data) {
        setProfileData(fetchedData.data.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}
    >
      <form onSubmit={handleSubmit}>
        <FormRow
          label="_name:"
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleChange}
        />
        <FormRow
          label="_designation:"
          type="text"
          name="designation"
          value={profileData.designation}
          onChange={handleChange}
        />

        {/* Summary */}
        <FormRow
          label="_summary:"
          type="text"
          isTextarea
          name="summary"
          value={profileData.summary}
          onChange={handleChange}
        />

        {/* Description */}
        <FormRow
          label="_description:"
          type="text"
          isTextarea
          name="description"
          value={profileData.description}
          onChange={handleChange}
        />

        {/* Quote */}
        <h5>Quote</h5>
        <FormRow
          label="_Quote Message:"
          type="text"
          name="quoteMessage"
          value={profileData.quote.message}
          onChange={(e) => handleNestedChange(e, 'quote', 'message')}
        />
        <FormRow
          label="_Quote Author:"
          type="text"
          name="quoteAuthor"
          value={profileData.quote.author}
          onChange={(e) => handleNestedChange(e, 'quote', 'author')}
        />
        <FormRow
          label="_Quote Source:"
          type="text"
          name="quoteSource"
          value={profileData.quote.source}
          onChange={(e) => handleNestedChange(e, 'quote', 'source')}
        />

        {/* Current Project */}
        <h5>Current Project</h5>
        <FormRow
          label="_Project Name:"
          type="text"
          name="projectName"
          value={profileData.currentProject.projectName}
          onChange={(e) =>
            handleNestedChange(e, 'currentProject', 'projectName')
          }
        />
        <FormRow
          label="_Project URL:"
          type="text"
          name="projectUrl"
          value={profileData.currentProject.projectUrl}
          onChange={(e) =>
            handleNestedChange(e, 'currentProject', 'projectUrl')
          }
        />

        {/* Skills */}
        <h5>Skills</h5>
        <FormRow
          label="_Programming Languages (comma-separated):"
          type="text"
          name="programmingLanguages"
          value={profileData.skills.programmingLanguages.join(', ')}
          onChange={(e) => handleSkillsChange(e, 'programmingLanguages')}
        />
        <FormRow
          label="_Frameworks and Libraries (comma-separated):"
          type="text"
          name="frameworksAndLibraries"
          value={profileData.skills.frameworksAndLibraries.join(', ')}
          onChange={(e) => handleSkillsChange(e, 'frameworksAndLibraries')}
        />
        <FormRow
          label="_Database (comma-separated):"
          type="text"
          name="database"
          value={profileData.skills.database.join(', ')}
          onChange={(e) => handleSkillsChange(e, 'database')}
        />
        <FormRow
          label="tools (comma-separated):"
          type="text"
          name="tools"
          value={profileData.skills.tools.join(', ')}
          onChange={(e) => handleSkillsChange(e, 'tools')}
        />
        <FormRow
          label="_collaborations (comma-separated):"
          type="text"
          name="collaborations"
          value={profileData.skills.collaborations.join(', ')}
          onChange={(e) => handleSkillsChange(e, 'collaborations')}
        />
        <FormRow
          label="_others (comma-separated):"
          type="text"
          name="others"
          value={profileData.skills.others.join(', ')}
          onChange={(e) => handleSkillsChange(e, 'others')}
        />

        {/* Contact */}
        <h5>Contact</h5>
        <FormRow
          label="_email:"
          type="email"
          name="email"
          value={profileData.contact.email}
          onChange={(e) => handleNestedChange(e, 'contact', 'email')}
        />
        <FormRow
          label="_phone:"
          type="text"
          name="phone"
          value={profileData.contact.phone}
          onChange={(e) => handleNestedChange(e, 'contact', 'phone')}
        />
        <FormRow
          label="_discordId:"
          type="text"
          name="discordId"
          value={profileData.contact.discordId}
          onChange={(e) => handleNestedChange(e, 'contact', 'discordId')}
        />
        <FormRow
          label="_skypeId:"
          type="text"
          name="skypeId"
          value={profileData.contact.skypeId}
          onChange={(e) => handleNestedChange(e, 'contact', 'skypeId')}
        />

        {/* Media */}
        <h5>Media</h5>
        <FormRow
          label="_githubUrl:"
          type="text"
          name="githubUrl"
          value={profileData.media.githubUrl}
          onChange={(e) => handleNestedChange(e, 'media', 'githubUrl')}
        />
        <FormRow
          label="_linkedInUrl:"
          type="text"
          name="linkedInUrl"
          value={profileData.media.linkedInUrl}
          onChange={(e) => handleNestedChange(e, 'media', 'linkedInUrl')}
        />
        <FormRow
          label="_mediumUrl:"
          type="text"
          name="mediumUrl"
          value={profileData.media.mediumUrl}
          onChange={(e) => handleNestedChange(e, 'media', 'mediumUrl')}
        />
        <Button type="submit">Save Changes</Button>
        {message && <span>{message}</span>}
      </form>
    </div>
  );
};

export default EditProfile;
