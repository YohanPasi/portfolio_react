import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/constants";

const Container = styled.div`
  flex-direction: column;
  position: relative;
  z-index: 1;
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
  color: ${({ theme }) => theme?.text_primary || "#000"};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme?.text_secondary || "#666"};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme?.primary || "#306EE8"};
  color: ${({ theme }) => theme?.primary || "#306EE8"};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active, theme }) =>
    active &&
    `
      background-color: ${theme?.primary || "#306EE8"}20;
      color: ${theme?.primary || "#306EE8"};
    `}

  &:hover {
    background-color: ${({ theme }) => theme?.primary || "#306EE8"}08;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme?.primary || "#306EE8"};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <ToggleGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            Web App
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "android app"}
            onClick={() => setToggle("android app")}
          >
            Android App
          </ToggleButton>
        </ToggleGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
