import styled from "@emotion/styled";
import Cards from "./Cards";
import Nav from "./Nav";

export default function Main() {
  return (
    <Wrapper>
      <Nav />
      <Cards />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
