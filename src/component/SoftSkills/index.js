import React from "react";
import styled from "styled-components";
import { softSkills } from "../../data/constants";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 50px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
  font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
  }
`;

const Desc = styled.div`
 font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
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

const Card = styled(motion.div)`
  
  border-radius: 20px;
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 280px;
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 240px;
  }

  @media (max-width: 500px) {
    width: 200px;
  }
`;

const CardIcon = styled.img`
  width: 100px;
  display: space-between;
  height: 100px;
  margin-bottom: 16px;

  
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin: 10px 0;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 16px;
  opacity: 0.9;
  line-height: 1.5;
`;

const SoftSkills = () => {
  return (
    <Container id="soft-skills">
      <Wrapper>
        <Title>Soft Skills</Title>
        <Desc>
          These are some of the interpersonal and leadership skills that I've developed.
        </Desc>
        <SkillsContainer>
          {softSkills.map((skill, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CardIcon src={skill.image} alt={skill.name} />
              <CardTitle>{skill.name}</CardTitle>
              <CardDescription>{skill.description}</CardDescription>
            </Card>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default SoftSkills;
