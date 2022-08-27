import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cardsState, selectedRecipeState } from "../Atom";

export default function Aside() {
  const setSelectedRecipe = useSetRecoilState(selectedRecipeState);
  const sortedCards = [...useRecoilValue(cardsState)].sort((a, b) => {
    if (a.star < b.star) {
      return 1;
    }
    if (a.star > b.star) {
      return -1;
    }
    return 0;
  });

  return (
    <Wrapper>
      <Title>랭킹</Title>
      <Rank>
        {sortedCards.map((card, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setSelectedRecipe(card.id);
              }}
            >
              {i + 1}. {card.title}
            </div>
          );
        })}
      </Rank>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  width: 15vw;
  height: 100vh;
  border-right: 1px solid #333;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rank = styled.div`
  width: 100%;
  div {
    font-size: 30px;
    padding: 10px;
  }
`;

const Title = styled.div`
  height: 100px;
  border-bottom: 1px solid #333;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
