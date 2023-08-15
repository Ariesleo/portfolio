import React from 'react';
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardButtons,
  CardWrapper,
  TechStackItems,
  TechStack,
} from './styles';
import Button from '../atoms/button';

const Card = ({
  imageSrc,
  title,
  description,
  techStacks,
  onEdit,
  onDelete,
}) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

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
          <Button text>Live Preview</Button>
          <Button text>View Code</Button>
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
