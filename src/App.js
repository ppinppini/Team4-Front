import styled from "@emotion/styled";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import Aside from "./components/Aside";
import Main from "./components/Main";

export default function App() {
  const [start, setStart] = useState(true);

  if (start) {
    return (
      <Start>
        <Img src={require("./start.jpeg")} />
        <Button
          onClick={() => {
            setStart(false);
          }}
        >
          서비스 이용하기
        </Button>
      </Start>
    );
  }

  return (
    <RecoilRoot>
      <Wrapper>
        <Aside />
        <Main />
      </Wrapper>
    </RecoilRoot>
  );
}

const Wrapper = styled.section`
  display: flex;
`;

const Start = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #030303;
`;

const Button = styled.button`
  all: unset;
  position: absolute;
  top: 70vh;
  font-size: 50px;
  background-color: #030303;
  color: #aea77f;
`;
const Img = styled.img`
  height: 100vh;
`;
