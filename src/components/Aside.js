import styled from "@emotion/styled";

export default function Aside() {
  return (
    <Wrapper>
      <Title>랭킹</Title>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  width: 15vw;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  height: 10vh;
  border-bottom: 1px solid #333;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
