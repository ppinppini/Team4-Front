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
  flex: 1 1 20%;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  align-items: center;
  gap: 20px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Img = styled.img`
  width: 70%;
  height: 60%;
  object-fit: cover;
  display: block;
`;

const Title = styled.div`
  font-size: 30px;
`;
