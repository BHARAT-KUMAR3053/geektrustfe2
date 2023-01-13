import React from "react";
import SideComponent from "./SideComponent";
import styled from "styled-components";
import { mobile } from "../responsive.js";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 15vw;
  height: fit-content;
  padding: 30px;
  margin-left: 20px;
  margin-top: 10vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: sticky;
  top: 60px;
  ${mobile({ display: "none" })}
`;
const Text = styled.div`
  font-size: 14px;
  color: #000;
  ${mobile({ display: "none" })}
`;

const Sidepanel = () => {
  const newitems = useSelector((state) => state.list.newitems);
  return (
    <>
      <Text>
        {newitems.length
          ? `${newitems.length} results found`
          : "no results!! showing all"}
      </Text>
      <Container>
        <SideComponent heading="Colour" values={["Red", "Blue", "Green"]} />
        <SideComponent heading="Gender" values={["Men", "Women"]} />
        <SideComponent
          heading="Price"
          values={["0-Rs 250", "Rs 251-450", "Rs 451"]}
        />
        <SideComponent heading="Type" values={["Polo", "Hoodie", "Basic"]} />
      </Container>
    </>
  );
};

export default Sidepanel;
