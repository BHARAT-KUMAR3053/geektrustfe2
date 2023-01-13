import axios from "axios";
import Image from "./Image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive.js";
import { useDispatch, useSelector } from "react-redux";
import { addToList, addToNewList } from "../redux/listSlice";

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 20px 30px;
  justify-content: center;
  align-content: center;
`;

const List = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  ${mobile({ gridTemplateColumns: "1fr" })}
`;
const Products = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const newitems = useSelector((state) => state.list.newitems);
  const query = useSelector((state) => state.query.search);
  const [newquery, setNewquery] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        const filter = res.data.map((item) => {
          var temp = Object.assign({}, item);
          if (temp.price >= 0 && temp.price <= 250) {
            temp.pricecat = "0-Rs 250";
          }
          if (temp.price >= 251 && temp.price <= 450) {
            temp.pricecat = "Rs 251-450";
          }
          if (temp.price >= 451) {
            temp.pricecat = "Rs 451";
          }
          return temp;
        });
        setProduct(filter);
        dispatch(addToList(filter));
      } catch {}
    };
    getProduct();
  }, [dispatch]);

  useEffect(() => {
    if (query.length > 0) {
      dispatch(addToNewList(product));
      let newsearch = newitems.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setNewquery(newsearch);
    } else {
      setNewquery(newitems);
    }
  }, [query, newitems, dispatch, product]);

  return (
    <Container>
      <List>
        {(newquery.length > 0 ? newquery : product).map((item) => {
          return <Image key={item.id} link={item} />;
        })}
      </List>
    </Container>
  );
};

export default Products;
