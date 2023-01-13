import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive.js";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice.jsx";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  position: relative;
  background-color: #0275dd;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  ${mobile({ padding: "10px 0px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  ${mobile({ fontSize: "25px" })}
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: #0275dd;
  ${mobile({ flex: 1 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  transistion: transform 0.3s ease-in-out;
  &: hover {
    transform: scale(1.1);
  }
  ${mobile({ marginRight: "10px" })}
`;

const Text = styled.div`
  font-size: 14px;
  color: #000;
  position: relative;
  cursor: pointer;
  opacity: 1;
  z-index: 30;
  margin-right: 25px;
  &: hover {
    &: after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: #000;
    }
  }
  ${mobile({ display: "none" })}
`;

const Navbar = () => {
  const items = useSelector(selectCartItems);
  return (
    <Wrapper>
      <Logo>
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          TeeRexStore
        </Link>
      </Logo>
      <Right>
        <Text>Products</Text>
        <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={items.length} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Link>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
