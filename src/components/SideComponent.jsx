import Checkbox from "@mui/joy/Checkbox";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToFilter, removeFromFilter } from "../redux/colorSlice";
import { addToNewList } from "../redux/listSlice";

const Container = styled.div`
  margin-bottom: 10px;
`;

const Heading = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 10px 10px 5px;
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 10px;
`;

const SideComponent = ({ heading, values }) => {
  const dispatch = useDispatch();
  const color = ["Red", "Green", "Blue"];
  const gender = ["Men", "Women"];
  const type = ["Basic", "Hoodie", "Polo"];
  const price = ["0-Rs 250", "Rs 251-450", "Rs 451"];
  const listItems = useSelector((state) => state.list.items);
  const colorItems = useSelector((state) => state.color.filterItems);

  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      if (
        value === "Red" ||
        value === "Blue" ||
        value === "Green" ||
        value === "Men" ||
        value === "Women" ||
        value === "Polo" ||
        value === "Hoodie" ||
        value === "Basic" ||
        value === "0-Rs 250" ||
        value === "Rs 251-450" ||
        value === "Rs 451"
      ) {
        dispatch(addToFilter(value));
        const newcolor = [...colorItems];
        newcolor.push(value);
        const result = listItems.filter((item) => {
          if (newcolor.some((item) => color.includes(item))) {
            return newcolor.includes(item.color);
          }
          return true;
        });
        const genderresult = result.filter((item) => {
          if (newcolor.some((item) => gender.includes(item))) {
            return newcolor.includes(item.gender);
          }
          return true;
        });
        const typeresult = genderresult.filter((item) => {
          if (newcolor.some((item) => type.includes(item))) {
            return newcolor.includes(item.type);
          }
          return true;
        });
        const priceresult = typeresult.filter((item) => {
          if (newcolor.some((item) => price.includes(item))) {
            return newcolor.includes(item.pricecat);
          }
          return true;
        });

        dispatch(addToNewList(priceresult));
      }
    }
    if (!checked) {
      if (
        value === "Red" ||
        value === "Blue" ||
        value === "Green" ||
        value === "Men" ||
        value === "Women" ||
        value === "Polo" ||
        value === "Hoodie" ||
        value === "Basic" ||
        value === "0-Rs 250" ||
        value === "Rs 251-450" ||
        value === "Rs 451"
      ) {
        dispatch(removeFromFilter(value));
        let index = colorItems.indexOf(value);
        const rest = [...colorItems];
        rest.splice(index, 1);
        const result = listItems.filter((item) => {
          if (rest.some((item) => gender.includes(item))) {
            return rest.includes(item.color);
          }
          return true;
        });
        const genderresult = result.filter((item) => {
          if (rest.some((item) => gender.includes(item))) {
            return rest.includes(item.gender);
          }
          return true;
        });
        const typeresult = genderresult.filter((item) => {
          if (rest.some((item) => type.includes(item))) {
            return rest.includes(item.type);
          }
          return true;
        });
        const priceresult = typeresult.filter((item) => {
          if (rest.some((item) => price.includes(item))) {
            return rest.includes(item.pricecat);
          }
          return true;
        });
        dispatch(addToNewList(priceresult));
      }
    }
  };
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Options>
        {values.map((e) => (
          <Checkbox
            key={e}
            disabled={false}
            label={e}
            value={e}
            variant="outlined"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        ))}
      </Options>
    </Container>
  );
};

export default SideComponent;
