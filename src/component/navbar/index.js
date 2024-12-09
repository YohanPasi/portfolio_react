import React from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  cursor: pointer;
  gap: 8px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
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
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 40px;
  background: none;
  color: ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_light || "white"};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  right: 0;
  top: 80px;
  position: absolute;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => `${theme.card_light}99`};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

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
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton
            onClick={() => window.open("https://github.com/yourusername", "_blank")}
          >
            Github Profile
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
        <MobileMenuLinks href="#experience" onClick={() => setOpen(false)}>
          Experience
        </MobileMenuLinks>
        <MobileMenuLinks href="#projects" onClick={() => setOpen(false)}>
          Projects
        </MobileMenuLinks>
        <MobileMenuLinks href="#education" onClick={() => setOpen(false)}>
          Education
        </MobileMenuLinks>
        <GithubButton
  style={{
    backgroundColor: theme.primary,
    color: theme.text_light,
  }}
  onClick={() => window.open("https://github.com/yourusername", "_blank")}
>
  Github Profile
        </GithubButton>

      </MobileMenu>
    </Nav>
  );
};

export default NavBar;
