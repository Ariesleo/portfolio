import React from 'react';
import {
  CardContainer,
  CardImage,
  DummyCardImage,
  CardTitle,
  CardDescription,
  CardButtons,
  CardWrapper,
  TechStackItems,
  TechStack,
} from './styles';
import Button from '../button';

const Card = ({
  imageSrc,
  title,
  description,
  techStacks,
  liveUrl,
  codeUrl,
}) => {
  return (
    <CardContainer>
      {imageSrc ? (
        <CardImage src={imageSrc} alt={title} />
      ) : (
        <DummyCardImage>No Image to display</DummyCardImage>
      )}

      <CardWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description.slice(0, 250)}...</CardDescription>

        <TechStack>
          Tech stack:
          <TechStackItems>
            {techStacks.map((tech, index) => (
              <React.Fragment key={index}>
                {index > 0 && ', '}
                {tech}
              </React.Fragment>
            ))}
          </TechStackItems>
        </TechStack>
        <CardButtons>
          {liveUrl && (
            <a href={liveUrl} target="_default">
              <Button text="true">Live Preview</Button>
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_default">
              <Button text="true">View Code</Button>
            </a>
          )}
        </CardButtons>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;

/* 

 const project = {
    imageSrc: 'https://via.placeholder.com/300x200', // Replace with your actual image URL
    title: 'Sample Project',
    description:
      'Duis aute irure dolor in velit esse cillum dolore hero hamada is doing all the works in his life.',
    techStacks: ['React', 'Node.js', 'MongoDB'],
  };

<Card
        imageSrc={project.imageSrc}
        title={project.title}
        description={project.description}
        techStacks={project.techStacks}
      />

*/
