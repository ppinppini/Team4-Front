import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cardsState, currentCategoryState, selectedRecipeState } from "../Atom";

export default function Modal() {
  const [selectedRecipe, setSelectedRecipe] =
    useRecoilState(selectedRecipeState);
  const currentCategory = useRecoilValue(currentCategoryState);
  const data = useRecoilValue(cardsState).filter((e) => {
    return e.id === selectedRecipe;
  })[0];

  const setData = useSetRecoilState(cardsState);

  const [like, setLike] = useState(0);

  const addStar = async () => {
    await axios
      .patch("http://localhost:3001/recipes/" + selectedRecipe, {
        star: like + 1,
      })
      .then(async () => {
        setLike(like + 1);
        await axios.get("http://localhost:3001/recipes").then((res) => {
          setData(
            res.data.filter((e) => {
              return e.category === currentCategory;
            })
          );
        });
      });
  };

  useEffect(() => {
    setLike(data.star);
  }, []);

  return (
    <Wrapper>
      <Bg></Bg>
      <Info>
        <Close
          onClick={() => {
            setSelectedRecipe(0);
          }}
        >
          ❌
        </Close>
        <Img src={data.img} />
        <Title>{data.title}</Title>
        <Level>{data.level}</Level>
        <Star
          onClick={() => {
            addStar();
          }}
        >
          ❤ {like}
        </Star>
        <Stuff>
          <SubTitle>재료</SubTitle>
          {data.stuff.join(", ")}
        </Stuff>
        <Recipe>
          <SubTitle>조리법</SubTitle>
          {data.recipe.map((e, i) => {
            return <div key={i}>{e}</div>;
          })}
        </Recipe>
        <Alcohol>
          <SubTitle>잘 맞는 술</SubTitle>
          {data.alcohol.map((e, i) => {
            return (
              <Rec key={i}>
                <h3>{e.name}</h3>
                <img src={e.img} />
              </Rec>
            );
          })}
        </Alcohol>
      </Info>
    </Wrapper>
  );
}
const Level = styled.div`
  font-size: 25px;
`;
const Star = styled.div`
  font-size: 60px;
`;
const Rec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  h3 {
    width: 200px;
    text-align: center;
  }
  img {
    width: 300px;
    object-fit: contain;
    height: 300px;
    border-radius: 30px;
  }
`;
const Alcohol = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 60%;
  object-fit: cover;
  border-radius: 30px;
`;
const Recipe = styled.div`
  width: 100%;
`;
const Title = styled.div`
  font-size: 40px;
`;
const Stuff = styled.div`
  border: 1px solid #333;
  padding: 20px;
  width: 100%;
`;
const SubTitle = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Close = styled.div`
  font-size: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const Bg = styled.div`
  width: 100vw;
  height: 200vh;
  left: 0;
  top: 0;
  position: fixed;
  background-color: black;
  z-index: 100;
  opacity: 0.6;
`;

const Info = styled.div`
  border-radius: 15px;
  position: absolute;
  gap: 30px;
  padding: 70px;
  width: 40vw;
  top: 0;
  left: calc(50% - 20vw);
  z-index: 101;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aea77f;
`;
