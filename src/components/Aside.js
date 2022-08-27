import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { cardsState } from "../Atom";

export default function Aside() {
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
            <div key={i}>
              {i + 1}: {card.id}
            </div>
          );
        })}
      </Rank>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  width: 15vw;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rank = styled.div`
  width: 100%;
  div {
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
