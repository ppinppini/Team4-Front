import styled from "@emotion/styled";
import { RecoilRoot } from "recoil";
import Aside from "./components/Aside";
import Main from "./components/Main";

export default function App() {
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
