import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: teal;
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};

  ${Title}:hover {
    font-size: 99px;
  }
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const animation = keyframes`
  from {
    color: tomato;
  } to {
    color: teal;
}
`;
const Btn = styled.button`
  color: tomato;
  animation: ${animation} 0.5s infinite;
`;
const Input = styled.input.attrs({ require: true, maxLength: 10 })`
  color: pink;
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Log in</Btn>
      <Btn as="a">Log in</Btn>
      <Input />
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
