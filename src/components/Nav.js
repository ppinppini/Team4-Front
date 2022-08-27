import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentCategoryState } from "../Atom";

export default function Nav() {
  const [categories, setCategories] = useState([]);

  const [currentCategory, setCurrentCategory] =
    useRecoilState(currentCategoryState);

  const getCategories = async () => {
    await axios
      .get("http://localhost:3001/categories")
      .then((res) => {
        setCategories(res.data);
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
        if (currentCategory === i + 1) {
          return (
            <div
              style={{ fontSize: "30px" }}
              key={i}
              onClick={() => {
                setCurrentCategory(category.id);
              }}
            >
              {category.title}
            </div>
          );
        }
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
  background-color: #030303;
  display: flex;
  justify-content: space-evenly;
  width: 85vw;
  position: fixed;
  height: 100px;
  border-bottom: 2px solid #aea77f;
  color: #aea77f;
  div {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
