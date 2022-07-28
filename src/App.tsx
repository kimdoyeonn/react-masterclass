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
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 100,
  },
};

function App() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);
  return (
    <Wrapper>
      <AnimatePresence>
        {show ? (
          <Box
            variants={boxVariants}
            initial='initial'
            animate='visible'
            exit='leaving'
          />
        ) : null}
      </AnimatePresence>
      <button onClick={toggleShow}>click me</button>
    </Wrapper>
  );
}

export default App;
