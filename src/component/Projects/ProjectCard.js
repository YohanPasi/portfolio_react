import React from "react";
import styled from "styled-components";

const Card = styled.a`
  width: 330px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ theme }) => theme.card};
  transition: all 0.5s ease-in-out;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-decoration: none;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-items: center;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 400;
  margin-left: 2px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary || "#666"};
  font-size: 14px;
  margin-top: 8px;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MemberImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primary};
`;

const MemberName = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const ProjectCard = ({ project }) => {
  return (
    <Card href={project.github} target="_blank" rel="noopener noreferrer">
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {project.member && project.member.length > 0 && (
        <Members>
          {project.member.map((member, index) => (
            <Member key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
            </Member>
          ))}
        </Members>
      )}
    </Card>
  );
};

export default ProjectCard;
