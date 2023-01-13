import React from "react";
import Products from "./Products";
import Sidepanel from "./Sidepanel";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 95vw;
`;

const Display = () => {
  return (
    <Container>
      <Sidepanel />
      <Products />
    </Container>
  );
};

export default Display;
