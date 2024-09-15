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
            return e.category === parseInt(currentCategory);
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
  gap: 60px;
  margin-top: 100px;
  padding: 60px;
  width: 85vw;
`;
