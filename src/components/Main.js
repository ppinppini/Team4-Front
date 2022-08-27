import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedRecipeState } from "../Atom";
import Cards from "./Cards";
import Modal from "./Modal";
import Nav from "./Nav";

export default function Main() {
  const selectedRecipe = useRecoilValue(selectedRecipeState);

  return (
    <Wrapper>
      {selectedRecipe !== 0 && <Modal />}
      <Nav />
      <Cards />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  min-height: 100vh;
  margin-left: 15vw;
`;
