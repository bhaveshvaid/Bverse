import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background: ${props => props.scrolled ? 
    'linear-gradient(to right, #1e3c72, #2a5298)' : 
    'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
`;

const Logo = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, transparent);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    padding: 1rem 0;
  }
`;

const MenuItem = styled.li`
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00bfff, transparent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #00bfff;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 70px;
    right: 2rem;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00bfff;
    transform: translateY(-3px);
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Nav scrolled={scrolled}>
      <Logo>Bhavesh Vaid</Logo>
      
      <MobileIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      
      <MenuItems isOpen={isOpen}>
        <MenuItem>
          <MenuLink href="#home" onClick={() => setIsOpen(false)}>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#about" onClick={() => setIsOpen(false)}>About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#education" onClick={() => setIsOpen(false)}>Education</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MenuLink>
        </MenuItem>
      </MenuItems>
      
      <SocialIcons isOpen={isOpen}>
        <SocialIcon href={`https://github.com/${personalInfo.github}`} target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank">
          <FaLinkedin />
        </SocialIcon>
      </SocialIcons>
    </Nav>
  );
}

export default Navbar;