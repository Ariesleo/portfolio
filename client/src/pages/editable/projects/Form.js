import React, { useState, useEffect } from 'react';
import Button from '../../../components/atoms/button';
import FormRow from '../../../components/atoms/formRow';
import { updateProject } from '../../../services/projectService';
import DatePicker from '../../../components/atoms/datePicker/DatePicker';
import DropdownSelect from '../../../components/atoms/dropdown/Dropdown';

const UpdateForm = ({ rowData }) => {
  const [project, setProject] = useState(rowData);
  const [message, setMessage] = useState('');

  // Image
  const [selectedImage, setSelectedImage] = useState(null);

  // dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const options = [
    { label: 'true', value: 'true' },
    { label: 'false', value: 'false' },
  ];
  const handleOptionSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  useEffect(() => {
    const loadProject = () => {
      setProject(rowData);
    };
    loadProject();
  }, [rowData]);

  const handleTechnologiesChange = (e) => {
    const { value } = e.target;
    const technologiesArray = value.split(',').map((tech) => tech.trim());
    setProject((prevProject) => ({
      ...prevProject,
      technologies: technologiesArray,
    }));
  };

  // handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      // render.reload async task
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        setProject((prevProject) => ({
          ...prevProject,
          image: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // handle dates
  const handleStartDateSelect = (date) => {
    setProject((prevProject) => ({
      ...prevProject,
      startDate: date,
    }));
    setStartDate(date);
  };

  const handleEndDateSelect = (date) => {
    setProject((prevProject) => ({
      ...prevProject,
      endDate: date,
    }));
    setEndDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        title,
        description,
        technologies,
        startDate,
        endDate,
        githubUrl,
        demoUrl,
        image,
        isPersonalProject,
        _id,
      } = project;
      const payload = {
        title,
        description,
        technologies,
        startDate,
        endDate,
        githubUrl,
        demoUrl,
        image,
        isPersonalProject,
      };
      const response = await updateProject(payload, _id);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error submitting project data.');
    }
  };
  return (
    <>
      {Object.keys(project).length > 0 ? (
        <form onSubmit={handleSubmit}>
          <FormRow
            label="_title"
            name="title"
            value={project.title}
            onChange={handleChange}
          />
          <FormRow
            label="_description"
            name="description"
            isTextarea
            value={project.description}
            onChange={handleChange}
          />
          <FormRow
            label="_technologies (comma-separated)"
            name="technologies"
            value={project.technologies}
            onChange={handleTechnologiesChange}
          />

          {/* Image upload */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FormRow
              type="file"
              label="Upload Image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div>
              <p>Selected Image:</p>
              {selectedImage || project.image ? (
                <img
                  // project.image ? project.image :
                  src={project.image ? project.image : selectedImage}
                  alt="project"
                  width="250px"
                  height="250px"
                />
              ) : (
                <p>select image</p>
              )}
            </div>
          </div>
          {/* dropdown*/}
          <div
            style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: ' center',
            }}
          >
            <p>isPersonalProject: </p>
            <div>
              <DropdownSelect options={options} onSelect={handleOptionSelect} />
            </div>
          </div>
          <FormRow
            label="GitHub URL"
            name="githubUrl"
            value={project.githubUrl}
            onChange={handleChange}
          />
          <FormRow
            label="Demo URL"
            name="demoUrl"
            value={project.demoUrl}
            onChange={handleChange}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DatePicker
              selectedDate={startDate}
              onSelect={handleStartDateSelect}
              placeholder="Start Date"
            />
            <DatePicker
              selectedDate={endDate}
              onSelect={handleEndDateSelect}
              placeholder="End Date"
            />
          </div>
          <br />
          <Button type="submit">Submit</Button>
          {message && <span>{message}</span>}
        </form>
      ) : (
        <p>...fetching data</p>
      )}
    </>
  );
};

export default UpdateForm;
