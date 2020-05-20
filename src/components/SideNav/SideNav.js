import React from 'react';
import { Link, animateScroll } from "react-scroll";
import styled from 'styled-components';

const StyledNav = styled.nav`
background-color: #fec91d;
width: 260px;
position:fixed;
top: 56px;
left:0;
height:30%;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
transition: transform 0.5s ease;
z-index:2;
padding: 45px 35px;
a {
  font-size: 24px;
  text-decoration: none;
  color: black;
  display: block;
  font-family: 'Brandon Reg';
  text-align: left;
  margin-bottom: 20px;
}
`;

const SideNav = ({ open }) => {
  

  return (
    <StyledNav open={open}>
      <Link
        // className="nav-item"
        to="brunch"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
      menu
      </Link>
         
      <Link
        // className="nav-item"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
      visit
      </Link>
        
      <Link
        // className="nav-item"
        to="section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
      about
      </Link>
          
      <Link
        // className="nav-item"
        to="section5"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
      press
      </Link>
    </StyledNav>
  )
}
export default SideNav;