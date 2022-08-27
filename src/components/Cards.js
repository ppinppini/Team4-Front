import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cardsState, currentCategoryState } from "../Atom";
import Card from "./Card";

export default function Cards() {
  const currentCategory = useRecoilValue(currentCategoryState);
  const [cards, setCards] = useRecoilState(cardsState);

  const getCards = async () => {
    await axios
      .get("http://localhost:3001/recipes")
      .then((res) => {
        setCards(
          res.data.filter((e) => {
            return e.category === currentCategory;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCards();
  }, [currentCategory]);

  return (
    <Wrapper>
      {cards.map((card, i) => {
        return <Card key={i} card={card} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* height: calc(90vh - 40px); */
  gap: 20px;
  padding: 20px;
  width: calc(85vw - 40px);
`;
