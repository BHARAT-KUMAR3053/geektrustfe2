import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductInc from "./ProductInc";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectCartItemsWithId,
  removeFromCart,
} from "../redux/cartSlice";
import Button from "@mui/material/Button";

const View = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 300px;
  background-color: #fff;
  width: 300px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const ImageContainer = styled.div`
  object-fit: contain;
  height: 250px;
  width: 200px;
  margin: 5px auto;
  transition: transform 0.3s ease-in-out;
  &: hover {
    transform: scale(1.2);
  } ;
`;
const Text = styled.div`
  display: flex;
  padding: 5px;
  justify-content: center;
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

const Image = ({ link }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectCartItemsWithId(state, link.id));
  const [quantity, setQuantity] = useState(0);
  const Increase = () => {
    dispatch(addToCart(link));
  };

  const Decrease = () => {
    if (quantity > 0) {
      dispatch(removeFromCart(link));
    }
  };

  useEffect(() => {
    setQuantity(items.length);
  }, [items.length]);

  return (
    <View>
      <ImageContainer>
        <img src={link.imageURL} alt="product" width="100%" />
      </ImageContainer>
      <Right>
        <Text>{link.price} Rs</Text>
        {quantity > 0 ? (
          <ProductInc
            quantity={quantity}
            Increase={Increase}
            Decrease={Decrease}
          />
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={Increase}
            style={{ marginBottom: "10px" }}
          >
            Add to Cart
          </Button>
        )}
      </Right>
    </View>
  );
};

export default Image;
