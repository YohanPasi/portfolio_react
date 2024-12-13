import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  border: 0.1px solid #306EE8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.primary};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

// const SubDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   font-size: 14px;
//   color: ${({ theme }) => theme.text_secondary};
// `;

const EducationCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} alt={experience.University || experience.school} />
        <Details>
          <Title>{experience.University || experience.school}</Title>
          {experience.degree && <SubTitle>Degree: {experience.degree}</SubTitle>}
          {experience.Stream && <SubTitle>Stream: {experience.Stream}</SubTitle>}
          {experience.Examination && <SubTitle>Examination: {experience.Examination}</SubTitle>}
          <Date>{experience.date}</Date>
        </Details>
      </Top>
      <Description>{experience.desc}</Description>
    </Card>
  );
};

export default EducationCard;
