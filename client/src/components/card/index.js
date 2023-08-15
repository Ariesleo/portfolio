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
