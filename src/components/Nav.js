import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { currentCategoryState } from "../Atom";

export default function Nav() {
  const [categories, setCategories] = useState([]);

  const setCurrentCategory = useSetRecoilState(currentCategoryState);

  const getCategories = async () => {
    await axios
      .get("http://localhost:3001/categories")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Wrapper>
      {categories.map((category, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setCurrentCategory(category.id);
            }}
          >
            {category.title}
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 85vw;
  height: 10vh;
  border-bottom: 1px solid #333;
  div {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
