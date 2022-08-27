import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { selectedRecipeState } from "../Atom";

export default function Card({ card }) {
  const setSelectedRecipe = useSetRecoilState(selectedRecipeState);

  return (
    <Wrapper
      onClick={() => {
        setSelectedRecipe(card.id);
      }}
    >
      <Img src={card.img} />
      <Title>{card.title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #333;
  flex: 1 1 20%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

const Img = styled.img`
  width: 70%;
  display: block;
`;

const Title = styled.div`
  font-size: 50px;
`;
