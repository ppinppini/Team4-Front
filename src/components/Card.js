import styled from "@emotion/styled";

export default function Card({ card }) {
  return (
    <Wrapper>
      {card.id}
      {card.title}
      {card.stuff}
      {card.recipe}
      {card.alcohol.name}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #333;
  flex: 1 1 20%;
  height: 400px;
`;
