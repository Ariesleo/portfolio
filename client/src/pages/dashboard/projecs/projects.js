import Card from '../../../components/atoms/card';
import React, { useState, useEffect } from 'react';
import { fetchProject } from '../../../services/projectService';
import { Wrapper, CardWrapper } from './styles';

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchProject();
        setProjectData(res.data.data);
      } catch (err) {
        if (err.code === 'ERR_BAD_RESPONSE') {
          setErrorMessage('Server is Down. Try again later.');
        } else {
          setErrorMessage(err.response.data);
        }
      }
    };
    getData();
  }, []);

  return (
    <Wrapper>
      <h4>#Projects----------</h4>
      <>
        {projectData.length === 0 ? (
          <p>{errorMessage ? errorMessage : '...fetching data'}</p>
        ) : (
          <CardWrapper>
            {projectData.map((project) => (
              <Card
                key={project._id}
                imageSrc={project.image}
                title={project.title}
                description={project.description}
                techStacks={project.technologies}
                liveUrl={project.demoUrl}
                codeUrl={project.githubUrl}
              />
            ))}
          </CardWrapper>
        )}
      </>
    </Wrapper>
  );
};

export default Projects;
