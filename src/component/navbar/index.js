import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light || "#fff"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%; /* Matches the parent height */
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary || "#000"};
  text-decoration: none;
  cursor: pointer;
  gap: 8px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary || "#000"};
  }
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary || "#000"};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary || "#007bff"};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  border: 1.8px solid ${({ theme }) => theme.primary || "#007bff"};
  border-radius: 20px;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 40px;
  background: none;
  color: ${({ theme }) => theme.primary || "#007bff"};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary || "#007bff"};
    color: ${({ theme }) => theme.text_light || "#fff"};
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.primary || "#007bff"};
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: translateY(${({ open }) => (open ? "0" : "-20px")});
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;


const MobileMenuLinks = styled(NavLink)`
  display: block;
  text-align: center;
`;

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <DiCssdeck size="2rem" />
          MyPortfolio
        </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact Me</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton
            onClick={() => window.open("https://github.com/YohanPasi", "_blank")}
          >
            Git hub Profile
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
      <MobileMenu open={open}>
        <MobileMenuLinks href="#about" onClick={() => setOpen(false)}>
          About
        </MobileMenuLinks>
        <MobileMenuLinks href="#skills" onClick={() => setOpen(false)}>
          Skills
        </MobileMenuLinks>
        <MobileMenuLinks href="#education" onClick={() => setOpen(false)}>
          Education
        </MobileMenuLinks>
        <MobileMenuLinks href="#projects" onClick={() => setOpen(false)}>
          Projects
        </MobileMenuLinks>
        <MobileMenuLinks href="#experience" onClick={() => setOpen(false)}>
          Experience
        </MobileMenuLinks>
        <MobileMenuLinks href="#contact" onClick={() => setOpen(false)}>
          Contact Me
        </MobileMenuLinks>
        <GithubButton
          onClick={() => window.open("https://github.com/YohanPasi", "_blank")}
        >
          Git hub Profile
        </GithubButton>
      </MobileMenu>
    </Nav>
  );
};

export default NavBar;

