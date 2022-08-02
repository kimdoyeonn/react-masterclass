import styled from 'styled-components';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [click, setClick] = useState(false);
  return (
    <Wrapper onClick={() => setClick(!click)}>
      <Box
        style={{
          justifyContent: click ? 'center' : 'flex-start',
          alignItems: click ? 'center' : 'flex-start',
        }}
      >
        <Circle layout />
      </Box>
    </Wrapper>
  );
}

export default App;
