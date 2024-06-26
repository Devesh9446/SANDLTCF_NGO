import React from 'react';
import Navbar from '../common/navbar.jsx';
import Sidebar from '../common/sidebar.jsx';
import MediaPhotoUpdate from './mediaPhotoUpdate.jsx';
import styled from 'styled-components';

function AllMedia() {
  return (
    <Container> 
      <Navbar />
      <Sidebar />
      <MainContent>
        <MediaPhotoUpdate />
      </MainContent> 
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative; /* Ensure the container is relatively positioned */
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-left: 250px; /* Adjust this value according to your sidebar width */
  position: relative; /* Ensure the main content is relatively positioned */
  z-index: 2; /* Set z-index higher than the sidebar */
`;

export default AllMedia;
