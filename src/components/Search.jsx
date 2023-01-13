import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive.js";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { addToQuery } from "../redux/querySlice";

const SearchComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  height: 50px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  width: 18vw;
  align-items: center;
  position: absolute;
  padding: 10px;
  ${mobile({ margin: "5px auto", width: "80vw" })}
`;

const Input = styled.input`
  border: none;
  display: flex;
  flex: 1;
  outline: none;
  font-size: 18px;
  background-color: transparent;
  ${mobile({ width: "50px" })}
`;

const Search = () => {
  const dispatch = useDispatch();
  const handlechange = (e) => {
    const newQuery = e.target.value.toLowerCase();
    dispatch(addToQuery(newQuery));
  };
  return (
    <SearchComponent>
      <SearchContainer>
        <Input placeholder="Search" onChange={handlechange} />
        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
      </SearchContainer>
    </SearchComponent>
  );
};

export default Search;
