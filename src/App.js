import styled from 'styled-components';
import { keyframes } from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 100px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
`;
