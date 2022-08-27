import styled from "@emotion/styled";
import Nav from "./Nav";

export default function Main() {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
