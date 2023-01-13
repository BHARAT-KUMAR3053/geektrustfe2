import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ProductInc from "./ProductInc";
import { addToCart, deleteFromcart, removeFromCart } from "../redux/cartSlice";
import { mobile } from "../responsive";

const Container = styled.div`
  margin: 100px auto;
  width: 80vw;
`;
const Text = styled.div`
  font-size: 24px;
  font-weight: 150;
  padding: 50px;
  ${mobile({ padding: "0", fontWeight: "100", fontSize: "14px" })}
`;
const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: 50px;
  ${mobile({ marginLeft: "0" })}
`;

const Shoppingcart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const group = cartItems.reduce((result, item) => {
    (result[item.id] = result[item.id] || []).push(item);
    return result;
  }, {});
  return (
    <Container>
      <Text>Shopping Cart</Text>
      {Object.entries(group).map(([key, item]) => (
        <Item key={key}>
          <img
            src={item[0].imageURL}
            alt="productimage"
            style={{ width: "70px", height: "70px" }}
          />
          <Text style={{ width: "20vw" }}>{item[0].name}</Text>
          <ProductInc
            quantity={item.length}
            Increase={() => dispatch(addToCart(item[0]))}
            Decrease={() => {
              if (item.length > 0) {
                dispatch(removeFromCart(item[0]));
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(deleteFromcart(item[0]))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </Container>
  );
};

export default Shoppingcart;
