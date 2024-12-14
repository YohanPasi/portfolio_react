import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { motion } from "framer-motion";

const Container = styled.div`
  flex-direction: column;
  position: relative;
  z-index:1;
  align-items: center;
  display: flex;
  justify-content: center;

`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px){
    margin-top: 12px;
    font-size: 32px;
  }
  
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  
    @media (max-width: 768px){
    font-size: 16px;
  }

`;

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 10px 36px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_light};
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 8px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  
`;


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working for the past 2 years.
        </Desc>
        <SkillsContainer>
  {skills.map((item, index) => (
    <Skill
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <SkillTitle>{item.title}</SkillTitle>
      <SkillList>
        {item.skills.map((skill, skillIndex) => (
          <SkillItem key={skillIndex}>
            <SkillImage src={skill.image} alt={skill.name} />
            {skill.name}
          </SkillItem>
        ))}
      </SkillList>
    </Skill>
  ))}
        </SkillsContainer>

      </Wrapper>
    </Container>
  );
};

export default Skills;
