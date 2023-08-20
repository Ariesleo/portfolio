import React from 'react';
import maskMan from '../../../images/files/maskMan.png';
import { useAppContext } from '../../../context/appContext';
import {
  DescriptionAndImage,
  Description,
  Image,
  Wrapper,
  Quotation,
  Skills,
  SkillWrapper,
  CurrentProjectStatus,
} from './styles';

const AboutMe = () => {
  const profileData = useAppContext();
  // console.log(Object.entries(profileData.skills));
  // const skills = Object.entries(profileData.skills);

  return (
    <>
      {Object.keys(profileData).length === 0 ? (
        <p>...fetching data</p>
      ) : (
        <Wrapper>
          <DescriptionAndImage>
            {/* this section for description and image */}
            <Description>
              <p>{profileData.description}</p>
            </Description>
            <div>
              <Image src={maskMan} alt="maskman" width="380px" height="340px" />
              <CurrentProjectStatus>
                {profileData && profileData.currentProject ? (
                  <div></div>
                ) : (
                  <></>
                )}
                <span>
                  currently working on{' '}
                  {profileData && profileData.currentProject ? (
                    <a href={profileData.currentProject.projectUrl}>
                      {profileData.currentProject.projectName}
                    </a>
                  ) : (
                    <span>...loading</span>
                  )}
                </span>
              </CurrentProjectStatus>
            </div>
          </DescriptionAndImage>
          <Quotation>
            {/* quotation */}
            <q>
              {profileData.quote.message}{' '}
              <span>{profileData.quote.author}</span>
            </q>
          </Quotation>
          <h4>#Skills----------</h4>
          <Skills>
            {/* skills */}
            {profileData && profileData.skills ? (
              <>
                {Object.entries(profileData.skills).map((skill, index) => {
                  return (
                    <SkillWrapper key={index}>
                      <h5>{skill[0]}</h5>
                      {skill[1].map((data, id) => {
                        return <p key={id}>{data}</p>;
                      })}
                    </SkillWrapper>
                  );
                })}
              </>
            ) : (
              <p>No Skills to display</p>
            )}
          </Skills>
        </Wrapper>
      )}
    </>
  );
};

export default AboutMe;
