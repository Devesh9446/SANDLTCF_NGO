import React from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components';
import {Link } from 'react-router-dom';

function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <SidebarHeader>
        SANDLTCF
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem><Link to="/editevents">Events</Link></SidebarNavItem>
        <SidebarNavItem><Link to="/editvolunteer">Volunteer</Link></SidebarNavItem>
        <SidebarNavItem><Link to="/editGallery">Gallery</Link></SidebarNavItem>
        <SidebarNavItem><Link to="">Donation</Link></SidebarNavItem>
        <SidebarNavItem><Link to="/editadmin">Admin</Link></SidebarNavItem>
        <SidebarNavItem><Link to="/editcertificates">Certificates</Link></SidebarNavItem>
        <SidebarNavItem><Link to="/editnewsClippings">News Clippings</Link></SidebarNavItem>
      </SidebarNav>
    </SidebarContainer>
  );
}
const SidebarContainer = styled.div`
  width: 250px;
  height: 100%;
  z-index: 1;
  top:0;
  background-color: #f8f9fa; 
  color: #333;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:auto;
`;

const LogoContainer = styled.div`
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 100px; 
  height: auto; 
`;

const SidebarHeader = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 1.5rem;
  background-color: #e9ecef; 
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%; 
`;

const SidebarNavItem = styled.li`
  padding: 10px;
  cursor: pointer; 
  transition: background-color .3s ease; 
  width: 100%; 
  text-align: center; 
  
  &:hover {
    background-color: #e9ecef; 
  }
`;

export default Sidebar;
