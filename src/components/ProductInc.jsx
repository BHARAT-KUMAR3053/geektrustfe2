import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IconButton from "@mui/material/IconButton";

const Container = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 5px;
  margin-bottom: 5px;
  color: #000;
  cursor: pointer;
`;

const ProductInc = ({ quantity, Increase, Decrease }) => {
  return (
    <Container>
      <IconButton aria-label="delete">
        <RemoveCircleOutlineIcon onClick={Decrease} />
      </IconButton>
      {quantity}
      <IconButton aria-label="delete">
        <AddCircleOutlineIcon onClick={Increase} />
      </IconButton>
    </Container>
  );
};

export default ProductInc;
